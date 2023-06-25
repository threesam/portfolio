export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string'
		},
		{
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			}
		},
		{
			name: 'description',
			type: 'text'
		},
		{
			name: 'image',
			type: 'image'
		},
		{
			name: 'links',
			type: 'array',
			of: [{ type: 'link' }]
		},
		{
			name: 'order',
			title: 'Order',
			type: 'number',
			hidden: true
		},
		{
			name: 'caseStudy',
			title: 'Case Study',
			type: 'blockContent'
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'string' }]
		}
	]
}
