<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils';

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<TabsPrimitive.Root
  class={cn('data-[orientation=vertical]:flex-col', className)}
  {...$$restProps}
>
  <slot />
</TabsPrimitive.Root>
