<template>
  <nav class="font-space-grotesk flex flex-col gap-4">
    <NuxtLink
      v-for="nav in navItems"
      :to="nav.path"
      :class="{
        active: route.fullPath.toLowerCase() === nav.path.toLowerCase(),
      }"
      >{{ nav.name }}</NuxtLink
    >
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();

const navItems = [
  { name: "Octadoc", path: "/showcase/octadoc" },
  { name: "Tritium", path: "/showcase/tritium" },
  { name: "MGS Tool", path: "/showcase/mgs" },
  { name: "Assess Your Risk", path: "/showcase/ayr" },
  { name: "Brixbid", path: "/showcase/brixbid" },
  { name: "VRTality", path: "/showcase/vrtality" },
  { name: "Secor Online", path: "/showcase/secoronline" },
  { name: "HDP User Group", path: "/showcase/hdpusergroup" },
  { name: "Sample Ballot Generator", path: "/showcase/sampleballotgenerator" },
];
</script>

<style scoped lang="scss">
nav {
  a {
    padding-left: 4px;
    position: relative;
    color: #686868;

    &:hover {
      color: #2d2d2d;
      &:before {
        background: #686868;
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: 12px;
      left: -24px;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      background: #e6e6e6;
      border-radius: 50%;
    }

    &.active {
      color: #fbbf24;

      &:before {
        background: #fbbf24;
      }
    }
  }
}
</style>
