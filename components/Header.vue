<template>
  <div
    class="fixed top-0 bg-white z-50 w-full flex justify-between xl:bg-transparent"
  >
    <div
      class="flex justify-center items-center min-w-8 font-bitter animate-fade-in typewriter z-50"
    >
      <NuxtLink to="/" class="text-2xl font-bold px-8">
        <div class="irelene-logo">I</div>
      </NuxtLink>
    </div>
    <div class="font-bitter animate-fade-in z-50">
      <div class="flex gap-4 px-8 py-8">
        <NuxtLink
          to="/"
          class="text-xl tracking-wide hover:underline"
          :class="{
            underline: route.name !== 'about',
          }"
          >Work</NuxtLink
        >
        <NuxtLink
          to="/about"
          class="text-xl tracking-wide hover:underline"
          :class="{
            underline: route.name === 'about',
          }"
          >About</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();

onMounted(() => {
  typeWriter("IRELENE", 0, function () {});

  function typeWriter(text: string, i: number, fnCallback: Function) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      var logoName = document.querySelector(".irelene-logo");
      if (!logoName) return;
      logoName.innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
});
</script>

<style>
.typewriter div {
  letter-spacing: 0.15em;
  border-right: 0.15em solid orange;
  animation: blink-caret 0.75s step-end 6 normal forwards;
}
.typewriter a {
  display: block;
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>
