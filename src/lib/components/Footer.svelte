<script lang="ts">
  import config from "$lib/config";

  const socials = [
    {
      name: "GitHub",
      href: `https://github.com/${config.social.github}`,
    },
    {
      name: "Discord",
      href: `https://discord.com/users/${config.social.discord}`,
    },
    {
      name: "Gmail",
      href: `mailto:${config.contactEmail}`,
    },
    {
      name: "Instagram",
      href: `https://instagram.com/${config.social.instagram}`,
    },
  ];
</script>

<footer class="mx-auto w-full max-w-[76rem] px-5 sm:px-6 lg:px-10 xl:px-0 pb-12 pt-16">
  <div class="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
    <div class="space-y-2">
      <p class="text-sm text-white/60">
        Open for new opportunities & collaborations.
      </p>
      <a
        href={`mailto:${config.contactEmail}`}
        class="inline-flex items-center gap-2 text-sm text-white hover:text-white/80"
      >
        {config.contactEmail}
      </a>
    </div>
    <nav aria-label="Social links" class="flex items-center gap-3">
      {#each socials as social}
        <a
          href={social.href}
          target="_blank"
          rel="noreferrer noopener"
          class="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/10"
        >
          <span class="sr-only">{social.name}</span>
          <img
            src={`https://cdn.simpleicons.org/${social.name.toLowerCase()}/FFFFFF`}
            alt=""
            class="size-5"
            loading="lazy"
          >
        </a>
      {/each}
    </nav>
  </div>
</footer>
