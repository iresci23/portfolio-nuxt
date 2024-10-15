<template>
  <div>
    <div>
      <header>
        <Header />
      </header>
    </div>
    <main>
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-8">
          <div class="mt-28 font-roboto xl:col-span-2 animate-fade-in">
            <div class="mt-16 mb-8 px-8 md:px-14 lg:px-20 xl:px-0">
              <slot name="title" />
              <div class="flex flex-col md:flex-row gap-x-12 mt-8">
                <div class="py-8 max-w-[300px]">
                  <div class="mb-2 text-gray-800 text-md leading-2">
                    <slot name="role" />
                  </div>
                </div>
                <div class="self-end">
                  <slot name="interface" />
                </div>
              </div>
            </div>
            <slot name="hero" />
            <slot name="content" />
          </div>
          <div class="hidden lg:block relative">
            <div class="nav-container fixed h-full">
              <div class="mt-16">
                <PortfolioNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped lang="scss">
.nav-container {
  width: 100%;
  padding: 40px 20px;
  background: #00000005;
}
.typewriter div {
  letter-spacing: 0.15em;
  border-right: 0.15em solid orange;
  animation: blink-caret 0.75s step-end 5 normal forwards;
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>
