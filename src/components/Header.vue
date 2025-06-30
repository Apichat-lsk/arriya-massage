<script setup>

</script>

<template>
  <div :class="[
    'fixed top-0 left-0 w-full z-50 transition-all duration-500',
    isScrolled ? 'bg-gray-100 shadow-md' : 'bg-transparent'
  ]">
    <div class="px-10 w-full h-[150px]  justify-between items-center hidden md:flex">
      <img class="object-contain w-[320px] h-auto" src="@/assets/arriya-logo-removebg-preview.png" alt="Logo" />
      <div class="flex justify-center items-center gap-10">
        <ul class="list-none flex gap-10">
          <li @click="scrollTo('home')" class="cursor-pointer font-krub">หน้าหลัก</li>
          <li @click="scrollTo('about')" class="cursor-pointer font-krub">เกี่ยวกับเรา</li>
          <li @click="scrollTo('services')" class="cursor-pointer font-krub">บริการ</li>
          <li @click="scrollTo('events')" class="cursor-pointer font-krub">สำรวจกิจกรรมที่่จะเกิดขึ้น</li>
          <li @click="scrollTo('contact')" class="cursor-pointer font-krub">ติดต่อเรา</li>
        </ul>
        <button class="w-[174px] h-[50px] bg-[#507061] p-4 rounded-full text-white flex justify-center items-center">
          จอง
        </button>
      </div>
    </div>
  </div>
  <div :class="menuOpen ? 'bg-white' : 'bg-transparent'">
    <button @click="menuOpen = !menuOpen" class="md:hidden p-3 z-50" :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-500',
      isScrolled ? 'bg-gray-100 shadow-md' : 'bg-transparent'
    ]">
      <svg v-if="!menuOpen" class="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>

      <svg v-else class="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>
  <div v-show="true" class="fixed z-40 flex flex-col justify-start items-center gap-10 p-10 w-full bg-white text-black transition-all duration-200 ease-in-out transform" :class="menuOpen
    ? 'opacity-100 scale-100 pointer-events-auto'
    : 'opacity-0 scale-95 pointer-events-none'
    ">
    <img class="object-center object-contain w-[320px] h-[320px]" src="@/assets/arriya-logo-removebg-preview.png" alt="Logo" />
    <ul class="list-none gap-10 w-full text-center flex flex-col -translate-y-20">
      <li @click="scrollTo('home')" class="cursor-pointer font-krub">หน้าหลัก</li>
      <li @click="scrollTo('about')" class="cursor-pointer font-krub">เกี่ยวกับเรา</li>
      <li @click="scrollTo('services')" class="cursor-pointer font-krub">บริการ</li>
      <li @click="scrollTo('events')" class="cursor-pointer font-krub">สำรวจกิจกรรมที่่จะเกิดขึ้น</li>
      <li @click="scrollTo('contact')" class="cursor-pointer font-krub">ติดต่อเรา</li>
    </ul>
    <button class="w-[174px] h-[50px] bg-[#507061] p-4 rounded-full text-white flex justify-center items-center">
      จอง
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false);
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
