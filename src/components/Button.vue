<script>
export default {
  props: {
    text: String,
    width: String,
    height: String,
    bgColor: String,
    fgColor: String,
    borderRadius: String
  },
  setup(props) {
    console.log(props.text, props.width)
  },
  computed: {
    cssVars() {
      return {
        'width': this.width,
        'height': this.height,
        'background-color': this.bgColor,
        'color': this.fgColor,
        'border-radius': this.borderRadius,
      }
    }
  }
}
</script>

<template>
  <button :style="cssVars">{{ text }}</button>
</template>

<style scoped>
button {
  border-style: none;
}

button:hover {
  border-style: solid;
  border-width: 1px;
  border-color: currentColor;
}
</style>
