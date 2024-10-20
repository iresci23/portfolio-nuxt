<template>
  <div>
    <NuxtLayout name="portfolio">
      <template #title>
        <div class="flex gap-2">
          <CommonIconTech :tech="['laravel', 'vue', 'tailwindcss']" />
        </div>
        <h1 class="text-6xl xl:text-7xl tracking-wide">
          Sample Ballot Generator
        </h1>
      </template>

      <template #role>
        <p class="mb-2"><strong>Role:</strong> Full-stack Developer</p>
        <p class="mb-2">
          Libraries / Frameworks used: Laravel, VueJS, Sass, Tailwind CSS
        </p>
      </template>

      <template #interface>
        <div class="relative border-8 rounded-md border-slate-300">
          <img
            src="/images/sampleballotgen.png"
            alt="sampleballotgen-design"
            class="w-full max-h-[300px] md:max-h-[500px]"
          />
          <img
            src="/images/sampleballot_mobile.png"
            alt="sampleballotgen-design-mobile"
            class="max-w-[38%] absolute -bottom-16 right-2 border-8 rounded-xl border-slate-700"
          />
        </div>
      </template>

      <template #content>
        <div class="max-w-[85vw] mx-auto">
          <div class="mb-8 mt-16">
            <h2 class="text-3xl tracking-wide mb-1">Context.</h2>
            <p class="mb-2">
              A personal project created for the 2022 Philippine Election. It
              features a form wizard that allows users to choose their preferred
              candidates for each electoral position, then generates a printable
              Sample Ballot with the selected candidates.
            </p>
            <p>
              You can find the project's source code at Github:
              <NuxtLink
                to="https://github.com/iresci23/ballotph"
                class="text-orange-400"
                target="_new"
                rel="noreferrer"
                >www.github.com/iresci23/ballotph</NuxtLink
              >
            </p>
          </div>

          <div class="mb-8">
            <h2 class="text-3xl tracking-wide mb-1">Development work.</h2>
            <p class="mb-2">
              I served as the lead developer and system architect for the
              project, while a friend assisted with the front-end development.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Designed the
              database schema
            </h3>
            <p class="ml-6 mb-3">
              I designed the database schema with scalability in mind, ensuring
              it can accommodate future elections data.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Imported the
              lists of candidates
            </h3>
            <p class="ml-6 mb-3">
              The Philippine government provides the candidate list in PDF
              format. Initially, I attempted to parse and import the data
              directly from the PDFs, but this led to inaccuracies. To resolve
              this, the PDFs are converted to Excel files first, then I created
              a functionality utilizing the
              <i>Laravel Excel library</i> to automate the parsing and import of
              the Excel files into the database.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Implemented the
              form wizard
            </h3>
            <p class="ml-6 mb-3">
              The form wizard helps users select their preferred candidates for
              each electoral position. I used the Vue Pinia library to manage
              the state of the form wizard.
            </p>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl tracking-wide mb-4">Design.</h2>
            <div class="shadow mb-6">
              <video width="100%" height="auto" controls>
                <source
                  src="/images/sampleballot_recording.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <p class="text-sm">
              Note: Most of the candidate photos were sourced from external
              links, which were no longer functional at the time this video was
              recorded.
            </p>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl tracking-wide mb-1">Reflection.</h2>
            <p>
              The app was pretty simple, but the biggest hurdle was importing
              all the data for national and local election candidates. We
              managed to get all the files with candidate info for every city
              and province into the system. We completed the project in under a
              month and launched it a week before the Philippine elections.
              Although we didn't have enough time to market it, we were thrilled
              to see so many people have used it.
            </p>
          </div>
        </div>

        <Pagination
          :prev="{
            title: 'HDP User Group',
            link: '/showcase/hdpusergroup',
          }"
          :next="{
            title: 'Octadoc',
            link: '/showcase/octadoc',
          }"
        />
      </template>
    </NuxtLayout>
  </div>
</template>
