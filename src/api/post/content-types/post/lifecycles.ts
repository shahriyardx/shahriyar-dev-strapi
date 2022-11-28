import fetch from "node-fetch"

export const revalidateSlug = (...slugs: string[]) => {
  console.log(slugs)

  for (let slug of slugs) {
    fetch(`${process.env.API_BASE}/revalidate?path=/blog/${slug}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
}

export const revalidateAll = () => {
  fetch(`${process.env.API_BASE}/revalidate?path=/blog`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}


export default {
  afterCreate(event: any) { 
    const slug = event.params.data.slug
    revalidateSlug(slug)
    revalidateAll()
  },
  afterUpdate(event: any) {
    const slug = event.params.data.slug

    if (slug) {
      revalidateSlug(slug)
    }
    revalidateAll()
  },
  afterDelete: (event: any) => {
    revalidateAll()
  }
};
