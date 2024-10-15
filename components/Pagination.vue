<template>
  <div class="navigation my-8">
    <div class="flex justify-between max-w-[85vw] mx-auto">
      <NuxtLink
        v-if="prev"
        :to="prev.link"
        class="font-garamond text-xl my-4 italic"
      >
        <span class="text-orange-400 text-3xl">&#8249;</span>
        <span class="underline text-2xl ml-2">{{ prev.title }}</span>
      </NuxtLink>
      <div v-else></div>
      <NuxtLink :to="next.link" class="font-garamond text-xl my-4 italic">
        <span class="underline text-2xl mr-2">{{ next.title }}</span>
        <span class="text-orange-400 text-3xl">&#8250;</span>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
interface PaginationProps {
  prev?: {
    title: string;
    link: string;
  };
  next: {
    title: string;
    link: string;
  };
}
const { prev, next } = defineProps<PaginationProps>();
</script>
