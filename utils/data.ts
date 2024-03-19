export const blogs: Blog[] = [
  {
    id: 1,
    title: 'How To Properly Fetch Nuxt Content Data and Render It in Nuxt Pages',
    description: 'Here we will learn How To Properly Fetch Nuxt Content Data and Render It in Nuxt Pages',
    date_published: '2022-01-01',
    image: 'https://picsum.photos/200',
    slug_url: 'how-to-properly-fetch-nuxt-content-data-and-render-it-in-nuxt-pages',
    tags: [
      { name: 'test' }
    ],
    isPublished: true
  },
  {
    id: 2,
    title: 'Optimizing Your Website for Speed: Top Strategies to Boost Performance',
    description: 'Discover effective strategies to optimize your website for speed and enhance user experience. From image optimization to code minification, learn how to achieve lightning-fast loading times.',
    date_published: '2022-01-02',
    image: 'https://picsum.photos/200',
    slug_url: 'optimizing-your-website-for-speed',
    tags: [
      { name: 'web development' },
      { name: 'performance' }
    ],
    isPublished: true
  },
  {
    id: 3,
    title: 'Mastering Responsive Design: Essential Tips and Best Practices',
    description: 'Learn the key principles and best practices for creating responsive web designs that adapt seamlessly to various devices and screen sizes. Enhance user experience with these expert tips.',
    date_published: '2022-01-03',
    image: 'https://picsum.photos/200',
    slug_url: 'mastering-responsive-design',
    tags: [
      { name: 'web design' },
      { name: 'responsive' }
    ],
    isPublished: true
  },
  {
    id: 4,
    title: 'The Power of CSS Grid: Revolutionizing Web Layouts',
    description: 'Unlock the full potential of CSS Grid and revolutionize your web layouts. Explore advanced techniques and practical examples to create complex yet flexible designs with ease.',
    date_published: '2022-01-04',
    image: 'https://picsum.photos/200',
    slug_url: 'the-power-of-css-grid',
    tags: [
      { name: 'web design' },
      { name: 'css' },
      { name: 'layout' }
    ],
    isPublished: true
  },
  {
    id: 5,
    title: 'Building Scalable APIs with Node.js and Express: Best Practices',
    description: 'Learn how to build scalable and robust APIs using Node.js and Express. From middleware usage to error handling, discover best practices to ensure your APIs are efficient and reliable.',
    date_published: '2022-01-05',
    image: 'https://picsum.photos/200',
    slug_url: 'building-scalable-apis-with-nodejs-and-express',
    tags: [
      { name: 'node.js' },
      { name: 'express' },
      { name: 'api' }
    ],
    isPublished: true
  },
  {
    id: 6,
    title: 'Effective UX Design: Improving User Engagement and Satisfaction',
    description: 'Explore effective UX design strategies to enhance user engagement and satisfaction. From usability testing to user-centered design principles, optimize your digital products for success.',
    date_published: '2022-01-06',
    image: 'https://picsum.photos/200',
    slug_url: 'effective-ux-design',
    tags: [
      { name: 'ux design' },
      { name: 'user experience' }
    ],
    isPublished: true
  },
  {
    id: 7,
    title: 'Creating Stunning Visual Effects with CSS Animations: Tips and Tricks',
    description: 'Master the art of CSS animations to create stunning visual effects on your website. Learn advanced techniques, keyframe animation, and CSS animation libraries to make your designs stand out.',
    date_published: '2022-01-07',
    image: 'https://picsum.photos/200',
    slug_url: 'creating-stunning-visual-effects-with-css-animations',
    tags: [
      { name: 'web design' },
      { name: 'css' },
      { name: 'animations' }
    ],
    isPublished: true
  },
  {
    id: 8,
    title: 'Introduction to Progressive Web Apps: Building Offline-First Web Experiences',
    description: 'Discover the fundamentals of Progressive Web Apps (PWAs) and learn how to build web applications that offer native-like experiences. From service workers to app manifest, dive into PWA development.',
    date_published: '2022-01-08',
    image: 'https://picsum.photos/200',
    slug_url: 'introduction-to-progressive-web-apps',
    tags: [
      { name: 'web development' },
      { name: 'progressive web apps' },
      { name: 'pwa' }
    ],
    isPublished: true
  },
  {
    id: 9,
    title: 'Data Visualization Techniques: Presenting Complex Data Simply',
    description: 'Learn effective data visualization techniques to present complex data in a simple and understandable manner. From charts and graphs to interactive dashboards, unlock the power of visual storytelling.',
    date_published: '2022-01-09',
    image: 'https://picsum.photos/200',
    slug_url: 'data-visualization-techniques',
    tags: [
      { name: 'data visualization' },
      { name: 'visualization' },
      { name: 'charts' }
    ],
    isPublished: true
  },
  {
    id: 10,
    title: 'Securing Your Web Applications: Best Practices for Web Security',
    description: 'Discover essential best practices for securing your web applications against common security threats. From HTTPS implementation to input validation, ensure your applications are protected.',
    date_published: '2022-01-10',
    image: 'https://picsum.photos/200',
    slug_url: 'securing-your-web-applications',
    tags: [
      { name: 'web development' },
      { name: 'security' }
    ],
    isPublished: true
  },
];


export const pages: Page[] = [
  {
    name: 'Blog',
    path: '/blog'
  },
  {
    name: 'FAQs',
    path: '/faqs'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  },
]

export const themes: ThemeSetting[] = [
  {
    name: 'Light',
    value: 'light',
    isActive: false,
    path_1: 'M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z'
  },
  {
    name: 'Dark',
    value: 'dark',
    isActive: false,
    path_1: 'M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z',
    path_2: 'M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z'
  },
  {
    name: 'Auto',
    value: 'auto ',
    isActive: true,
    path_1: 'M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z'
  }
]