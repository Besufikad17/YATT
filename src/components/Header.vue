<script scoped>
import Button from "./Button.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Button
  }
});
</script>

<template>
  <div class="parent">
    <div class="logo">
      <img src="../assets/logo.png" width="120" height="40" />
    </div>
    <div class="links">
      <a>Practice Mode</a>
      <Button text="Home" width="80px" height="30px" bgColor="#282828" fgColor="#02BB86" borderRadius="15px"
        fontSize="14px" />
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
