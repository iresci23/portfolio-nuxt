<template>
  <div>
    <NuxtLayout name="portfolio">
      <template #title>
        <div class="flex gap-2">
          <CommonIconTech :tech="['vue', 'laravel', 'sass']" />
        </div>
        <h1 class="text-6xl xl:text-8xl tracking-wide">MGS Tool</h1>
      </template>

      <template #role>
        <p class="mb-2"><strong>Role:</strong> Full-stack Developer</p>
        <p class="mb-2">Libraries / Frameworks used: Laravel, VueJS, Sass</p>
        <p class="mb-2">
          Integrations: Zoho CRM, Tsheet (Quickbooks Time), Zapier, GetStream.io
        </p>
      </template>

      <template #interface>
        <img
          src="/images/mgs.png"
          alt=""
          width="500px"
          class="border-8 rounded-sm"
        />
      </template>

      <template #content>
        <div class="max-w-[85vw] mx-auto">
          <div class="mb-8 mt-16">
            <h2 class="text-3xl tracking-wide">Context.</h2>
            <p>
              MGS Tool is a web app designed for job management and scheduling
              of MGS verifiers who handles medical gas equipment inspections.
            </p>
            <p>
              To get more information about this project, please visit
              <NuxtLink
                to="https://www.medgasservices.com/"
                class="text-orange-400"
                target="_new"
                rel="noreferrer"
                >www.medgasservices.com</NuxtLink
              >
            </p>
            <p></p>
          </div>
          <div class="mb-8">
            <h2 class="text-3xl mb-1">Development work.</h2>
            <p class="mb-2">
              The client required a specialized tool for their operations and
              wanted it seamlessly integrated with their existing productivity
              tools, like Zoho. As the principal developer of this project, I
              drived its technical direction including review and assessment of
              third-party integrations.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Database schema
              design
            </h3>
            <p class="ml-6 mb-3">
              I designed the MySQL database structure based on the project’s
              requirements, utilizing Laravel’s migration tool and seeding
              features to create the schema.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Designed a
              multi-role user system with permission restrictions
            </h3>
            <p class="ml-6 mb-3">
              The roles and permissions are defined in a JSON config file and I
              implemented it dynamically throughout the app. I also utilized the
              <i>Spatie Laravel Permission</i> library for this feature.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Developed admin
              and accounts portal
            </h3>
            <p class="ml-6 mb-3">
              Users with admin roles can manage accounts, jobs, and schedule
              appointments. Accounts role can view, cancel, reschedules their
              appointments.
            </p>
            <p class="ml-6 mb-3"></p>
            <p class="ml-6 mb-3"></p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Integrate
              accounts data with Zoho CRM Accounts & Contacts
            </h3>
            <p class="ml-6 mb-3">
              I implemented a two-way sync function for Accounts and Contacts
              data. I set up webhooks for Zoho CRM to notify the app of any
              changes in the CRM.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Integrate job
              scheduling with Quickbooks Time
            </h3>
            <p class="ml-6 mb-3">
              I implemented queued jobs to periodically sync data from app to
              Quickbooks Time.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Built a RESTful
              API for the app to allow external integrations
            </h3>
            <p class="ml-6 mb-3"></p>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl mb-2">Reflection.</h2>
            <p>
              I enjoyed the challenge of working with the APIs - building the
              app's API, integrating with Zoho CRM and Quickbooks Time, and
              setting up webhooks for Zapier and GetStream.io.
            </p>
          </div>
        </div>
        <Pagination
          :prev="{
            title: 'Tritium',
            link: '/showcase/tritium',
          }"
          :next="{
            title: 'Assess Your Risk',
            link: '/showcase/ayr',
          }"
        />
      </template>
    </NuxtLayout>
  </div>
</template>
