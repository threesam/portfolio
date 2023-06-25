import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './schemas'
import { visionTool } from '@sanity/vision'

export default defineConfig({
	name: 'default',
	title: 'threesam',

	projectId: 'qcht0vh1',
	dataset: 'production',

	plugins: [deskTool(), media(), visionTool()],

	schema: {
		types: schemaTypes
	}
})
