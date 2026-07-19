// Usage: node scripts/upload-project-images.mjs <projectId> <folder>
// Reads all image files in <folder> (sorted alphabetically), uploads them to
// project_images as bytea, in that order. Run against the same DB the
// backend uses (reads DB_HOST/PORT/USER/PASSWORD/NAME env vars, same
// defaults as services/service-portfolio/configs/datasource-config.js).
import { readdirSync, readFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import pg from 'pg';

const MIME_BY_EXT = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
};

const [, , projectIdArg, folder] = process.argv;

if (!projectIdArg || !folder) {
  console.error('Usage: node scripts/upload-project-images.mjs <projectId> <folder>');
  process.exit(1);
}

const projectId = Number(projectIdArg);
if (!Number.isInteger(projectId)) {
  console.error('projectId must be an integer');
  process.exit(1);
}

const pool = new pg.Pool({
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 5432),
  user: process.env.DB_USER ?? 'personel',
  password: process.env.DB_PASSWORD ?? 'personel',
  database: process.env.DB_NAME ?? 'personel_website',
});

const files = readdirSync(folder)
  .filter((name) => MIME_BY_EXT[extname(name).toLowerCase()])
  .sort();

if (files.length === 0) {
  console.error(`No supported image files (png/jpg/jpeg/webp) found in ${folder}`);
  process.exit(1);
}

try {
  for (const [index, name] of files.entries()) {
    const filePath = join(folder, name);
    const mimeType = MIME_BY_EXT[extname(name).toLowerCase()];
    const buffer = readFileSync(filePath);
    await pool.query(
      'INSERT INTO project_images (project_id, image, mime_type, display_order) VALUES ($1, $2, $3, $4)',
      [projectId, buffer, mimeType, index]
    );
    console.log(`Uploaded ${name} -> project ${projectId} (order ${index}, ${buffer.length} bytes)`);
  }
  console.log(`Done. ${files.length} image(s) uploaded for project ${projectId}.`);
} finally {
  await pool.end();
}
