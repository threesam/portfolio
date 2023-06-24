import { getSongs } from '$lib/utils/sanity'
import { error } from '@sveltejs/kit'

export async function load() {
	const settings = await getSongs()

	if (settings) {
		return {
			body: {
				settings
			}
		}
	}

	throw error(404)
}
