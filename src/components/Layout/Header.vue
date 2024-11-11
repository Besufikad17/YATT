<script setup lang="ts">
  import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="parent">
    <div class="logo">
      <img src="../../assets/logo.png" width="120" height="40" />
    </div>
    <div class="links">
      <a>Practice Mode</a>
      <button class="flex items-center gap-2">
        <Icon icon="material-symbols:home-outline" />
        Home
      </button>
    </div>
  </div>
</template>

<style scoped>
.parent {
  height: 50%;
  overflow: hidden;
  padding: 20px 200px;
  background-color: #121716;
}

.logo {
  float: left;
  margin-left: 10px;
}

.links {
  float: right;
  margin-left: 5px;
}

.links a {
  text-decoration: none;
  color: #606C6A;
  text-align: center;
  padding: 12px;
}
</style>
