<template>
  <div>
    <NuxtLayout name="portfolio">
      <template #title>
        <div class="flex gap-2">
          <CommonIconTech :tech="['yii', 'javascript', 'sass']" />
        </div>
        <h1 class="text-6xl xl:text-8xl tracking-wide">Brixbid</h1>
      </template>

      <template #role>
        <p class="mb-2"><strong>Role:</strong> Full-stack Developer</p>
        <p class="mb-2">
          Libraries / Frameworks used: Yii, Javascript, JQuery, Bootstrap, Sass
        </p>
        <p class="mb-2">
          Integrations: TransUnion Smartmove, Docusign, Google Maps,
          Geolocation, Multiple Listing Service (Georgia MLS, RentCafe,
          YouGotListings), Authorize.net
        </p>
      </template>

      <template #interface>
        <div class="relative border-8 rounded-md border-slate-300">
          <img
            src="/images/brixbid-listings.png"
            alt="assess-your-risk"
            class="w-full max-h-[300px] md:max-h-[500px]"
          />
          <img
            src="/images/brixbid-mobile2.png"
            alt="assess-your-risk"
            class="max-w-[44%] absolute -bottom-16 right-2 border-8 rounded-xl border-slate-700"
          />
        </div>
      </template>

      <template #content>
        <div class="max-w-[85vw] mx-auto">
          <div class="mb-8 mt-16">
            <h2 class="text-3xl tracking-wide mb-1">Context.</h2>
            <p class="mb-2">
              Brixbid is an online apartment rental marketplace that provides
              end-to-end functionality, from property listings to lease signing.
              Landlords can set a minimum acceptable rent, and renters have the
              option to place offers based on that price.
            </p>
            <p>
              Note: As of this writing, the app is no longer accessible.
              Although the version for student housing marketplace is still
              available at

              <NuxtLink
                to="https://www.brixbid.com/campus/"
                class="text-orange-400"
                target="_new"
                rel="noreferrer"
                >www.brixbid.com/campus/</NuxtLink
              >
            </p>
          </div>
          <div class="mb-8">
            <h2 class="text-3xl tracking-wide mb-1">Development work.</h2>
            <p class="mb-2"></p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Integrated
              TransUnion Smartmove API for tenant screening and credit
              verifications
            </h3>
            <p class="ml-6 mb-3">
              I fully implemented the API for tenant's credit, eviction and
              criminal history. The integration for Brixbid was officially
              certified with TransUnion integration team.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Upgraded the app
              to make it compatible with latest web standards
            </h3>
            <p class="ml-6 mb-3">
              Updated the app to support PHP 7 and apply the security patches
              for Yii. I also refactored the codebase to remove deprecated code.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Integrated
              Georgia MLS, Yardi RentCafe and YGL property listings API
            </h3>
            <p class="ml-6 mb-3">
              I integrated the APIs to fetch property listings and display them
              on the Brixbid platform. A periodic automatic import/sync was
              setup to ensure the listing details were displayed accurately.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Developed
              dashboard features landlords and renters
            </h3>
            <p class="ml-6 mb-3">
              I developed the dashboards for landlords to manage their listings,
              schedule showings, and view applications and renters to manage
              their applications and lease agreements.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Developed a
              spin-off of the project for the student housing market
            </h3>
            <p class="ml-6 mb-3">
              I developed a separate version of the app for the student housing
              market, with features tailored to the needs of students and
              landlords.
            </p>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl tracking-wide mb-4">Design.</h2>
            <div class="shadow mb-6">
              <video width="100%" height="auto" controls>
                <source src="/images/brixbid-recording.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl tracking-wide mb-1">Reflection.</h2>
            <p>
              Working on Brixbid was a rewarding challenge, particularly with
              the integration of multiple APIs, import of property listings, and
              managing large property datasets while keeping the app running
              smoothly. This taught me a lot about optimizing data handling
              processes and ensuring that the platform remained responsive, even
              with high data loads.
            </p>
          </div>
        </div>

        <Pagination
          :prev="{
            title: 'Assess Your Risk',
            link: '/showcase/ayr',
          }"
          :next="{
            title: 'VRTality',
            link: '/showcase/vrtality',
          }"
        />
      </template>
    </NuxtLayout>
  </div>
</template>
