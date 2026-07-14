import { readEnv, readIntEnv } from '@personel/config';

export const datasourceConfig = {
  host: readEnv('DB_HOST', 'localhost'),
  port: readIntEnv('DB_PORT', 5432),
  user: readEnv('DB_USER', 'personel'),
  password: readEnv('DB_PASSWORD', 'personel'),
  database: readEnv('DB_NAME', 'personel_website'),
};
