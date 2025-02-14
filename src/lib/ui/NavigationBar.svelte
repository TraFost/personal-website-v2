<script lang="ts">
    import { Motion } from "svelte-motion";
    import { onMount, onDestroy } from "svelte";
  
    let left = 0;
    let width = 0;
    let opacity = 0;
  
    let navs = [
      { name: "About", link: "hero" },
      { name: "Technologies", link: "technologies" },
      { name: "Projects", link: "projects" },
      { name: "Experiences", link: "experiences" },
      { name: "Educations", link: "educations" }
    ];
  
    let navTranslate = -200;
    let idleTimeout: number;
  
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        navTranslate = -100;
        clearTimeout(idleTimeout);
        idleTimeout = window.setTimeout(() => {
          navTranslate = 0;
        }, 1000);
      }
    };
  
    onMount(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll);
        setTimeout(() => {
          navTranslate = 0;
        }, 500);
      }
    });
  
    onDestroy(() => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(idleTimeout);
      }
    });
  
    let positionMotion = (node: HTMLElement) => {
      let refNode = () => {
        let rect = node.getBoundingClientRect();
        left = node.offsetLeft;
        width = rect.width;
        opacity = 1;
      };
      node.addEventListener("mouseenter", refNode);
      return {
        destroy() {
          node.removeEventListener("mouseenter", refNode);
        }
      };
    };
  
    function scrollToSection(sectionId: string) {
      if (typeof document !== "undefined" && typeof window !== "undefined") {
        const offset = 80;
        const element = document.getElementById(sectionId);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }
  
    function onNavClick(e: MouseEvent, sectionId: string) {
      e.preventDefault();
      scrollToSection(sectionId);
      if (typeof history !== "undefined") {
        history.pushState(null, "", `#${sectionId}`);
      }
    }
  </script>
  
  <Motion
    animate={{ transform: `translateY(${navTranslate}px)` }}
    transition={{ type: "spring", stiffness: 400, damping: 30 }}
    let:motion
  >
    <div use:motion class="fixed top-0 left-0 right-0 z-50 pt-6 w-full">
      <ul
        on:mouseleave={() => {
          opacity = 0;
        }}
        class="relative mx-auto flex w-fit rounded-lg border-2 bg-black p-1"
      >
        {#each navs as item}
          <li
            use:positionMotion
            class="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
          >
            <a
              href={`#${item.link}`}
              on:click={(e) => onNavClick(e, item.link)}
            >
              {item.name}
            </a>
          </li>
        {/each}
        <Motion
          animate={{ left: left, width: width, opacity: opacity }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          let:motion
        >
          <li use:motion class="absolute z-0 h-7 rounded-lg bg-white md:h-12"></li>
        </Motion>
      </ul>
    </div>
  </Motion>
  