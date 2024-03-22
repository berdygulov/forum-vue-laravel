<template>
  <header class="bg-white">
    <div class="container">
      <nav class="flex items-center justify-between py-6">
        <div class="flex">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <router-link to="/" class="text-sm font-bold leading-6 text-gray-900">
            Главная</router-link
          >
          <router-link
            :to="{ name: 'chaptersIndex' }"
            class="text-sm font-bold leading-6 text-gray-900"
          >
            Разделы
          </router-link>
          <router-link
            :to="{ name: 'subjectsIndex' }"
            class="text-sm font-bold leading-6 text-gray-900"
          >
            Темы
          </router-link>
        </div>
      </nav>
    </div>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <router-link
                to="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                >Главная</router-link
              >
              <router-link
                :to="{ name: 'chaptersIndex' }"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                >Разделы
              </router-link>
              <router-link
                :to="{ name: 'subjectsIndex' }"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                >Темы
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
