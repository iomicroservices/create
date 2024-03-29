export { Blog, Tag, ThemeSetting };

declare global {
  interface Blog {
    id: number
    title: string
    description: string
    date_published: string
    image: string
    slug: string
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

  interface ThemeSetting {
    name: string
    value: string
    isActive: boolean
    path_1: string
    path_2?: string
  }

  interface SocMedPlatform {
    name: string
    icon: string
  }
}