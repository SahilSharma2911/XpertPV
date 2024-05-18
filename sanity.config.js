/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/admin/[[...index]].jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schemaTypes} from './sanity/schemas/index'

export default defineConfig({
  name: 'default', 
  title:'XpertPV',
  basePath: '/admin',
  projectId,
  dataset,
  
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool(),
    
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
