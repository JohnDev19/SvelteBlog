<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
  import { Edit, Plus, Trash } from 'lucide-svelte';

  // For demonstration
  const posts = [
    { id: 1, title: 'First Blog Post', status: 'Published', date: '2024-01-01' },
    { id: 2, title: 'Second Blog Post', status: 'Draft', date: '2024-01-02' },
    { id: 3, title: 'Third Blog Post', status: 'Published', date: '2024-01-03' },
  ];

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Author' },
  ];
</script>

<svelte:head>
  <title>Admin Dashboard - SvelteBlog</title>
  <meta name="description" content="Manage your SvelteBlog content and users" />
</svelte:head>

<div class="container py-12">
  <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Admin Dashboard</h1>

  <Tabs defaultValue="posts" class="w-full">
    <TabsList>
      <TabsTrigger value="posts">Posts</TabsTrigger>
      <TabsTrigger value="users">Users</TabsTrigger>
    </TabsList>
    <TabsContent value="posts">
      <Card>
        <CardHeader>
          <CardTitle>Blog Posts</CardTitle>
          <CardDescription>Manage your blog posts here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="mb-4">
            <Button>
              <Plus class="mr-2 h-4 w-4" /> New Post
            </Button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b">
                  <th class="text-left p-2">Title</th>
                  <th class="text-left p-2">Status</th>
                  <th class="text-left p-2">Date</th>
                  <th class="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {#each posts as post}
                  <tr class="border-b">
                    <td class="p-2">{post.title}</td>
                    <td class="p-2">{post.status}</td>
                    <td class="p-2">{post.date}</td>
                    <td class="p-2">
                      <Button variant="ghost" size="sm">
                        <Edit class="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash class="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="users">
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>Manage your users here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="mb-4">
            <Button>
              <Plus class="mr-2 h-4 w-4" /> New User
            </Button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b">
                  <th class="text-left p-2">Name</th>
                  <th class="text-left p-2">Email</th>
                  <th class="text-left p-2">Role</th>
                  <th class="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {#each users as user}
                  <tr class="border-b">
                    <td class="p-2">{user.name}</td>
                    <td class="p-2">{user.email}</td>
                    <td class="p-2">{user.role}</td>
                    <td class="p-2">
                      <Button variant="ghost" size="sm">
                        <Edit class="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash class="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
</div>

