<script lang="ts">
  import { onMount } from 'svelte';
  import Quill from 'quill';
  import 'quill/dist/quill.snow.css';

  export let value = '';

  let quill: Quill;
  let element: HTMLElement;

  onMount(() => {
    quill = new Quill(element, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          ['clean']
        ]
      }
    });

    quill.on('text-change', () => {
      value = quill.root.innerHTML;
    });

    if (value) {
      quill.root.innerHTML = value;
    }
  });
</script>

<div bind:this={element} />

<style>
  :global(.ql-editor) {
    min-height: 200px;
  }
</style>

