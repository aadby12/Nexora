create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  short_description text not null default '',
  full_description text not null default '',
  category text not null default '',
  tech_stack text[] not null default '{}',
  live_url text not null default '',
  featured boolean not null default false,
  sort_order integer not null default 0,
  thumbnail_image text not null default '',
  thumbnail_alt text not null default '',
  key_features text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_images (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  image_url text not null,
  alt_text text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.services (
  id text primary key,
  title text not null,
  description text not null default '',
  icon text not null default 'code',
  cta text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  quote text not null,
  name text not null,
  role text not null default '',
  company text not null default '',
  featured boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null default '',
  company text not null default '',
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique,
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;
alter table public.project_images enable row level security;
alter table public.services enable row level security;
alter table public.testimonials enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.site_settings enable row level security;
alter table public.admin_users enable row level security;

create policy "Public can read projects"
on public.projects for select
using (true);

create policy "Public can read project images"
on public.project_images for select
using (true);

create policy "Public can read services"
on public.services for select
using (true);

create policy "Public can read testimonials"
on public.testimonials for select
using (true);

create policy "Public can read site settings"
on public.site_settings for select
using (true);

create policy "Authenticated admins manage projects"
on public.projects for all
using (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = auth.uid()
  )
);

create policy "Authenticated admins manage project images"
on public.project_images for all
using (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = auth.uid()
  )
);

create policy "Authenticated admins manage services"
on public.services for all
using (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = auth.uid()
  )
);

create policy "Authenticated admins manage testimonials"
on public.testimonials for all
using (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = auth.uid()
  )
);

create policy "Authenticated admins manage site settings"
on public.site_settings for all
using (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = auth.uid()
  )
);

create policy "Authenticated user can read own admin record"
on public.admin_users for select
using (auth.uid() = user_id);

create policy "Authenticated admins read contacts"
on public.contact_submissions for select
using (
  exists (
    select 1 from public.admin_users
    where admin_users.user_id = auth.uid()
  )
);

create policy "Public can create contact submissions"
on public.contact_submissions for insert
with check (true);
