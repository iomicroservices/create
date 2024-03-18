export { Blog, Tag };

declare global {
  interface Blog {
    id: number
    title: string
    description: string
    date_published: string
    image: string
    slug_url: string
    tags: Tag[]
    isPublished: boolean
  }

  interface Tag {
    name: string
  }

  interface Page {
    name: string
    path: string
  }
}