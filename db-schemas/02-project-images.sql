-- projects.image_url is deprecated/unused; project_images is the source of truth for screenshots.
CREATE TABLE IF NOT EXISTS project_images (
  id SERIAL PRIMARY KEY,
  project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  image BYTEA NOT NULL,
  mime_type VARCHAR(100) NOT NULL,
  caption JSONB,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_project_images_project ON project_images(project_id, display_order);
