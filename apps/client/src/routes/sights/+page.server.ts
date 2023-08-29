import { getAllCatalogs } from '$lib/utils/sanity'
import { error } from '@sveltejs/kit'

export async function load() {
	const catalogs = await getAllCatalogs()

	if (catalogs) {
		return {
			body: {
				catalogs
			}
		}
	}

	throw error(404)
}
