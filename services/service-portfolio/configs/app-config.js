import { readEnv, readIntEnv } from '@personel/config';

export const appConfig = {
  port: readIntEnv('PORT', 4000),
  corsOrigin: readEnv('CORS_ORIGIN', 'http://localhost:5173'),
};
