<template>
  <div class="px-6">
    <h2 class="font-garamond text-3xl my-4 italic">A selection of my work</h2>
    <div
      class="grid grid-cols-1 gap-4 gap-y-6 lg:grid-cols-2 xl:grid-cols-3 mb-12"
    >
      <PortfolioCard
        v-for="project in projects"
        :title="project.title"
        :text="project.text"
        :link="project.link"
        :image="project.image"
        :tech="project.tech"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Octadoc",
    text: "A web platform built for healthcare professionals",
    link: "/showcase/octadoc",
    image: "/images/octadoc-preview.png",
    tech: ["vue", "laravel", "tailwindcss"],
  },
  {
    title: "Tritium",
    text: "A cloud platform for customizable, scalable payment solutions",
    link: "/showcase/tritium",
    image: "/images/episode6-preview.png",
    tech: ["react", "typescript", "materialui"],
  },
  {
    title: "MGS Tool",
    text: "A web app designed for job management and scheduling",
    link: "/showcase/mgs",
    image: "/images/mgs-preview.png",
    tech: ["vue", "laravel", "sass"],
  },
  {
    title: "Assess Your Risk",
    text: "A free tool for evaluating breast and ovarian cancer risk",
    link: "/showcase/ayr",
    image: "/images/ayr-preview.png",
    tech: ["vue", "laravel", "bootstrap"],
  },
  {
    title: "Brixbid",
    text: "An online rental marketplace offering end-to-end services for landlords and renters",
    link: "/showcase/brixbid",
    image: "/images/brixbid.png",
    tech: ["yii", "javascript", "sass"],
  },
  {
    title: "VRTality",
    text: "An agency website for a nonprofit creating VR experiences for education and therapy",
    link: "/showcase/vrtality",
    image: "/images/vrtality.png",
    tech: ["wordpress", "vue", "sass"],
  },
  {
    title: "Secor Online",
    text: "An eCommerce website that offers a wide range of high-quality industrial supplies",
    link: "/showcase/secoronline",
    image: "/images/secoronline.png",
    tech: ["wordpress", "elementor", "woocommerce"],
  },
  {
    title: "HDP User Group",
    text: "A membership website that includes project and event management features",
    link: "/showcase/hdpusergroup",
    image: "/images/hdpusergroup.png",
    tech: ["wordpress", "vue", "sass"],
  },
  {
    title: "Sample Ballot Generator",
    text: "(Personal Project) A tool that generates sample ballots for Philippine elections",
    link: "/showcase/sampleballotgenerator",
    image: "/images/sampleballotgen.png",
    tech: ["laravel", "vue", "tailwindcss"],
  },
];
</script>
