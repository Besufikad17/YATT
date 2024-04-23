<script lang="ts">
import Header from "./Header.vue";
import ReloadIcon from "./icons/Reload.vue";

export default {
  data() {
    return {
      input: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      index: 0,
      timer: 60,
      isPaused: true,
      specialKeys: ["Meta", "Shift", "Control", "Alt", "Escape", "PageUp", "PageDown", "Home", "End", "ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Tab", "CapsLock", "Delete", "Insert", "Pause", "ScrollLock"]
    }
  },
  methods: {
    countDownTimer() {
      if (this.timer > 0 && !this.isPaused) {
        setTimeout(() => {
          this.timer -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
    onKeyPressed(key) {
      if (this.specialKeys.indexOf(key) === -1 && this.timer > 0) {
        if (key === "Backspace") {
          this.erase();
        } else {
          this.input = this.input + key;
          this.index++;
        }
      }
    },
    erase() {
      if (this.input.length > 0 && this.index > 0) {
        this.input = this.input.slice(0, this.input.length - 1);
        this.index--;
      }
    },
    getLetterColor(char, index) {
      if (index > this.input.length) {
        return "#606C6A";
      } else if (this.text[index] == char) {
        return "#02BB86";
      } else {
        return "#FF6668";
      }
    },
    updateTimer() {
      this.timer--;
    },
    reset() {
      this.isPaused = true;
      this.input = "";
      this.index = 0;
      this.timer = 60;
    }
  },
  components: {
    Header,
    ReloadIcon
  },
  created() {
    this.countDownTimer()
  },
  mounted() {
    let self = this;
    window.addEventListener('keyup', function (ev) {
      if (self.specialKeys.indexOf(ev.key) === -1 && self.timer > 0) {
        if (self.isPaused) {
          self.isPaused = false;
          self.countDownTimer();
        }
        self.onKeyPressed(ev.key);
      }
    });
  }
}
</script>

<template>
  <Header />
  <div class="container">
    <div class="timer-parent">
      <p class="timer-header">TIMER</p>
      <p class="timer">{{ timer > 9 ? timer : "0" + timer }}</p>
    </div>
    <div class="p-container">
      <p>
        <span v-for="(char, index) in input" :key="index" :style="{ 'color': this.getLetterColor(char, index) }">{{ char
          }}</span>
        <span v-for="(char, index2) in text.slice(index, text.length)" style="color: #606C6A;">{{ char }}</span>
      </p>
    </div>
    <div class="control-container" @click="this.reset">
      <ReloadIcon />
      <span class="restart">Start Over</span>
    </div>
  </div>
</template>

<style scoped>
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

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.p-container {
  margin-top: 50px;
  width: 800px;
  padding: auto;
}

.control-container {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 40px;
}

.restart {
  color: #f2f2f2;
  font-size: 24px;
  margin-left: 4px;
}

.control-container:hover {
  cursor: pointer;
  border-radius: 25px;
  box-shadow: rgba(242, 242, 242, 0.35) 0px 5px 15px;
}
</style>
