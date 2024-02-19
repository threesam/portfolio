import { getProject } from '$lib/utils/sanity'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	console.log('params: ', params)
	const project = await getProject({ handle: params.handle })
	console.log('project: ', project)

	if (project) {
		return {
			body: {
				project
			}
		}
	}

	throw error(404)
}
