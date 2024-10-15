<template>
  <div>
    <NuxtLayout name="portfolio">
      <template #title>
        <div class="flex gap-2">
          <CommonIconTech :tech="['vue', 'wordpress']" />
        </div>
        <h1 class="text-6xl xl:text-7xl tracking-wide">HDP User Group</h1>
      </template>

      <template #role>
        <p class="mb-2"><strong>Role:</strong> Full-stack Developer</p>
        <p class="mb-2">
          Libraries / Frameworks used: Wordpress, Vue, JQuery, Bootstrap, Sass
        </p>
      </template>

      <template #interface>
        <div class="relative border-8 rounded-md border-slate-300">
          <img
            src="/images/hdpusergroup.png"
            alt="hdpusergroup-design"
            class="w-full max-h-[300px] md:max-h-[500px]"
          />
          <img
            src="/images/hdp-mobile.png"
            alt="hdpusergroup-design-mobile"
            class="max-w-[38%] absolute -bottom-16 right-2 border-8 rounded-xl border-slate-700"
          />
        </div>
      </template>

      <template #content>
        <div class="max-w-[85vw] mx-auto">
          <div class="mb-8 mt-16">
            <h2 class="text-3xl tracking-wide mb-1">Context.</h2>
            <p class="mb-2">
              HDP User Group is a project-oriented industry consortium
              addressing the integration of new electronics component packaging
              and interconnect technologies into member company supply chains.
            </p>
            <p>
              To get more information about this project, please visit
              <NuxtLink
                to="https://hdpusergroup.org/"
                class="text-orange-400"
                target="_new"
                rel="noreferrer"
                >www.hdpusergroup.org</NuxtLink
              >
            </p>
          </div>
          <div class="mb-8">
            <h2 class="text-3xl tracking-wide mb-1">Development work.</h2>
            <p class="mb-2"></p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Worked on core
              features of the website
            </h3>
            <p class="ml-6 mb-3">
              I developed core modules for the website, including project,
              events, file, and membership management. I utilized and extend the
              functionalities of plugins like Tribe Events Calendar, WP File
              Download, and Ultimate Member to meet specific requirements.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Integrated events
              with Cisco Webex
            </h3>
            <p class="ml-6 mb-3">
              Events created on the website are automatically synced with Webex,
              allowing members to join events directly from the website.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Integrated
              Mailman for mailing list management
            </h3>
            <p class="ml-6 mb-3">
              Admins can assign a mailing list to a project or event, ensuring
              members receive updates and notifications.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Created a plugin
              to check for any broken links
            </h3>
            <p class="ml-6 mb-3">
              I created a custom plugin to check for any broken links on the
              website and send a report to the admin for review.
            </p>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl tracking-wide mb-1">Reflection.</h2>
            <p>
              This project was a fantastic opportunity for me to work on a
              large-scale website with many moving parts. I really enjoyed the
              challenge of integrating various services and plugins to deliver a
              seamless experience for users. I also learned a lot about the
              WordPress REST API and how to extend third-party plugins like The
              Events Calendar API.
            </p>
          </div>
        </div>
        <Pagination
          :prev="{
            title: 'Secor Online',
            link: '/showcase/secoronline',
          }"
          :next="{
            title: 'Sample Ballot Generator',
            link: '/showcase/sampleballotgenerator',
          }"
        />
      </template>
    </NuxtLayout>
  </div>
</template>
