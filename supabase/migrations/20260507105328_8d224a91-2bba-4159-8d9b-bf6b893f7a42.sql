-- Lock down function search_path & execute privileges
alter function public.touch_updated_at() set search_path = public;
revoke execute on function public.has_role(uuid, app_role) from public, anon, authenticated;
grant execute on function public.has_role(uuid, app_role) to authenticated;

-- Replace broad public SELECT on storage with object-level read (still allows public file URLs, blocks listing)
drop policy if exists "public read cms images" on storage.objects;
create policy "public read cms image objects" on storage.objects
  for select using (bucket_id = 'cms-images' and (storage.foldername(name))[1] is not null);