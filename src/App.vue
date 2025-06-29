<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <main>
    <img
      class="object-top object-contain absolute top-0 w-[960px] max-h-[1176px] z-[-10]"
      src="@/assets/Maskgroup.png"
    />
    <Header />
    <div class="w-full md:h-[60vh]">
      <div
        class="hidden md:flex justify-center items-center absolute top-0 right-1/10 w-[960px] h-[1176px]"
      >
        <img
          class="object-top object-contain w-[1122px] h-[1031px] absolute top-1/12"
          src="@/assets/031.png"
        />
        <img
          class="object-top object-contain w-[676px] h-[666px] absolute top-1/3 left-1/10"
          src="@/assets/061.png"
        />
        <img
          class="object-top object-contain w-[398px] h-[488px] absolute top-1/4"
          src="@/assets/Maskgroup-1.png"
        />
        <img
          class="object-top object-contain w-[272px] h-[218px] absolute bottom-1/5 right-1/6"
          src="@/assets/Group.png"
        />
      </div>
      <div
        class="flex md:hidden justify-center items-center w-full absolute top-1/12 z-[-10]"
      >
        <img
          class="object-top object-contain absolute w-[376px] h-[366px] top-1/2 -translate-x-5 translate-y-1"
          src="@/assets/031.png"
        />
        <img
          class="object-top object-contain w-[276px] h-[366px] absolute top-1/2 -translate-x-4 translate-y-20"
          src="@/assets/061.png"
        />
        <img
          class="object-center object-contain w-[150px] h-[288px] absolute top-1/2"
          src="@/assets/Maskgroup-1.png"
        />
        <img
          class="object-top object-contain w-[172px] h-[118px] absolute top-1/2 translate-x-25 translate-y-60"
          src="@/assets/Group.png"
        />
      </div>
    </div>
    <div class="w-full flex justify-center items-center text-center">
      <p class="text-black text-3xl md:text-[40px] font-medium">
        “Give Your Body A Little Love, It Deserves It”
      </p>
    </div>
    <div
      class="w-full flex flex-col md:flex-row justify-around items-center mt-[100px] gap-8"
    >
      <div class="hidden md:block relative">
        <img
          class="object-center object-contain absolute top-0 right-0 translate-x-10 translate-y-30"
          src="@/assets/Group3.png"
        />
        <img class="object-center object-contain" src="@/assets/Group2.png" />
        <img
          class="object-center object-contain absolute top-0 -translate-x-60 -translate-y-30 -z-5"
          src="@/assets/041.png"
        />
        <img
          class="object-center object-contain absolute top-1/2 right-0 translate-x-30 translate-y-30"
          src="@/assets/Vector-1.png"
        />
      </div>
      <div class="block md:hidden relative">
        <img
          class="object-center object-contain w-[128px] h-[230px] absolute top-0 right-0 translate-x-5 translate-y-5"
          src="@/assets/Group3.png"
        />
        <img
          class="object-center object-contain w-[285px] h-[342px]"
          src="@/assets/Group2.png"
        />
        <img
          class="object-center object-contain w-[172px] h-[201px] absolute top-0 -translate-x-15 -translate-y-5 -z-5"
          src="@/assets/041.png"
        />
        <img
          class="object-center object-contain w-[130px] h-[145px] absolute top-1/2 right-0 translate-x-10 translate-y-15"
          src="@/assets/Vector-1.png"
        />
      </div>
      <div
        class="w-full md:w-[478px] md:h-[436px] flex flex-col justify-center items-center md:justify-start md:items-start px-4"
      >
        <div class="text-center md:text-left flex flex-col gap-10">
          <p class="text-sm text-black md:text-base font-medium">About us</p>
          <p
            class="text-sm text-black md:text-[40px] font-medium w-full md:w-[452px]"
          >
            A Healthy Body Is A Guest-Chamber For The Soul
          </p>
          <p class="text-sm text-black md:text-base">
            “Go On – Treat Yourself”
          </p>
          <p
            class="text-sm text-black md:text-base w-full md:w-[478px] md:h-[113px]"
          >
            Nunc quis eleifend lectus. Donec id semper ligula, ut laoreet orci.
            Donec tempor vestibulum quam non gravida. Sed eleifend, erat at
            pulvinar hendrerit, diam dui dignissim diam, non congue nibh sem
            eget sapien.
          </p>
        </div>
        <button
          class="mt-[20px] w-[174px] h-[50px] bg-[#507061] p-4 rounded-full text-white flex justify-center items-center"
        >
          view more
        </button>
      </div>
    </div>
    <div
      class="w-full grid grid-cols-2 md:grid-cols-4 mt-[100px] gap-8 md:px-60"
    >
      <div class="flex flex-col justify-center items-center">
        <img class="object-center object-contain" src="@/assets/Group7.png" />
        <p class="text-sm md:text-xl text-black w-[150px] text-center">
          Face Treatments
        </p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <img class="object-center object-contain" src="@/assets/Group6.png" />
        <p class="text-sm md:text-xl text-black w-[150px] text-center">
          detox massage
        </p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <img class="object-center object-contain" src="@/assets/Group5.png" />
        <p class="text-sm md:text-xl text-black w-[150px] text-center">
          Foot <br />
          massage
        </p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <img class="object-center object-contain" src="@/assets/Group4.png" />
        <p class="text-sm md:text-xl text-black w-[150px] text-center">
          Candle relaxing
        </p>
      </div>
    </div>
    <div
      class="w-full flex flex-col md:flex-row justify-center md:justify-end items-center mt-[100px] px-4"
    >
      <div
        class="w-full md:w-[478px] md:h-[436px] flex flex-col justify-center items-center md:justify-start md:items-start"
      >
        <div class="text-center md:text-left flex flex-col gap-10">
          <p class="text-sm text-black md:text-base font-medium">
            Our Services
          </p>
          <p
            class="text-sm text-black md:text-[40px] font-medium w-full md:w-[452px]"
          >
            Take A Deep Breath And Just Enjoy Life
          </p>
          <p class="text-sm text-black md:text-base md:w-[413px] w-full">
            Nunc quis eleifend lectus. Donec id semper ligula, ut laoreet orci.
            Donec tempor vestibulum quam non gravida.
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full justify-center items-center"
      >
        <div class="w-full flex justify-center items-center">
          <div
            class="bg-[url('@/assets/relaxed-1.png')] bg-contain bg-center bg-no-repeat w-[408px] h-[614px] relative p-4"
          >
            <div
              class="flex flex-col absolute bottom-1/10 gap-4 bg-black/20 h-[300px] justify-end"
            >
              <p class="text-sm md:text-xl text-white font-medium">
                Salt Massage
              </p>
              <div class="flex flex-row justify-between items-center w-[350px]">
                <p class="text-sm md:text-base text-white">60 Minutes</p>
                <p class="text-sm md:text-base text-white">$115</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center items-center">
          <div
            class="bg-[url('@/assets/raphael-lovaski-Pe9IXUuC6QU-unsplash1.png')] bg-contain bg-center bg-no-repeat w-[408px] h-[614px] relative p-4"
          >
            <div
              class="flex flex-col absolute bottom-1/10 gap-4 bg-black/20 h-[300px] justify-end"
            >
              <p class="text-sm md:text-xl text-white font-medium">Body Care</p>
              <div class="flex flex-row justify-between items-center w-[350px]">
                <p class="text-sm md:text-base text-white">60 Minutes</p>
                <p class="text-sm md:text-base text-white">$109</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center items-center">
          <div
            class="bg-[url('@/assets/diana-light-pBBxMUCgwuU-unsplash1.png')] bg-contain bg-center bg-no-repeat w-[408px] h-[614px] relative p-4"
          >
            <div
              class="flex flex-col absolute bottom-1/10 gap-4 bg-black/20 h-[300px] justify-end"
            >
              <p class="text-sm md:text-xl text-white font-medium">
                Face Treatments
              </p>
              <div class="flex flex-row justify-between items-center w-[350px]">
                <p class="text-sm md:text-base text-white">60 Minutes</p>
                <p class="text-sm md:text-base text-white">$89</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
