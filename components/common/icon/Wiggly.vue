<template>
  <div class="wavy-lines" :class="{ animate: animate }"></div>
</template>
<script setup>
const props = defineProps(["animate"]);
// add a prop for the menu label and active state
const { animate } = toRefs(props);
</script>
<style scoped>
.wavy-lines {
  position: relative;
  width: 100%;
  height: 50px;
  overflow: hidden;
}

.wavy-lines:before {
  content: "aaaaaaaaaaaaaaaa";
  width: 100%;
  position: absolute;
  color: transparent;
  text-decoration-style: wavy;
  text-decoration-color: #fff;
  text-decoration-line: underline;
  top: -40px;
  left: 0;
  z-index: 1;
}

.wavy-lines.animate:before {
  animation: wavyanimate 2.5s linear infinite;
}
@keyframes wavyanimate {
  0% {
    transform: translateX(-1px);
  }
  100% {
    transform: translateX(-59px);
  }
}
</style>
