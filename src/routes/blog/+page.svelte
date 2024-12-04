<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Search } from 'lucide-svelte';

  const posts = [
    { id: 1, title: 'Getting Started with SvelteKit', excerpt: 'Learn how to build modern web applications with SvelteKit...', author: 'JohnDev19', date: '2023-07-01', readTime: '5 min read', thumbnail: '/images/blog1.jpeg', authorImage: '/images/author1.jpg' },
    { id: 2, title: 'Mastering Tailwind CSS', excerpt: 'Dive deep into Tailwind CSS and learn how to create beautiful, responsive designs...', author: 'LazyDev', date: '2023-07-05', readTime: '8 min read', thumbnail: '/images/blog2.jpeg', authorImage: '/images/author2.jpeg' },
    { id: 3, title: 'The Power of Server-Side Rendering', excerpt: 'Explore the benefits of server-side rendering and how it can improve your web app...', author: 'CodewithEmely', date: '2023-07-10', readTime: '6 min read', thumbnail: '/images/blog3.jpeg', authorImage: '/images/author3.jpeg' },
    { id: 4, title: 'Building Scalable Applications with Svelte', excerpt: 'Learn best practices for building scalable applications using Svelte...', author: 'Zach Graves', date: '2023-07-15', readTime: '7 min read', thumbnail: '/images/blog4.jpeg', authorImage: '/images/author4.jpeg' },
  ];
</script>

<svelte:head>
  <title>Blog - SvelteBlog</title>
  <meta name="description" content="Explore the latest articles on web development, design, and technology." />
</svelte:head>

<section class="container py-8 md:py-12 lg:py-16">
  <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Blog</h1>

  <div class="flex items-center mb-8">
    <Input type="search" placeholder="Search articles..." class="mr-2" />
    <Button variant="outline" size="icon">
      <Search class="h-4 w-4" />
    </Button>
  </div>

  <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {#each posts as post}
      <article class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <img
          alt="{post.title} thumbnail"
          class="aspect-video object-cover w-full"
          height="200"
          src="{post.thumbnail}"
          width="400"
        />
        <div class="flex flex-col justify-between flex-1 p-6 bg-card">
          <div class="flex-1">
            <a href="/blog/{post.id}" class="block mt-2">
              <p class="text-xl font-semibold text-foreground">
                {post.title}
              </p>
              <p class="mt-3 text-muted-foreground">
                {post.excerpt}
              </p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <span class="sr-only">Author</span>
              <img
                class="h-10 w-10 rounded-full"
                src="{post.authorImage}"
                alt="{post.author} avatar"
              />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-foreground">
                {post.author}
              </p>
              <div class="flex space-x-1 text-sm text-muted-foreground">
                <time datetime={post.date}>{post.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    {/each}
  </div>
</section>
