-- Some projects have a separate mobile app repo alongside the main (monorepo) github_url.
ALTER TABLE projects ADD COLUMN IF NOT EXISTS mobile_url VARCHAR(500);
