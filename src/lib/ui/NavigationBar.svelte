<script lang="ts">
  import config from "$lib/config";
  import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';

  const animBackdrop = 'transition transition-discrete opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100';
  const animModal =
    'transition transition-discrete opacity-0 translate-x-full starting:data-[state=open]:opacity-0 starting:data-[state=open]:translate-x-full data-[state=open]:opacity-100 data-[state=open]:translate-x-0';
</script>

<header class="w-full max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
    <a href="/" class="text-xl font-semibold tracking-tight text-surface-950 dark:text-surface-50 hover:opacity-70 transition-opacity">{config.name.split(' ')[0]}.</a>
    
    <Dialog>
        <Dialog.Trigger class="p-2 hover:bg-surface-200/50 dark:hover:bg-surface-700/50 rounded-md transition-colors cursor-pointer flex items-center justify-center text-surface-950 dark:text-surface-50" aria-label="Menu">
            <iconify-icon icon="solar:hamburger-menu-outline" width="24" height="24"></iconify-icon>
        </Dialog.Trigger>
        <Portal>
            <Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50 transition transition-discrete {animBackdrop}" />
            <Dialog.Positioner class="fixed inset-0 z-50 flex justify-end">
                <Dialog.Content class="h-screen card bg-surface-100-900 w-sm p-4 space-y-4 shadow-xl {animModal}">
                    <header class="flex justify-between items-center">
                        <Dialog.Title class="text-2xl font-bold">Menu</Dialog.Title>
                        <Dialog.CloseTrigger class="p-2 hover:bg-surface-200/50 dark:hover:bg-surface-700/50 rounded-md transition-colors cursor-pointer flex items-center justify-center text-surface-950 dark:text-surface-50">
                            <iconify-icon icon="solar:close-circle-outline" width="24" height="24"></iconify-icon>
                        </Dialog.CloseTrigger>
                    </header>
                    <nav class="flex flex-col space-y-2 px-4 mt-8 text-surface-900 dark:text-surface-50">
                        <a href="#about" class="text-lg font-medium hover:text-primary-500 transition-colors py-2">About</a>
                        <a href="#skills" class="text-lg font-medium hover:text-primary-500 transition-colors py-2">Skills</a>
                        <a href="#projects" class="text-lg font-medium hover:text-primary-500 transition-colors py-2">Projects</a>
                        <a href="#experience" class="text-lg font-medium hover:text-primary-500 transition-colors py-2">Experience</a>
                        <a href="#education" class="text-lg font-medium hover:text-primary-500 transition-colors py-2">Education</a>
                    </nav>
                </Dialog.Content>
            </Dialog.Positioner>
        </Portal>
    </Dialog>
</header>
