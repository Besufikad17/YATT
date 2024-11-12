<script setup lang="ts">
  import { onMounted, ref, watch } from "vue";
  import { Icon } from "@iconify/vue";
  import { SPECIAL_KEYS, TEXT } from "../composables/constants/strings";
  import DefaultLayout from "../layouts/default.vue";
  import Result from "./Result.vue";

  const index = ref(0);
  const errors = ref(0);
  const timer = ref(60);
  const isPaused = ref(true);
  const dialog = ref(false);
  const input = ref("");

  const countDownTimer = () => {
    if (timer.value > 0 && !isPaused.value) {
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
    }else {
      isPaused.value = true;
      dialog.value = true;
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
    window.addEventListener('keyup', function (ev) {
      if (SPECIAL_KEYS.indexOf(ev.key) === -1 && timer.value > 0) {
        if (isPaused.value) {
          isPaused.value = false;
        }
        onKeyPressed(ev.key);
      }
    });
  });

  watch(isPaused, (value) => {
    if (!value) {
      countDownTimer();
    }
  });
</script>

<template>
 <DefaultLayout>
   <div class="flex flex-col items-center justify-center bg-primary-950 gap-12 w-full min-h-[calc(100vh-64px)]">
      <div class="flex flex-col justify-center">
        <p class="text-gray-50">TIMER</p>
        <p class="text-gray-300 text-4xl">{{ timer > 9 ? timer : "0" + timer }}</p>
      </div>
      <div class="w-2/3 p-4">
        <p>
          <span v-for="(char, index) in input" :key="index" :style="{ 'color': getLetterColor(char, index) }">{{ char
            }}</span>
          <span v-for="(char, _) in TEXT.slice(index, TEXT.length)" style="color: #606C6A;">{{ char }}</span>
        </p>
      </div>
      <button class="flex items-center gap-2 rounded-md border-2 border-black bg-primary-500 p-4 text-2xl hover:-translate-y-3 active:translate-x-0 active:translate-y-0 transition-all" @click="reset">
        <Icon icon="mdi:reload" />        
        Start Over 
      </button>
      <dialog :open="dialog || timer == 0" class="w-1/2 bg-primary-500 rounded-md">
        <Result :close="closeDialog" :speed="(input.split(' ').length)"
          :accuracy="((input.length - errors) / TEXT.length) * 100" @close="closeDialog" />
      </dialog>
   </div>
 </DefaultLayout>
</template>