import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN ?? 'UNDEFINED_DOMAIN',
  apiKey: process.env.API_KEY ?? 'UNDEFINED_API_KEY',
})
