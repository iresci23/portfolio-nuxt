<template>
  <div>
    <NuxtLayout name="portfolio">
      <template #title>
        <div class="flex gap-2">
          <CommonIconTech :tech="['wordpress', 'elementor', 'woocommerce']" />
        </div>
        <h1 class="text-6xl xl:text-8xl tracking-wide">Secor Online</h1>
      </template>

      <template #role>
        <p class="mb-2"><strong>Role:</strong> Wordpress Developer</p>
        <p class="mb-2">
          Libraries / Frameworks used: Wordpress, Elementor, WooCommerce
        </p>
      </template>

      <template #interface>
        <div class="relative border-8 rounded-md border-slate-300">
          <img
            src="/images/secoronline.png"
            alt="secoronline-design"
            class="w-full max-h-[300px] md:max-h-[500px]"
          />
          <img
            src="/images/secor-mobile.png"
            alt="secoronline-design-mobile"
            class="max-w-[40%] absolute -bottom-16 right-2 border-8 rounded-xl border-slate-700"
          />
        </div>
      </template>

      <template #content>
        <div class="max-w-[85vw] mx-auto">
          <div class="mb-8 mt-16">
            <h2 class="text-3xl tracking-wide mb-1">Context.</h2>
            <p class="mb-2">
              Secor Online is an eCommerce website that offers a wide range of
              high-quality industrial supplies, safety equipment, and
              maintenance tools.
            </p>
            <p>
              To get more information about this project, please visit
              <NuxtLink
                to="https://secoronline.com/"
                class="text-orange-400"
                target="_new"
                rel="noreferrer"
                >www.secoronline.com</NuxtLink
              >
            </p>
          </div>
          <div class="mb-8">
            <h2 class="text-3xl tracking-wide mb-1">Development work.</h2>
            <p class="mb-2"></p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Website
              maintenance
            </h3>
            <p class="ml-6 mb-3">
              Keeping WordPress core, themes, and plugins updated to the latest
              versions to enhance security and functionality. Performing regular
              database backups and monitoring website performance.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Diagnose and fix
              compatibility issues with WooCommerce
            </h3>
            <p class="ml-6 mb-3">
              Resolved compatibility issues with WooCommerce updates as they
              arose, ensuring a smooth shopping experience for customers.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Created elementor
              templates and pages
            </h3>
            <p class="ml-6 mb-3">
              Developed custom Elementor templates and pages to create a
              consistent design across the website.
            </p>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl tracking-wide mb-1">Reflection.</h2>
            <p>
              I've worked on several eCommerce websites, and each time presents
              unique challenges, whether it's figuring out how to display
              products or how to structure the product variations. There are
              always new ways to implement features with WooCommerce, just like
              with Secor Online, making it a constant learning experience.
            </p>
          </div>
        </div>
        <Pagination
          :prev="{
            title: 'VRTality',
            link: '/showcase/vrtality',
          }"
          :next="{
            title: 'HDP User Group',
            link: '/showcase/hdpusergroup',
          }"
        />
      </template>
    </NuxtLayout>
  </div>
</template>
