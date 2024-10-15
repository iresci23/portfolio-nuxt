<template>
  <div>
    <NuxtLayout name="portfolio">
      <template #title>
        <div class="flex gap-2">
          <CommonIconTech :tech="['wordpress', 'vue', 'sass']" />
        </div>
        <h1 class="text-6xl xl:text-8xl tracking-wide">VRTality</h1>
      </template>

      <template #role>
        <p class="mb-2"><strong>Role:</strong> Wordpress Developer</p>
        <p class="mb-2">
          Libraries / Frameworks used: Wordpress, Vue, JQuery, Bootstrap, Sass
        </p>
      </template>

      <template #interface>
        <div class="relative border-8 rounded-md border-slate-300">
          <img
            src="/images/vrtality.png"
            alt="vrtality-design"
            class="w-full max-h-[300px] md:max-h-[500px]"
          />
          <img
            src="/images/vrtality-mobile.png"
            alt="vrtality-design-mobile"
            class="max-w-[44%] absolute -bottom-16 right-2 border-8 rounded-xl border-slate-700"
          />
        </div>
      </template>

      <template #content>
        <div class="max-w-[85vw] mx-auto">
          <div class="mb-8 mt-16">
            <h2 class="text-3xl tracking-wide mb-1">Context.</h2>
            <p class="mb-2">
              Vrtality.org is a nonprofit that makes VR experiences accessible
              for education and therapy. They use VR to create immersive
              learning and therapy environments, partnering with schools and
              healthcare centers to bring these solutions to communities in
              need.
            </p>
            <p>
              To get more information about this project, please visit
              <NuxtLink
                to="https://www.vrtality.org/"
                class="text-orange-400"
                target="_new"
                rel="noreferrer"
                >www.vrtality.org</NuxtLink
              >
            </p>
          </div>
          <div class="mb-8">
            <h2 class="text-3xl tracking-wide mb-1">Development work.</h2>
            <p class="mb-2"></p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Created custom
              (mobile responsive) wordpress theme
            </h3>
            <p class="ml-6 mb-3">
              The website's UI design is graphic-heavy, so we avoided 3rd party
              page builders to lessen the bloat and used Gutenberg blocks
              instead. I developed the custom WordPress theme, incorporating
              VueJS for interactive elements, ensuring the theme was
              lightweight, mobile responsive, and performance-optimized.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Developed
              multi-step wizard modules
            </h3>
            <p class="ml-6 mb-3">
              Integrated VueJS to the WordPress theme to create multi-step
              wizards in certain pages of the site. The form wizards guide users
              through the process of selecting VR experiences and customizing
              their settings.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Configure
              WPRocket for caching and optimization
            </h3>
            <p class="ml-6 mb-3">
              I configured WPRocket to optimize the site's performance,
              including caching, minification, and lazy loading. This ensured
              the site loaded quickly and efficiently for both desktop and
              mobile.
            </p>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl tracking-wide mb-4">Design.</h2>
            <div class="shadow mb-6">
              <video width="100%" height="auto" controls>
                <source src="/images/vrtality-recording.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl tracking-wide mb-1">Reflection.</h2>
            <p>
              This project taught me how to balance aesthetics with
              functionality. I enjoyed building the front-end elements and
              applying animated effects. I also gained valuable experience in
              optimizing font loading and implementing font fallbacks to reduce
              CLS issues for improved user experience.
            </p>
          </div>
        </div>
        <Pagination
          :prev="{
            title: 'Brixbid',
            link: '/showcase/brixbid',
          }"
          :next="{
            title: 'Secor Online',
            link: '/showcase/secoronline',
          }"
        />
      </template>
    </NuxtLayout>
  </div>
</template>
