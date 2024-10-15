<template>
  <NuxtLink :to="link">
    <div
      class="group/card card-border overflow-hidden relative transition-all duration-300"
    >
      <div
        class="block relative overflow-hidden h-[230px]"
        :style="{
          borderColor: border,
        }"
      >
        <img :src="image" alt="octadoc" class="rounded-t" />
        <div class="card-text group-hover/card:animate-visible">
          <span class="text-white font-space-grotesk px-6">{{ text }}</span>
          <div class="flex gap-2 justify-center pt-4">
            <CommonIconTech :tech="tech" />
          </div>
        </div>
      </div>
      <div class="p-2 flex">
        <h4
          class="font-main text-md font-bold capitalize text-gray-900 transition-all duration-300 group-hover/card:text-white z-40"
        >
          {{ title }}
        </h4>
      </div>
      <span
        class="group/scaler absolute bottom-[-5px] right-[-5px] z-0 h-1 w-1 rounded-full bg-neutral-900 opacity-95 transition-all duration-500 xl:duration-300 group-hover/card:scale-[450] xl:group-hover/card:scale-[180]"
      ></span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  link: string;
  image: string;
  text: string;
  tech: string[];
  border?: string;
}>();
</script>

<style scoped lang="scss">
.card-text {
  visibility: hidden;
  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
  animation-delay: 100ms;
  transition: all;
  z-index: 50;
  opacity: 0;
}
.card-border {
  display: block;
  color: #111;
  text-decoration: none;
  transition: 0.2s;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
}
</style>
