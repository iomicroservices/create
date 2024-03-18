export { Blog };

declare global {
  interface Blog {
    title: string
    description: string
    date_published: string
    image: string
    slug_url: string
    }
}