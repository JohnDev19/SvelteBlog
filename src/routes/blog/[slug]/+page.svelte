<script lang="ts">
  import { page } from '$app/stores';
  import { Button } from '$lib/components/ui/button';
  import { Heart, MessageCircle, Share2 } from 'lucide-svelte';

  const post = {
    title: 'Sample Blog Post',
    author: 'John Doe',
    date: 'January 27, 2024',
    content: 'This is the content of the blog post. It would typically be much longer and formatted with HTML.',
    likes: 42,
    comments: 10,
  };
</script>

<svelte:head>
  <title>{post.title} - SvelteBlog</title>
  <meta name="description" content={post.content.slice(0, 160)} />
</svelte:head>

<article class="container max-w-3xl py-12">
  <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">{post.title}</h1>
  <div class="mt-4 flex items-center space-x-2 text-gray-500 dark:text-gray-400">
    <img
      alt={post.author}
      class="rounded-full"
      height="40"
      src="/images/author3.jpeg"
      style="aspect-ratio: 40/40; object-fit: cover;"
      width="40"
    />
    <div>
      <div class="font-semibold">{post.author}</div>
      <div class="text-sm">{post.date}</div>
    </div>
  </div>
  <div class="mt-8 prose dark:prose-invert max-w-none">
    {@html post.content}
  </div>
  <div class="mt-8 flex items-center space-x-4">
    <Button variant="outline" size="sm">
      <Heart class="mr-2 h-4 w-4" />
      {post.likes} Likes
    </Button>
    <Button variant="outline" size="sm">
      <MessageCircle class="mr-2 h-4 w-4" />
      {post.comments} Comments
    </Button>
    <Button variant="outline" size="sm">
      <Share2 class="mr-2 h-4 w-4" />
      Share
    </Button>
  </div>
</article>

