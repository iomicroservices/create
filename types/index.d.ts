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
  }

  interface Tag {
    name: string
  }
}