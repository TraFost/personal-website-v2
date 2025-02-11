<script lang="ts">
import {
    type Snippet
} from "svelte";
import {
    cn
} from "$lib/utils";

type ButtonProps = {
    children: Snippet
    onClick: VoidFunction
    disabled?: boolean
    className?: string
};

let {children, onClick, disabled, className}: ButtonProps = $props();
</script>

<button
    disabled={disabled}
onclick={onClick}
    class={cn("p-2 bg-white/10 hover:bg-white/20 duration-150 rounded-lg mt-1 cursor-pointer", {
        "opacity-50 cursor-not-allowed": disabled
    }, className)}
    >
    {@render children()}
</button>
