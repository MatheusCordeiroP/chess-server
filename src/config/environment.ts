import { config } from 'dotenv-safe';

export default async function initEnvironment() {
  config({
    allowEmptyValues: true,
  });
}
