import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schema from './schema'
import {createClient, type ClientConfig} from '@sanity/client'

export default defineConfig({
  name: 'default',
  title: 'Migration Preview',

  projectId: 'opqdkc9i',
  dataset: 'production',

  unstable_clientFactory: (config: ClientConfig) => {
    return createClient({
      ...config,
      token: process.env.SANITY_STUDIO_READ_TOKEN
    })
  },

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema,
  },
})
