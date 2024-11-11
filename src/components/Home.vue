<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { Icon } from "@iconify/vue";
  import { SPECIAL_KEYS, TEXT } from "../composables/constants/strings";
  import Header from "../components/Layout/Header.vue";
  import Result from "./Result.vue";

  const index = ref(0);
  const errors = ref(0);
  const timer = ref(60);
  const isPaused = ref(false);
  const dialog = ref(false);
  const input = ref("");

  const countDownTimer = () => {
    if (timer.value > 0 && isPaused.value) {
      setTimeout(() => {
        timer.value -= 1
        countDownTimer()
      }, 1000)
    }
  }

  const onKeyPressed = (key: string) => {
    if (SPECIAL_KEYS.indexOf(key) === -1 && timer.value > 0) {
      if (key === "Backspace") {
        erase();
      } else {
        input.value = input.value + key;
        if (key !== TEXT[index.value]) {
          errors.value++;
        }
        index.value++;
      }
    }
  }

  const erase = () => {
    if (input.value.length > 0 && index.value > 0) {
      input.value = input.value.slice(0, input.value.length - 1);
      index.value--;
    }
  }

  const getLetterColor = (char: string, index: number) => {
    if (index > input.value.length) {
      return "#606C6A";
    } else if (TEXT[index] == char) {
      return "#02BB86";
    } else {
      return "#FF6668";
    }
  }

  const reset = () => {
    isPaused.value = true;
    input.value = "";
    index.value = 0;
    timer.value = 60;
  }

  const closeDialog = () => {
    dialog.value = false;
    reset();
  }

  onMounted(() => {
    countDownTimer();
    window.addEventListener('keyup', function (ev) {
      if (SPECIAL_KEYS.indexOf(ev.key) === -1 && timer.value > 0) {
        if (isPaused.value) {
          isPaused.value = false;
          countDownTimer();
        }
        onKeyPressed(ev.key);
      }
    });
  });
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
        <span v-for="(char, index) in input" :key="index" :style="{ 'color': getLetterColor(char, index) }">{{ char
          }}</span>
        <span v-for="(char, _) in TEXT.slice(index, TEXT.length)" style="color: #606C6A;">{{ char }}</span>
      </p>
    </div>
    <div class="control-container" @click="reset">
      <Icon icon="mdi:reload" />
      <span class="restart">Start Over</span>
    </div>
    <dialog :open="dialog || timer == 0">
      <Result :close="closeDialog" :speed="(input.split(' ').length)"
        :accuracy="((input.length - errors) / TEXT.length) * 100" />
    </dialog>
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

dialog {
  background-color: #121716;
  border-style: none;
  border-radius: 25px;
  box-shadow: rgba(241, 241, 241, 0.24) 0px 3px 8px;
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
