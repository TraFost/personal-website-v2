<script lang="ts">
import {
    type Snippet
} from "svelte";
import {
    cn
} from "$lib/utils";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = {
    children: Snippet;
    onClick?: VoidFunction;
    disabled?: boolean;
    className?: string;
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
    href?: string;
    external?: boolean;
    ariaLabel?: string;
};

let {
    children,
    onClick,
    disabled = false,
    className,
    type = "button",
    variant = "primary",
    href,
    external = false,
    ariaLabel
}: ButtonProps = $props();

const getClasses = () =>
    cn(
        "btn-base",
        variant === "primary" ? "btn-primary" : "btn-ghost",
        disabled && "opacity-50 cursor-not-allowed",
        className
    );
</script>

{#if href}
    <a
        href={disabled ? undefined : href}
        rel={external ? "noreferrer noopener" : undefined}
        target={external ? "_blank" : undefined}
        class={getClasses()}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        data-variant={variant}
    >
        {@render children()}
    </a>
{:else}
    <button
        disabled={disabled}
        type={type}
        onclick={onClick}
        data-variant={variant}
        class={getClasses()}
        aria-label={ariaLabel}
    >
        {@render children()}
    </button>
{/if}
