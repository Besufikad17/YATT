<script>
export default {
  props: {
    updateTimer: Function
  },
  data() {
    return {
      timer: 60
    }
  },
  methods: {
    countDownTimer() {
      if (this.timer > 0) {
        setTimeout(() => {
          this.timer -= 1
          this.updateTimer()
          this.countDownTimer()
        }, 1000)
      }
    }
  },
  created() {
    this.countDownTimer()
  }
}
</script>

<template>
  <div class="timer-parent">
    <p class="timer-header">TIMER</p>
    <p class="timer">{{ timer > 9 ? timer : "0" + timer }}</p>
  </div>
</template>

<style>
.timer-parent {
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.timer-header {
  color: #f2f2f2;
  font-size: 20px;
  margin: 0;
}

.timer {
  color: #606C6A;
  font-size: 56px;
  margin: 0;
}
</style>
