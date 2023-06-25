import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {tags} from 'tags'

export default defineConfig({
  name: 'default',
  title: 'threesam',

  projectId: 'qcht0vh1',
  dataset: 'production',

  plugins: [deskTool(), tags(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
