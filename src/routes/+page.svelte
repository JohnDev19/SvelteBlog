<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>SvelteBlog - Modern Blogging Platform</title>
	<meta name="description" content="SvelteBlog is a modern, user-friendly blogging platform built with Svelte and SvelteKit." />
</svelte:head>

<section class="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center space-y-4 text-center">
			<div class="space-y-2">
				<h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
					Welcome to SvelteBlog
				</h1>
				<p class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
					Empower your voice with our modern blogging platform. Create, share, and engage with ease.
				</p>
			</div>
			<div class="space-x-4">
				<Button href="/register">
					Get Started
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
				<Button variant="outline" href="/blog">
					Explore Blogs
				</Button>
			</div>
		</div>
	</div>
</section>

<section class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
	<div class="container px-4 md:px-6">
		<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
			Featured Posts
		</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
				<img
					alt="Post thumbnail"
					class="aspect-video object-cover w-full"
					src="/images/blog1.jpeg"
					width="400"
					height="200"
				/>
				<div class="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-800">
					<div class="flex-1">
						<a href="/blog/1" class="block mt-2">
							<p class="text-xl font-semibold text-gray-900 dark:text-white">
								Mastering SvelteKit: A Beginner’s Guide
							</p>
							<p class="mt-3 text-base text-gray-500 dark:text-gray-400">
								Learn the basics of SvelteKit and start building fast, modern web apps with ease.
							</p>
						</a>
					</div>
					<div class="mt-6 flex items-center">
						<div class="flex-shrink-0">
							<img
								class="h-10 w-10 rounded-full"
								src="/images/author1.jpg"
								alt="Author"
							/>
						</div>
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								JohnDev19
							</p>
							<div class="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
								<time datetime="2024-07-15">October 15, 2024</time>
								<span aria-hidden="true">&middot;</span>
								<span>8 min read</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
				<img
					alt="Post thumbnail"
					class="aspect-video object-cover w-full"
					src="/images/blog2.jpeg"
					width="400"
					height="200"
				/>
				<div class="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-800">
					<div class="flex-1">
						<a href="/blog/2" class="block mt-2">
							<p class="text-xl font-semibold text-gray-900 dark:text-white">
								Why Svelte Is the Framework of the Future
							</p>
							<p class="mt-3 text-base text-gray-500 dark:text-gray-400">
								Dive into why developers are flocking to Svelte for modern, reactive web development.
							</p>
						</a>
					</div>
					<div class="mt-6 flex items-center">
						<div class="flex-shrink-0">
							<img
								class="h-10 w-10 rounded-full"
								src="/images/author2.jpeg"
								alt="Author"
							/>
						</div>
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								LazyDev
							</p>
							<div class="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
								<time datetime="2024-06-30">November 23, 2024</time>
								<span aria-hidden="true">&middot;</span>
								<span>6 min read</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
				<img
					alt="Post thumbnail"
					class="aspect-video object-cover w-full"
					src="/images/blog3.jpeg"
					width="400"
					height="200"
				/>
				<div class="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-800">
					<div class="flex-1">
						<a href="/blog/3" class="block mt-2">
							<p class="text-xl font-semibold text-gray-900 dark:text-white">
								Tips for Writing Cleaner JavaScript
							</p>
							<p class="mt-3 text-base text-gray-500 dark:text-gray-400">
								Refactor your JavaScript code and write cleaner, more maintainable scripts.
							</p>
						</a>
					</div>
					<div class="mt-6 flex items-center">
						<div class="flex-shrink-0">
							<img
								class="h-10 w-10 rounded-full"
								src="/images/author3.jpeg"
								alt="Author"
							/>
						</div>
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								CodewithEmely
							</p>
							<div class="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
								<time datetime="2024-08-01">Aug 1, 2024</time>
								<span aria-hidden="true">&middot;</span>
								<span>7 min read</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
				<img
					alt="Python Basics"
					class="aspect-video object-cover w-full"
					src="/images/blog4.jpeg"
					width="400"
					height="200"
				/>
				<div class="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-800">
					<div class="flex-1">
						<a href="/blog/python-basics" class="block mt-2">
							<p class="text-xl font-semibold text-gray-900 dark:text-white">
								Python for Beginners: Getting Started
							</p>
							<p class="mt-3 text-base text-gray-500 dark:text-gray-400">
								Explore the basics of Python, including how to set up your environment and write your first program. A must-read for new coders!
							</p>
						</a>
					</div>
					<div class="mt-6 flex items-center">
						<div class="flex-shrink-0">
							<img
								class="h-10 w-10 rounded-full"
								src="/images/author4.jpeg"
								alt="Author Avatar"
							/>
						</div>
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								Zach Graves
							</p>
							<div class="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
								<time datetime="2024-12-01">November 26, 2024</time>
								<span aria-hidden="true">&middot;</span>
								<span>7 min read</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
