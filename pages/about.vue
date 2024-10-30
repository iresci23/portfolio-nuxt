<template>
  <div>
    <NuxtLayout name="about">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div>
          <h1 class="font-space-grotesk text-center text-4xl">About me</h1>
          <div class="mt-4">
            <CommonIconAvatar class="mx-auto" />
          </div>
        </div>
        <div class="px-8 col-span-2">
          <div class="my-8">
            <p class="font-roboto text-lg xl:text-xl xl:leading-8">
              I'm an experienced full-stack developer with a passion for
              building solid and scalable software product. I have experience
              working with various complex projects and strive to ensure each
              project meets the current needs while being adaptable and capable
              of growing with future requirements. My goal is to design
              solutions that are reliable, maintainable, and efficient.
            </p>
          </div>

          <h2 class="font-roboto mb-4 text-2xl">Skills & Tools</h2>
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 font-space-grotesk mb-12"
          >
            <div>
              <ul class="text-md leading-8">
                <li>PHP, Laravel</li>
                <li>Vue, Vue Pinia, Nuxt</li>
                <li>TailwindCSS, Sass</li>
                <li>React, Redux, Formik</li>
                <li>Styled Components</li>
                <li>Javascript, Typescript, JQuery</li>
                <li>Wordpress, Elementor/Divi</li>
                <li>WooCommerce</li>
                <li>Custom WP Theme/Plugin</li>
              </ul>
            </div>
            <div>
              <ul class="text-md leading-8">
                <li>RESTful API Development</li>
                <li>Payment API Integrations</li>
                <li>MySQL, PostgreSQL</li>
                <li>CouchDB, MongoDB</li>
                <li>Git, Vite, Docker, Jenkins</li>
                <li>AWS EC2, S3, Route53</li>
                <li>Digital Ocean, Linode, WPEngine</li>
                <li>Cpanel / WHM</li>
                <li>Domain & Hosting</li>
              </ul>
            </div>
          </div>
          <h2 class="font-roboto mb-4 text-2xl">Contact</h2>
          <div class="flex gap-4 mb-2">
            <NuxtLink
              to="https://github.com/iresci23/"
              class="duration-100 hover:scale-125"
              target="_new"
            >
              <CommonIconGithub />
            </NuxtLink>
            <NuxtLink
              to="https://www.linkedin.com/in/irelene-cosicol/"
              class="duration-100 hover:scale-125"
              target="_new"
            >
              <CommonIconLinkedin />
            </NuxtLink>
            <NuxtLink
              to="mailto:irelene.dev@gmail.com"
              class="duration-100 hover:scale-125"
            >
              <CommonIconMail />
            </NuxtLink>
          </div>
          <div class="underline">
            <button
              @click="downloadResume"
              class="underline text-orange-600 hover:text-orange-500"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/downloads/Irelene_Cosicol_CV_With_Work_Samples.pdf";
  link.download = "Irelene_Cosicol_Resume_2024.pdf";
  link.target = "_blank";
  link.click();
};
</script>
