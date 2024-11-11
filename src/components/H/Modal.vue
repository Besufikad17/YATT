<script setup lang="ts">
import { computed } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { Icon } from '@iconify/vue';

const emits = defineEmits(["update:modelValue", "confirm"]);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  wrapperClass: {
    type: String,
  },
  title: {
    type: String,
    default: "",
  },
  autoClose: {
    type: Boolean,
    default: true,
  },
  enabledOverflow: {
    type: Boolean,
    default: true,
  },
});

const open = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    emits("update:modelValue", newVal);
  },
});
</script>

<template>
    <TransitionRoot as="template" :show="open">
      <Dialog
        as="div"
        class="relative z-[200]"
        @close="autoClose ? (open = false) : ''"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity"
          />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                :class="[
                  enabledOverflow ? 'overflow-visible' : 'overflow-hidden',
                  props.wrapperClass ? props.wrapperClass : 'sm:max-w-xl',
                ]"
                class="relative transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6"
              >
                <div
                  class="absolute w-full justify-between right-0 top-0 hidden px-4 pt-4 sm:flex"
                >
                  <DialogTitle
                    as="h3"
                    class="flex-1 text-base font-semibold leading-6 text-gray-900"
                    ><slot name="Heading" />
                  </DialogTitle>

                  <button
                    type="button"
                    class="flex items-center justify-cen self-center p-1 hover:bg-gray-100 shrink-0 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-100 duration-100"
                    @click="open = false"
                  >
                    <span class="sr-only">Close</span>
                    <Icon icon="ion:close-outline" class="text-2xl" />
                  </button>
                </div>
                <slot name="content" />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>