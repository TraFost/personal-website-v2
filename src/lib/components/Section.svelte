<script lang="ts">
  import type { Snippet } from "svelte";

  type SectionProps = {
    id: string;
    title: string;
    children: Snippet;
  };

  let { id, title, children }: SectionProps = $props();
</script>

<section {id} class="scroll-mt-24">
  <header class="mb-8 space-y-3">
    <h2 class="section-heading">
      {title}
    </h2>
  </header>
  {@render children()}
</section>