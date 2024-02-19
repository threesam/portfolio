import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { env } from '$env/dynamic/public'

const client = sanityClient({
	projectId: env.PUBLIC_SANITY_PROJECT_ID,
	dataset: env.PUBLIC_SANITY_DATASET,
	apiVersion: '2021-10-21',
	useCdn: false
})

const builder = imageUrlBuilder(client)

export function urlFor(source: string) {
	return builder.image(source)
}

export async function getCatalog({ handle }: { handle: string }) {
	return await client.fetch(
		`*[_type == "catalog" && handle.current == $handle][0]{
    ...,
    title,
    description,
    handle,
    images[]{
      asset->    
    }
  }`,
		{ handle }
	)
}

export async function getAllCatalogs() {
	return await client.fetch(`*[_type == "catalog"]{
    ...,
    title,
    description,
    handle,
    images[]{
      asset->    
    },
  }`)
}

export async function getProject({ handle }: { handle: string }) {
	return await client.fetch(
		`*[_type == "project" && handle.current == $handle][0]{
      ...,
      image{
        asset->
      }
    }`,
		{
			handle
		}
	)
}

export async function getAllProjects() {
	return await client.fetch(`*[_type == "project"]{
    ...,
    title,
    description,
    slug,
    image{
      asset->    
    },
    mainImage{
      asset->,
      alt,
      caption,
    },
  }`)
}

export async function getSettings() {
	return await client.fetch(`*[_type == "siteSettings"][0]`)
}

export async function getSongs() {
	return await client.fetch(`*[_type == "song"]`)
}
