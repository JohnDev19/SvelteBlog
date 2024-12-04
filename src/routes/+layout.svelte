<script lang="ts">
 import '../app.css';
 import { page } from '$app/stores';
 import { Button } from '$lib/components/ui/button';
 import { Moon, Sun, Menu, X } from 'lucide-svelte';
 import { onMount } from 'svelte';
 import { browser } from '$app/environment';

 let isDarkMode = false;
 let isMenuOpen = false;

 function toggleDarkMode() {
   isDarkMode = !isDarkMode;
   if (browser) {
     localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
     document.documentElement.classList.toggle('dark', isDarkMode);
   }
 }

 function toggleMenu() {
   isMenuOpen = !isMenuOpen;
 }

 onMount(() => {
   if (browser) {
     const savedDarkMode = localStorage.getItem('darkMode');
     isDarkMode = savedDarkMode ? savedDarkMode === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
     document.documentElement.classList.toggle('dark', isDarkMode);
   }
 });
</script>

<div class="min-h-screen bg-background text-foreground flex flex-col">
 <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
   <div class="container flex h-16 items-center justify-between">
     <a href="/" class="flex items-center space-x-2">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
         <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
         <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
         <path d="M2 2l7.586 7.586"></path>
         <circle cx="11" cy="11" r="2"></circle>
       </svg>
       <span class="font-bold">SvelteBlog</span>
     </a>
     <nav class="hidden md:flex items-center space-x-4">
       <a href="/" class="text-sm font-medium transition-colors hover:text-primary">Home</a>
       <a href="/blog" class="text-sm font-medium transition-colors hover:text-primary">Blog</a>
       <a href="/explore" class="text-sm font-medium transition-colors hover:text-primary">Explore</a>
       {#if $page.data.user}
         <a href="/admin" class="text-sm font-medium transition-colors hover:text-primary">Admin</a>
         <form action="/logout" method="POST">
           <Button type="submit" variant="ghost" class="text-sm font-medium transition-colors hover:text-primary">Logout</Button>
         </form>
       {:else}
         <a href="/login" class="text-sm font-medium transition-colors hover:text-primary">Login</a>
         <a href="/register" class="text-sm font-medium transition-colors hover:text-primary">Register</a>
       {/if}
     </nav>
     <div class="flex items-center space-x-4">
       <Button variant="ghost" size="icon" on:click={toggleDarkMode}>
         {#if isDarkMode}
           <Sun class="h-5 w-5" />
         {:else}
           <Moon class="h-5 w-5" />
         {/if}
       </Button>
       <Button variant="ghost" size="icon" class="md:hidden" on:click={toggleMenu}>
         {#if isMenuOpen}
           <X class="h-5 w-5" />
         {:else}
           <Menu class="h-5 w-5" />
         {/if}
       </Button>
     </div>
   </div>
   {#if isMenuOpen}
     <nav class="md:hidden">
       <div class="space-y-2 p-4">
         <a href="/" class="block text-sm font-medium transition-colors hover:text-primary">Home</a>
         <a href="/blog" class="block text-sm font-medium transition-colors hover:text-primary">Blog</a>
         <a href="/explore" class="block text-sm font-medium transition-colors hover:text-primary">Explore</a>
         {#if $page.data.user}
           <a href="/admin" class="block text-sm font-medium transition-colors hover:text-primary">Admin</a>
           <form action="/logout" method="POST">
             <Button type="submit" variant="ghost" class="w-full text-left text-sm font-medium transition-colors hover:text-primary">Logout</Button>
           </form>
         {:else}
           <a href="/login" class="block text-sm font-medium transition-colors hover:text-primary">Login</a>
           <a href="/register" class="block text-sm font-medium transition-colors hover:text-primary">Register</a>
         {/if}
       </div>
     </nav>
   {/if}
 </header>

 <main class="flex-1">
   <slot />
 </main>

 <footer class="border-t">
   <div class="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
     <div class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
       <p class="text-center text-sm leading-loose md:text-left">
         Developed by the JohnDev19.
       </p>
     </div>
   </div>
 </footer>
</div>

