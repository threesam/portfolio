import { getProject } from '$lib/utils/sanity'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	const project = await getProject({ handle: params.handle })

	if (project) {
		return {
			body: {
				project
			}
		}
	}

	throw error(404)
}
