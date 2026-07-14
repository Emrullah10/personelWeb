export const readEnv = (key, fallback) => {
  const value = process.env[key];
  if (value === undefined || value === '') {
    if (fallback === undefined) {
      throw new Error(`Missing required env var: ${key}`);
    }
    return fallback;
  }
  return value;
};

export const readIntEnv = (key, fallback) => {
  const value = process.env[key];
  if (value === undefined || value === '') return fallback;
  return parseInt(value, 10);
};
