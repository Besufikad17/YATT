<script setup lang="ts">
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
  <div class="results-container">
    <span class="results-title">Result</span><br />
    <div class="action-section">
      <span>Speed: {{ speed }} WPM</span>
    </div>
    <div class="action-section">
      <span>Accuracy: {{ accuracy.toFixed(2) }}%</span>
    </div>
    <div class="action-section">
      <button class="close-button" @click="emits('close')">Close</button>
    </div>
  </div>
</template>

<style scoped>
.results-container {
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.results-title {
  color: #f2f2f2;
  font-size: 20px;
}

.close-button {
  width: 80px;
  height: 35px;
  color: #121716;
  background-color: #02BB86;
  border-style: none;
  border-radius: 25px;
}

.close-button:hover {
  background-color: #121716;
  color: #02BB86;
  border-style: solid;
  border-width: 1px;
  border-color: #02BB86;
}

.action-section {
  display: flex;
  flex-direction: row;
  padding: 8px;
}

.action-section span {
  float: left;
  margin-left: 10px;
  margin-right: 15px;
  margin-bottom: 10px;
  color: #f2f2f2;
  font-size: 14px;
}
</style>
