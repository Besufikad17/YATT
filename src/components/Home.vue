<script setup lang="ts">
import Header from "./Header.vue";
import Timer from "./Timer.vue";
</script>

<template>
  <Header />
  <div class="container">
    <Timer />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>
