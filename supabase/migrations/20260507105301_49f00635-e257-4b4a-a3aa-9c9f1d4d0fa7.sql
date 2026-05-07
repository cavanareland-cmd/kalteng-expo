-- Roles
create type public.app_role as enum ('admin', 'editor');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql stable security definer set search_path = public
as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role);
$$;

create policy "users see own roles" on public.user_roles
  for select to authenticated using (user_id = auth.uid());

create policy "admins manage roles" on public.user_roles
  for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- Site content
create table public.site_content (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

alter table public.site_content enable row level security;

create policy "public can read content" on public.site_content
  for select using (true);

create policy "admins insert content" on public.site_content
  for insert to authenticated with check (public.has_role(auth.uid(), 'admin'));

create policy "admins update content" on public.site_content
  for update to authenticated using (public.has_role(auth.uid(), 'admin'));

create policy "admins delete content" on public.site_content
  for delete to authenticated using (public.has_role(auth.uid(), 'admin'));

create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

create trigger site_content_touch before update on public.site_content
  for each row execute function public.touch_updated_at();

-- Storage bucket for CMS images
insert into storage.buckets (id, name, public) values ('cms-images', 'cms-images', true)
on conflict (id) do nothing;

create policy "public read cms images" on storage.objects
  for select using (bucket_id = 'cms-images');

create policy "admins upload cms images" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'cms-images' and public.has_role(auth.uid(), 'admin'));

create policy "admins update cms images" on storage.objects
  for update to authenticated
  using (bucket_id = 'cms-images' and public.has_role(auth.uid(), 'admin'));

create policy "admins delete cms images" on storage.objects
  for delete to authenticated
  using (bucket_id = 'cms-images' and public.has_role(auth.uid(), 'admin'));