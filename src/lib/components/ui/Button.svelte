<script lang="ts">
  import { Button as ButtonPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils';
  import { buttonVariants, type ButtonProps } from './button';

  type $$Props = ButtonProps;

  let className: $$Props['class'] = undefined;
  export { className as class };
  export let variant: $$Props['variant'] = 'default';
  export let size: $$Props['size'] = 'default';
</script>

<ButtonPrimitive.Root
  class={cn(buttonVariants({ variant, size, className }))}
  {...$$restProps}
>
  <slot />
</ButtonPrimitive.Root>

