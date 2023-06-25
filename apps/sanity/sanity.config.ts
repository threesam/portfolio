import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { iconPicker } from 'sanity-plugin-icon-picker'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './schemas'
import { visionTool } from '@sanity/vision'

export default defineConfig({
	name: 'default',
	title: 'threesam',

	projectId: 'qcht0vh1',
	dataset: 'production',

	plugins: [deskTool(), iconPicker(), media(), visionTool()],

	schema: {
		types: schemaTypes
	}
})
