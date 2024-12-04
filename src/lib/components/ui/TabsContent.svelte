<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils';
  import { fade } from 'svelte/transition';

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<TabsPrimitive.Content
  class={cn(
    'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    className
  )}
  {...$$restProps}
  transition={fade}
>
  <slot />
</TabsPrimitive.Content>
