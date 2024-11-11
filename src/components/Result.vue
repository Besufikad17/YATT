<script setup lang="ts">
  import { Icon } from "@iconify/vue";

  const emits = defineEmits(["close"]);

  defineProps({
    speed: {
      type: Number,
      required: true
    },
    accuracy: {
      type: Number,
      required: true
    }
  });
</script>

<template>
  <div class="flex flex-col w-full p-4 gap-4 text-white ">
    <div class="flex items-center justify-between">
      <span class="text-xl">Result</span>
      <button @click="emits('close')">
        <Icon icon="material-symbols:close" />
      </button>
    </div>
    <span>Speed: {{ speed }} WPM</span>
    <span>Accuracy: {{ accuracy.toFixed(2) }}%</span>
  </div>
</template>