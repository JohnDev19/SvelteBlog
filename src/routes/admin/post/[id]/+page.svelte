<script lang="ts">
  import { page } from '$app/stores';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import RichTextEditor from '$lib/components/RichTextEditor.svelte';

  const isNewPost = $page.params.id === 'new';
  let title = '';
  let content = '';

  function handleSubmit() {
    console.log('Post submitted', { title, content });
  }
</script>

<svelte:head>
  <title>{isNewPost ? 'Create' : 'Edit'} Post - SvelteBlog</title>
  <meta name="description" content="{isNewPost ? 'Create a new' : 'Edit an existing'} blog post" />
</svelte:head>

<div class="container max-w-4xl py-12">
  <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
    {isNewPost ? 'Create New Post' : 'Edit Post'}
  </h1>
  <form on:submit|preventDefault={handleSubmit} class="space-y-8">
    <div class="space-y-2">
      <Label for="title">Title</Label>
      <Input id="title" bind:value={title} required />
    </div>
    <div class="space-y-2">
      <Label for="content">Content</Label>
      <RichTextEditor bind:value={content} />
    </div>
    <Button type="submit">{isNewPost ? 'Create' : 'Update'} Post</Button>
  </form>
</div>

