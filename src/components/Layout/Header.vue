<script setup lang="ts">
  import { ref } from "vue";
  import { Icon } from "@iconify/vue";

  const isLogged = ref(false);
</script>

<template>
  <div class="flex items-center justify-between p-4 bg-primary-950">
    <span class="text-white text-2xl">YATT</span>
    <div class="flex items-center gap-8">
      <a href="/" class="flex items-center gap-2 text-primary-500">
        <Icon icon="material-symbols:home-outline" />
        Home
      </a>
      <a v-if="isLogged" href="/stats" class="flex items-center gap-2 text-primary-500">
        Stats
      </a>
      <button v-else class="flex items-center justify-center focus:outline-none focus:ring-0 text-primary-500">
        Login
      </button>
    </div>
  </div>
</template>
