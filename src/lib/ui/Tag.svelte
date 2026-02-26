<script lang="ts">
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";

  type TagProps = {
    children: Snippet;
    className?: string;
    selected?: boolean;
  };

  let { children, className, selected = false }: TagProps = $props();
</script>

<span
  class={cn(
    "inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 transition",
    selected && "border-white/25 bg-white/10 text-white",
    className
  )}
>
  {@render children()}
</span>
