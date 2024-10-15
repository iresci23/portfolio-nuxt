<template>
  <div>
    <NuxtLayout name="portfolio">
      <template #title>
        <div class="flex gap-2">
          <CommonIconTech :tech="['vue', 'laravel', 'bootstrap']" />
        </div>
        <h1 class="text-6xl xl:text-7xl tracking-wide">Assess Your Risk</h1>
      </template>

      <template #role>
        <p class="mb-2"><strong>Role:</strong> Full-stack Developer</p>
        <p class="mb-2">
          Libraries / Frameworks used: Laravel, VueJS, Bootstrap
        </p>
      </template>

      <template #interface>
        <div class="relative border-8 rounded-md border-slate-300">
          <img
            src="/images/ayr-result-sample.png"
            alt="assess-your-risk"
            class="w-full max-h-[300px] md:max-h-[500px]"
          />

          <img
            src="/images/ayr_mobile.png"
            alt="assess-your-risk"
            class="max-w-[50%] absolute -bottom-16 right-2 border-8 rounded-xl border-slate-700"
          />
        </div>
      </template>

      <template #content>
        <div class="max-w-[85vw] mx-auto">
          <div class="mb-8 mt-16">
            <h2 class="text-3xl tracking-wide mb-1">Context.</h2>
            <p class="mb-2">
              Assess Your Risk is a free online tool designed to help users
              assess their breast & ovarian cancer risk based on family health
              history, lifestyle factors, and genetics. It provides personalized
              recommendations to manage risk and offers prevention strategies.
            </p>
            <p>
              To get more information about this project, please visit
              <NuxtLink
                to="https://www.brightpink.org/resources"
                class="text-orange-400"
                target="_new"
                rel="noreferrer"
                >www.brightpink.org</NuxtLink
              >
            </p>
          </div>
          <div class="mb-8">
            <h2 class="text-3xl mb-1">Development work.</h2>
            <p class="mb-2">
              The task was to update the tool with a new UI and revise the
              quiz's result algorithm to incorporate new questions. I focused on
              backend development but also contributed to frontend work.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Implemented the
              new algorithm for the quiz's result calculation
            </h3>
            <p class="ml-6 mb-3">
              I implemented the new algorithm for the quiz's result calculation
              based on a logic diagram provided by the client. The algorithm
              calculates the user's risk score based on the answers and provides
              personalized recommendations.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Download the
              result as PDF
            </h3>
            <p class="ml-6 mb-3">
              I utilized jsPDF to generate dynamic PDF of the user's result.
              Once the quiz is completed, the PDF report is automatically
              created and attached to an email, which is then sent to the user
              for their reference and future use.
            </p>
            <h3 class="font-semibold">
              <span class="mx-2 text-orange-400">&#8250;</span>Implemented
              mobile responsive design
            </h3>
            <p class="ml-6 mb-3">
              I helped with front-end work to implement a mobile responsive
              design for the quiz and the results page.
            </p>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl mb-4">Design.</h2>
            <div class="shadow mb-6">
              <video width="100%" height="auto" controls>
                <source src="/images/ayr_recording.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl tracking-wide mb-1">Reflection.</h2>
            <p>
              This project provided a great opportunity to sharpen my skills in
              both backend and frontend development. A major challenge was
              implementing the logic for the quiz's risk calculation, where
              ensuring accurate and reliable results was critical. It required a
              solid grasp of the project's requirements and close attention to
              detail when coding the algorithm.
            </p>
          </div>
        </div>

        <Pagination
          :prev="{
            title: 'MGS Tool',
            link: '/showcase/mgs',
          }"
          :next="{
            title: 'Brixbid',
            link: '/showcase/brixbid',
          }"
        />
      </template>
    </NuxtLayout>
  </div>
</template>
