<script lang="ts">
 import { Button } from '$lib/components/ui/button';
 import { Input } from '$lib/components/ui/input';
 import { Label } from '$lib/components/ui/label';

 let username = '';
 let email = '';
 let password = '';

 function handleSubmit() {
   // registration logic for future implementation
   console.log('Registration submitted', { username, email, password });
 }
</script>

<svelte:head>
 <title>Register - SvelteBlog</title>
 <meta name="description" content="Create your SvelteBlog account" />
</svelte:head>

<div class="container max-w-md py-12">
 <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Register</h1>
 <form on:submit|preventDefault={handleSubmit} class="space-y-4">
   <div class="space-y-2">
     <Label for="username">Username</Label>
     <Input id="username" type="text" bind:value={username} required />
   </div>
   <div class="space-y-2">
     <Label for="email">Email</Label>
     <Input id="email" type="email" bind:value={email} required />
   </div>
   <div class="space-y-2">
     <Label for="password">Password</Label>
     <Input id="password" type="password" bind:value={password} required />
   </div>
   <Button type="submit" class="w-full">Register</Button>
 </form>
 <p class="mt-4 text-center text-sm text-muted-foreground">
   Already have an account? <a href="/login" class="text-primary hover:underline">Login here</a>
 </p>
</div>

