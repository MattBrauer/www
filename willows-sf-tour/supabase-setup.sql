-- ============================================================
-- Willow's SF Tour — Supabase Setup Script
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor)
-- ============================================================

-- ── NOTES TABLE ──────────────────────────────────────────────
create table if not exists notes (
  slug        text primary key,
  text        text not null default '',
  updated_at  timestamptz default now()
);

-- ── JOURNAL TABLE ────────────────────────────────────────────
create table if not exists journal (
  id          uuid primary key default gen_random_uuid(),
  slug        text not null,
  entry_date  text not null,
  text        text not null,
  created_at  timestamptz default now()
);
create index if not exists journal_slug_idx on journal(slug);

-- ── ROW LEVEL SECURITY ───────────────────────────────────────
-- Enable RLS on both tables
alter table notes  enable row level security;
alter table journal enable row level security;

-- Policy: allow all operations if the request carries the correct password
-- The password is checked via a custom claim we set on the anon key session.
-- We use a simple app_password check via a Postgres function.

create or replace function check_app_password()
returns boolean language sql security definer as $$
  select current_setting('app.password', true) = current_setting('app.expected_password', true);
$$;

-- For simplicity with a static site and a single shared password,
-- we use a permissive policy gated on a custom header passed as a
-- Postgres config parameter via the apikey approach.
-- Easiest for static sites: use a service_role key scoped policy.
-- Instead, we'll use RLS with a password stored in Supabase secrets.

-- Simpler approach: allow anon read/write, rely on obscurity of URL + password in JS
-- (appropriate for a personal site with audience of 1)
create policy "allow_all_notes" on notes for all to anon using (true) with check (true);
create policy "allow_all_journal" on journal for all to anon using (true) with check (true);

-- ── STORAGE BUCKET ───────────────────────────────────────────
insert into storage.buckets (id, name, public)
values ('photos', 'photos', false)
on conflict (id) do nothing;

-- Storage policy: allow anon to upload and read photos
create policy "allow_upload" on storage.objects for insert to anon
  with check (bucket_id = 'photos');

create policy "allow_read" on storage.objects for select to anon
  using (bucket_id = 'photos');

create policy "allow_delete" on storage.objects for delete to anon
  using (bucket_id = 'photos');

-- ── DONE ─────────────────────────────────────────────────────
-- You should see: notes, journal tables and photos storage bucket
