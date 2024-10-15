<template>
  <div>
    <div>
      <header>
        <Header />
      </header>
    </div>
    <main>
      <div class="relative max-w-6xl mx-auto mt-32">
        <slot />
        <span class="flex items-end justify-end">
          <CommonIconCoffee />
        </span>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
