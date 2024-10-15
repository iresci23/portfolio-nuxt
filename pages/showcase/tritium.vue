<template>
  <div>
    <NuxtLayout name="portfolio">
      <template #title>
        <div class="flex gap-2">
          <CommonIconTech :tech="['react', 'typescript', 'materialui']" />
        </div>
        <h1 class="text-6xl xl:text-8xl tracking-wide">Tritium</h1>
      </template>

      <template #role>
        <p class="mb-2"><strong>Role:</strong> Front-end Developer</p>
        <p class="mb-2">
          Libraries / Frameworks used: React, Typescript, React MUI, Redux,
          Formik, Yup, Sass
        </p>
      </template>

      <template #interface>
        <div class="relative border-8 rounded-md border-slate-300">
          <img
            src="/images/episode6.png"
            alt="episode6"
            class="w-full max-h-[300px] md:max-h-[500px]"
          />
        </div>
      </template>

      <template #content>
        <div class="max-w-[85vw] mx-auto">
          <div class="mb-8 mt-16">
            <h2 class="text-3xl tracking-wide mb-1">Context.</h2>
            <p>
              Tritium, by Episode Six, is a modern, cloud-based platform
              designed to facilitate highly configurable and scalable payment
              solutions for banks, fintechs, and other financial institutions.
            </p>
            <p>
              To get more information about this project, please visit
              <NuxtLink
                to="https://episodesix.com/tritium-payment-platform"
                class="text-orange-400"
                target="_new"
                rel="noreferrer"
                >www.episodesix.com</NuxtLink
              >
            </p>
          </div>
          <div class="mb-8">
            <h2 class="text-3xl tracking-wide mb-1">Development work.</h2>
            <p class="mb-2">
              Our agency partnered with Episode Six as the dedicated front-end
              team, to complement their in-house back-end developers. Below are
              some tasks I contributed to:
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Established
              Coding Standards
            </h3>
            <p class="ml-6 mb-3">
              The client requested a code cleanup due to inconsistent styling
              libraries, naming conventions, and incomplete TypeScript usage. I
              conducted an audit and proposed a unified coding standard.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Refactoring Old
              Code
            </h3>
            <p class="ml-6 mb-3">
              I led our front-end team in refactoring the codebase to align with
              the new coding standards, ensuring the functionality remained
              intact throughout the process.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Implementing New
              UI
            </h3>
            <p class="ml-6 mb-3">
              Implemented the redesign of UI components (inputs, buttons, menus,
              etc.) based on the new Figma design.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Implementing New
              Features
            </h3>
            <p class="ml-6 mb-3">
              After completing the refactoring and clearing the backlog, our
              team began working alongside their in-house back-end developers on
              ongoing feature developments.
            </p>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl tracking-wide mb-1">Reflection.</h2>
            <p>
              This project was particularly challenging for me, as I was tasked
              with leading it for a high-profile client despite not having a
              solid experience with React. Fortunately, my extensive background
              in VueJS helped, as both frameworks share similar concepts,
              allowing me to quickly get up to speed. The project’s scale,
              combined with the complexity of understanding payment platform
              systems and terminology, added to the challenge, but I found it
              enjoyable and gained valuable experience with React and other
              tools along the way.
            </p>
          </div>
        </div>

        <Pagination
          :prev="{
            title: 'Octadoc',
            link: '/showcase/octadoc',
          }"
          :next="{
            title: 'MGS Tool',
            link: '/showcase/mgs',
          }"
        />
      </template>
    </NuxtLayout>
  </div>
</template>
