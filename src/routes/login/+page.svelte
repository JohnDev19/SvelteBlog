<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';

  let email = '';
  let password = '';

  function handleSubmit() {
    console.log('Login submitted', { email, password });
  }
</script>

<svelte:head>
  <title>Login - SvelteBlog</title>
  <meta name="description" content="Log in to your SvelteBlog account" />
</svelte:head>

<div class="container max-w-md py-12">
  <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Login</h1>
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <div class="space-y-2">
      <Label for="email">Email</Label>
      <Input id="email" type="email" bind:value={email} required />
    </div>
    <div class="space-y-2">
      <Label for="password">Password</Label>
      <Input id="password" type="password" bind:value={password} required />
    </div>
    <Button type="submit" class="w-full">Log In</Button>
  </form>
  <p class="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
    Don't have an account? <a href="/register" class="text-primary hover:underline">Register here</a>
  </p>
</div>

