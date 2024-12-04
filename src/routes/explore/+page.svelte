<script lang="ts">
 import { Button } from '$lib/components/ui/button';
 import { Input } from '$lib/components/ui/input';
 import { Search } from 'lucide-svelte';

 const categories = ['Technology', 'Design', 'Programming', 'Web Development', 'AI', 'Data Science'];
 const popularTags = ['JavaScript', 'React', 'Svelte', 'CSS', 'Node.js', 'Python', 'Machine Learning'];

 const featuredBlogs = [
   { id: 1, title: 'The Future of Web Development', author: 'Alice Johnson', followers: 1200 },
   { id: 2, title: 'Mastering Responsive Design', author: 'Bob Smith', followers: 980 },
   { id: 3, title: 'AI in Everyday Life', author: 'Charlie Brown', followers: 1500 },
 ];
</script>

<svelte:head>
 <title>Explore Blogs - SvelteBlog</title>
 <meta name="description" content="Discover new blogs and authors on various topics." />
</svelte:head>

<section class="container py-8 md:py-12 lg:py-16">
 <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Explore Blogs</h1>

 <div class="flex items-center mb-8">
   <Input type="search" placeholder="Search blogs..." class="mr-2" />
   <Button variant="outline" size="icon">
     <Search class="h-4 w-4" />
   </Button>
 </div>

 <div class="grid gap-8 md:grid-cols-3">
   <div class="space-y-6">
     <div>
       <h2 class="text-xl font-semibold mb-4">Categories</h2>
       <div class="flex flex-wrap gap-2">
         {#each categories as category}
           <Button variant="outline" size="sm">{category}</Button>
         {/each}
       </div>
     </div>
     <div>
       <h2 class="text-xl font-semibold mb-4">Popular Tags</h2>
       <div class="flex flex-wrap gap-2">
         {#each popularTags as tag}
           <Button variant="secondary" size="sm">#{tag}</Button>
         {/each}
       </div>
     </div>
   </div>

   <div class="md:col-span-2">
     <h2 class="text-2xl font-semibold mb-6">Featured Blogs</h2>
     <div class="space-y-6">
       {#each featuredBlogs as blog}
         <div class="flex items-center justify-between p-4 bg-card rounded-lg shadow">
           <div>
             <h3 class="text-lg font-semibold">{blog.title}</h3>
             <p class="text-sm text-muted-foreground">by {blog.author}</p>
           </div>
           <div class="text-right">
             <p class="text-sm font-medium">{blog.followers} followers</p>
             <Button variant="outline" size="sm" class="mt-2">Follow</Button>
           </div>
         </div>
       {/each}
     </div>
   </div>
 </div>
</section>
