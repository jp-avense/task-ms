export function getConfigPath() {
  const environment = process.env.env?.trim() || 'development';
  const configs = [`.env.${environment}.local`, `.env.${environment}`];

  if (environment !== 'development') configs.shift();

  return configs;
}

export default () => ({
  databases: [
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      name: process.env.DB_NAME,
    },
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      name: 'something',
    },
  ],
});
