<script setup></script>

<template>
  <div class="flex justify-center items-center">
    <div
      class="px-30 w-full h-[150px] flex-row justify-between items-center hidden md:flex"
    >
      <img
        class="object-center object-contain"
        src="@/assets/LOGO.png"
        alt="Logo"
      />
      <div class="flex justify-center items-center gap-10">
        <ul class="list-none flex gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Events</li>
          <li>Contact</li>
        </ul>
        <button
          class="w-[174px] h-[50px] bg-[#507061] p-4 rounded-full text-white flex justify-center items-center"
        >
          BOOK
        </button>
      </div>
    </div>
  </div>
  <div :class="menuOpen ? 'bg-white' : 'bg-transparent'">
    <button @click="menuOpen = !menuOpen" class="md:hidden p-3 z-50">
      <svg
        v-if="!menuOpen"
        class="w-8 h-8 text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>

      <svg
        v-else
        class="w-8 h-8 text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  </div>
  <div
    v-show="true"
    class="z-40 flex flex-col justify-start items-center gap-10 p-10 bg-white text-black transition-all duration-200 ease-in-out transform"
    :class="
      menuOpen
        ? 'opacity-100 scale-100 pointer-events-auto'
        : 'opacity-0 scale-95 pointer-events-none'
    "
  >
    <img
      class="object-center object-contain w-28 h-28"
      src="@/assets/LOGO.png"
      alt="Logo"
    />
    <ul class="list-none gap-10 w-full text-center flex flex-col">
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Events</li>
      <li>Contact</li>
    </ul>
    <button
      class="w-[174px] h-[50px] bg-[#507061] p-4 rounded-full text-white flex justify-center items-center"
    >
      BOOK
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
</script>
