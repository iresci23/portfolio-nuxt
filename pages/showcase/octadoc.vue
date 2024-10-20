<template>
  <div>
    <NuxtLayout name="portfolio">
      <template #title>
        <div class="flex gap-2">
          <CommonIconTech :tech="['laravel', 'vue', 'tailwindcss']" />
        </div>
        <h1 class="text-6xl xl:text-8xl tracking-wide">Octadoc</h1>
      </template>
      <template #role>
        <p class="mb-2"><strong>Role:</strong> Full-stack Developer</p>
        <p class="mb-2">
          Libraries / Frameworks used: Laravel, Laravel Scout, Laravel Spark,
          VueJS, Vue Pinia, TailwindCSS
        </p>
        <p class="mb-2">Deployment Tools: AWS EC2, Route53, CodeCommit</p>
      </template>
      <template #interface>
        <div class="relative border-8 rounded-md border-slate-300">
          <img
            src="/images/octadoc/edit-template.png"
            alt="octadoc-design"
            class="w-full max-h-[300px] md:max-h-[500px]"
          />
          <img
            src="/images/octadoc/octadoc-mobile.png"
            alt="octadoc-design-mobile"
            class="max-w-[50%] absolute -bottom-16 right-2 border-8 rounded-xl border-slate-700"
          />
        </div>
      </template>
      <template #content>
        <div class="max-w-[85vw] mx-auto">
          <div class="mb-8 mt-16">
            <h2 class="text-3xl tracking-wide mb-1">Context.</h2>
            <p>
              Octadoc is a web platform built to make life easier for healthcare
              professionals, especially GPs, by streamlining the process of
              taking clinical notes. The task at hand is to refresh and
              modernize the platform's UI/UX and implement new features that
              weren't available in the previous version.
            </p>
            <p>
              To get more information about this project, please visit
              <NuxtLink
                to="https://www.octadoc.au/"
                class="text-orange-400"
                target="_new"
                rel="noreferrer"
                >www.octadoc.au</NuxtLink
              >
            </p>
          </div>
          <div class="mb-8">
            <h2 class="text-3xl tracking-wide mb-1">Development work.</h2>
            <p class="mb-2">
              The project was divided into the following phases:
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>UI/UX Overhaul
            </h3>
            <p class="ml-6 mb-3">
              Conversion of the new UI designs into responsive and reusable
              VueJS components.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Database Schema
              Adjustments
            </h3>
            <p class="ml-6 mb-3">
              Adjustments to the database schema to accommodate the new features
              and changes. Improvements were made to handle complex nested
              questions and grouping of questions in templates.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Bug Fixes
            </h3>
            <p class="ml-6 mb-3">
              Several bugs in the previous version were resolved to improve
              overall performance.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Implementation of
              New Features
            </h3>
            <p class="ml-6 mb-3">
              Admin Controls, Tagging System, Improved Searching using
              <i>Laravel Scout</i>, Drag-n-drop, Template Sharing
            </p>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl tracking-wide mb-4">Design.</h2>

            <div>
              <!-- <div class="shadow mb-6">
                <img src="/images/octadoc.png" alt="" />
              </div> -->
              <div class="shadow mb-6">
                <video width="100%" height="auto" controls>
                  <source
                    src="/images/octadoc/app-recording.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <!-- <div>
              <h3
                class="text-xl font-semibold my-2 text-orange-600 text-center"
              >
                Old Interface
              </h3>
              <div class="shadow">
                <img src="/images/octadoc/old-homepage.png" alt="" />
              </div>
            </div> -->
          </div>
          <div class="mb-12">
            <h2 class="text-3xl tracking-wide mb-1">Reflection.</h2>
            <p>
              This project was one of the fun ones I've worked on. It was
              clearly defined and the new design was straightforward to
              implement. It also gave me a chance to dive deeper into Pinia - a
              new state management library for Vue that I hadn't explored as
              much before. The highlight of this project was building dynamic
              input components that changed based on the data type, like free
              text, multiple select, or single select, and using those to build
              dynamic forms. I am a firm advocate for reusable components and
              believe I have effectively applied this approach in this project.
            </p>
          </div>
        </div>
        <Pagination
          :next="{
            title: 'Tritium',
            link: '/showcase/tritium',
          }"
        />
      </template>
    </NuxtLayout>
  </div>
</template>
