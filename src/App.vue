<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main class="">
    <img class="object-top object-contain absolute top-0 w-[960px] max-h-[1176px] z-[-10]" src="@/assets/Maskgroup.png" />
    <div class="hidden md:flex flex-col justify-center items-start absolute  md:top-1/12 translate-y-20 w-full h-[100px] md:translate-x-10 md:translate-y-50 md:gap-8">
      <p class="text-xl md:text-3xl text-[#507061] font-bold w-full text-center md:text-left ">ยินดีต้อนรับ</p>
      <p class="text-2xl md:text-5xl text-[#507061] font-bold w-full text-center md:text-left ">“อารียานวดเพื่อสุขภาพ”</p>
    </div>
    <Header />
    <div class="flex flex-col">
      <div class="w-full md:h-[60vh]" id="home">
        <div class="hidden md:flex justify-center items-center absolute top-0 right-0 w-[960px] h-[1176px]">
          <img class="object-top object-contain w-[1122px] h-[1031px] absolute top-1/12" src="@/assets/031.png" />
          <img class="object-top object-contain w-[676px] h-[666px] absolute top-1/3 left-1/10" src="@/assets/061.png" />
          <img class="object-top object-contain w-[398px] h-[488px] absolute top-1/4" src="@/assets/images/494017383_122125163732793414_260924255398752215_n.jpg" />
          <img class="object-top object-contain w-[272px] h-[218px] absolute bottom-1/5 right-1/6" src="@/assets/Group.png" />
        </div>
        <div class="flex md:hidden justify-center items-center w-full absolute top-1/12 z-[-10]">
          <img class="object-top object-contain absolute w-[376px] h-[366px] top-1/2 -translate-x-5 translate-y-1" src="@/assets/031.png" />
          <img class="object-top object-contain w-[276px] h-[366px] absolute top-1/2 -translate-x-4 translate-y-20" src="@/assets/061.png" />
          <img class="object-center object-contain w-[150px] h-[288px] absolute top-1/2" src="@/assets/images/494017383_122125163732793414_260924255398752215_n.jpg" />
          <img class="object-top object-contain w-[172px] h-[118px] absolute top-1/2 translate-x-25 translate-y-60" src="@/assets/Group.png" />
        </div>
      </div>
      <div class="md:hidden flex w-full flex-col justify-center items-center text-center mt-[60vh]">
        <p class="text-xl md:text-3xl text-[#507061] font-bold w-full text-center md:text-left ">ยินดีต้อนรับ</p>
        <p class="text-2xl md:text-5xl text-[#507061] font-bold w-full text-center md:text-left ">“อารียานวดเพื่อสุขภาพ”</p>
      </div>
      <div class="w-full flex justify-center items-center text-center mt-[10vh] md:mt-[80vh]">
        <p class="text-black text-3xl md:text-[40px] font-medium ">
          “ให้ร่างกายได้รับการผ่อนคลาย ด้วยการบริการของเรา”
        </p>
      </div>
      <div class="w-full flex flex-col md:flex-row justify-around items-center mt-[100px] gap-8" id="about">
        <div class="hidden md:block relative">
          <img class="object-center object-contain absolute top-0 right-0 translate-x-10 translate-y-30" src="@/assets/Group3.png" />
          <img class="object-center object-contain" src="@/assets/Group2.png" />
          <img class="object-center object-contain absolute top-0 -translate-x-60 -translate-y-30 -z-5" src="@/assets/041.png" />
          <img class="object-center object-contain absolute top-1/2 right-0 translate-x-30 translate-y-30" src="@/assets/Vector-1.png" />
        </div>
        <div class="block md:hidden relative">
          <img class="object-center object-contain w-[128px] h-[230px] absolute top-0 right-0 translate-x-5 translate-y-5" src="@/assets/Group3.png" />
          <img class="object-center object-contain w-[285px] h-[342px]" src="@/assets/Group2.png" />
          <img class="object-center object-contain w-[172px] h-[201px] absolute top-0 -translate-x-15 -translate-y-5 -z-5" src="@/assets/041.png" />
          <img class="object-center object-contain w-[130px] h-[145px] absolute top-1/2 right-0 translate-x-10 translate-y-15" src="@/assets/Vector-1.png" />
        </div>
        <div class="w-full md:w-[478px] md:h-[436px] flex flex-col justify-center items-center md:justify-start md:items-start px-4">
          <div class="text-center md:text-left flex flex-col gap-10">
            <p class="text-sm text-black md:text-base font-medium">เกี่ยวกับเรา</p>
            <p class="text-sm text-black md:text-[40px] font-medium w-full md:w-[452px]">
              ร่างกายที่แข็งแรงเปรียบเสมือนห้องรับแขกของจิตวิญญาณ
            </p>
            <p class="text-sm text-black md:text-base">
              “Go On – Treat Yourself”
            </p>
            <p class="text-sm text-black md:text-base w-full md:w-[478px] md:h-[113px]">
              Nunc quis eleifend lectus. Donec id semper ligula, ut laoreet orci.
              Donec tempor vestibulum quam non gravida. Sed eleifend, erat at
              pulvinar hendrerit, diam dui dignissim diam, non congue nibh sem
              eget sapien.
            </p>
          </div>
          <button class="mt-[20px] w-[174px] h-[50px] bg-[#507061] p-4 rounded-full text-white flex justify-center items-center uppercase">
            อ่านต่อ
          </button>
        </div>
      </div>
      <div class="w-full grid grid-cols-2 md:grid-cols-4 mt-[100px] gap-8 md:px-60">
        <div class="flex flex-col justify-center items-center">
          <img class="object-center object-contain" src="@/assets/Group7.png" />
          <p class="text-sm md:text-xl text-black w-[150px] text-center">
            การบำรุงหน้า
          </p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img class="object-center object-contain" src="@/assets/Group6.png" />
          <p class="text-sm md:text-xl text-black w-[150px] text-center">
            นวดดีท็อกซ์
          </p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img class="object-center object-contain" src="@/assets/Group5.png" />
          <p class="text-sm md:text-xl text-black w-[150px] text-center">
            นวดเท้า
          </p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img class="object-center object-contain" src="@/assets/Group4.png" />
          <p class="text-sm md:text-xl text-black w-[150px] text-center">
            เทียนหอมผ่อนคลาย
          </p>
        </div>
      </div>
      <div class="flex justify-end items-end" id="services">
        <div class="w-[1578px]">
          <div class="w-full flex flex-col md:flex-row justify-center md:justify-end items-center mt-[100px] gap-2 px-4">
            <div class="w-full md:w-[478px] md:h-[436px] flex flex-col justify-center items-center md:justify-start md:items-start">
              <div class="text-center md:text-left flex flex-col gap-10">
                <p class="text-sm text-black md:text-base font-medium">
                  บริการของเรา
                </p>
                <p class="text-sm text-black md:text-[40px] font-medium w-full md:w-[452px]">
                  หายใจเข้าลึกๆ และเพลิดเพลินกับชีวิต
                </p>
                <p class="text-sm text-black md:text-base md:w-[413px] w-full">
                  Nunc quis eleifend lectus. Donec id semper ligula, ut laoreet orci.
                  Donec tempor vestibulum quam non gravida.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3  w-full h-fit justify-center items-center gap-4">
              <div class="w-full flex justify-center items-center">
                <div class="bg-[url('@/assets/images/493996793_122125163534793414_1275507593845415596_n.jpg')] bg-contain bg-center bg-no-repeat w-[408px] h-[614px] relative">
                  <div class="flex flex-col absolute bottom-1/5 gap-4 bg-black/20 w-full h-[300px] justify-end px-2">
                    <p class="text-sm md:text-xl text-white font-medium">
                      Salt Massage
                    </p>
                    <div class="flex flex-row justify-between items-center w-full md:w-[300px]">
                      <p class="text-sm md:text-base text-white">60 Minutes</p>
                      <p class="text-sm md:text-base text-white">$115</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full flex justify-center items-center">
                <div class="bg-[url('@/assets/images/493507699_122125189886793414_2660155549089969497_n.jpg')] bg-contain bg-center bg-no-repeat w-[408px] h-[614px] relative">
                  <div class="flex flex-col absolute bottom-1/8 gap-4 bg-black/20 w-full h-[300px] justify-end px-2">
                    <p class="text-sm md:text-xl text-white font-medium">Body Care</p>
                    <div class="flex flex-row justify-between items-center w-full md:w-[300px]">
                      <p class="text-sm md:text-base text-white">60 Minutes</p>
                      <p class="text-sm md:text-base text-white">$109</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full flex justify-center items-center">
                <div class="bg-[url('@/assets/images/493224684_122125163630793414_6184180245842722805_n.jpg')] bg-contain bg-center bg-no-repeat w-[408px] h-[614px] relative">
                  <div class="flex flex-col absolute bottom-1/5 gap-4 bg-black/20 w-full h-[300px] justify-end px-2">
                    <p class="text-sm md:text-xl text-white font-medium">
                      Face Treatments
                    </p>
                    <div class="flex flex-row justify-between items-center w-full md:w-[300px]">
                      <p class="text-sm md:text-base text-white">60 Minutes</p>
                      <p class="text-sm md:text-base text-white">$89</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col md:flex-row justify-center items-center mt-[100px] px-4">
        <div
          class="flex flex-col md:flex-row justify-between items-center bg-[url('@/assets/Maskgroup02.png')] bg-cover md:bg-contain bg-no-repeat w-full md:h-[1165px] relative gap-6 p-4">
          <div class="w-full  md:w-[653px] flex flex-col justify-center items-center md:items-start md:gap-10 md:absolute top-15 md:top-1/3 md:left-1/10">
            <p class="text-lg md:text-[64px] font-medium text-[#507061] w-full md:w-[653px] md:h-[200px] uppercase text-center md:text-left">
              สัมผัสร่างกาย รักษาจิตใจ สงบจิตใจ
            </p>
            <button class="mt-[20px] w-[174px] h-[50px] bg-[#507061] p-4 rounded-full text-white flex justify-center items-center uppercase">
              อ่านต่อ
            </button>
          </div>
          <div class="w-full h-full flex flex-col justify-center items-center gap-10">
            <div class="w-full flex flex-col md:flex-row justify-between items-center gap-4">
              <img class="object-center object-contain w-full md:w-[335px] md:h-[223px] md:absolute md:top-1/10 md:left-1/3"
                src="@/assets/images/481791325_122101482446793414_8256224860770094560_n.jpg" />
              <img class="object-center object-contain w-full md:w-[198px] md:h-[285px] md:absolute md:top-1/10 md:right-1/10"
                src="@/assets/images/481447202_122101493180793414_2479177874342966869_n.jpg" />
            </div>
            <div class="w-full flex flex-row justify-center items-center">
              <img class="object-center object-contain w-full md:w-[444px] md:h-[302px] md:absolute md:left-1/2 md:top-1/3"
                src="@/assets/images/481789040_122101493378793414_2907968233866019025_n.jpg" />
            </div>
            <div class="w-full flex flex-col md:flex-row justify-between items-center gap-4">
              <img class="object-center object-contain w-full md:w-[227px] md:h-[327px] md:absolute md:bottom-1/10 md:left-1/3"
                src="@/assets/images/493946345_122125163702793414_556340073653320561_n.jpg" />
              <img class="object-center object-contain w-full md:w-[332px] md:h-[239px] md:absolute md:bottom-1/10 md:right-1/10"
                src="@/assets/images/493996793_122125163534793414_1275507593845415596_n.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center items-center mt-[100px] px-4">
        <div class="flex flex-col justify-start items-center bg-[url('@/assets/06.png')] bg-contain md:bg-contain bg-no-repeat w-full md:h-[1930px] relative gap-6 p-4">
          <div class="text-center">
            <p class="text-sm md:text-base font-medium text-[#515151]">ห้องพักของเรา</p>
            <p class="text-lg md:text-[40px] font-medium text-[#507061]">ผ่อนคลาย สดชื่น ชาร์จพลัง</p>
          </div>
          <div class="flex flex-col justify-center items-center md:gap-20">
            <div class="w-full grid grid-cols-1 md:grid-cols-3  md:gap-10">
              <div class="w-full flex flex-col justify-center items-center md:w-[442px] md:h-[529px] md:translate-y-50 gap-4">
                <img class="object-center object-contain w-full" src="@/assets/images/480796322_122111416766793414_2419024382981866341_n.jpg" />
                <div class="w-full flex flex-row justify-between items-center">
                  <p class="text-sm md:text-[20px] text-[#507061] font-medium ">นวดไทย</p>
                  <p class="text-sm md:text-[20px] text-[#507061] font-medium">Book</p>
                </div>
              </div>
              <div class="flex flex-col justify-center items-center md:w-[442px] md:h-[529px] md:translate-y-20 gap-4">
                <img class="object-center object-contain w-full" src="@/assets/images/484053449_122111411444793414_5871698132884027272_n.jpg" />
                <div class="w-full flex flex-row justify-between items-center">
                  <p class="text-sm md:text-[20px] text-[#507061] font-medium ">นวดคอ บ่า ไหล่</p>
                  <p class="text-sm md:text-[20px] text-[#507061] font-medium">Book</p>
                </div>
              </div>
              <div class="flex flex-col justify-center items-center md:w-[442px] md:h-[529px] md:translate-y-50 gap-4">
                <img class="object-center object-contain w-full" src="@/assets/images/480779584_122111416574793414_501253598656519133_n.jpg" />
                <div class="w-full flex flex-row justify-between items-center">
                  <p class="text-sm md:text-[20px] text-[#507061] font-medium ">นวดประคบ</p>
                  <p class="text-sm md:text-[20px] text-[#507061] font-medium">Book</p>
                </div>
              </div>
            </div>
            <div class="w-full grid grid-cols-1 md:grid-cols-3 md:gap-20 md:-translate-y-40">
              <div class="w-full flex flex-col justify-center items-center md:w-[442px] md:h-[529px] md:translate-y-50 gap-4">
                <img class="object-center object-contain w-full" src="@/assets/images/482984976_122111411474793414_8769729333991868634_n.jpg" />
                <div class="w-full flex flex-row justify-between items-center">
                  <p class="text-sm md:text-[20px] text-[#507061] font-medium ">นวดเท้า</p>
                  <p class="text-sm md:text-[20px] text-[#507061] font-medium">Book</p>
                </div>
              </div>
              <div class="flex flex-col justify-center items-center md:w-[442px] md:h-[529px] md:translate-y-20 gap-4">
                <img class="object-center object-contain w-full " src="@/assets/images/484974185_122111411540793414_1065025643243086216_n.jpg" />
                <div class="w-full flex flex-row justify-between items-center">
                  <p class="text-sm md:text-[20px] text-[#507061] font-medium ">นวดไทยรีดเส้น</p>
                  <p class="text-sm md:text-[20px] text-[#507061] font-medium">Book</p>
                </div>
              </div>
              <div class="flex flex-col justify-center items-center md:w-[442px] md:h-[529px] md:translate-y-50 gap-4">
                <img class="object-center object-contain w-full " src="@/assets/images/484091777_122111416670793414_5097495138059680757_n.jpg" />
                <div class="w-full flex flex-row justify-between items-center">
                  <p class="text-sm md:text-[20px] text-[#507061] font-medium ">นวดน้ำมัน</p>
                  <p class="text-sm md:text-[20px] text-[#507061] font-medium">Book</p>
                </div>
              </div>
            </div>
            <div class="w-full grid grid-cols-1 md:grid-cols-3 md:gap-20 md:-translate-y-80">
              <div class="w-full flex flex-col justify-center items-center md:w-[442px] md:h-[529px] md:translate-y-50 gap-4">
                <img class="object-center object-contain w-full" src="@/assets/images/484179223_122111416688793414_8312173348727573003_n.jpg" />
                <div class="w-full flex flex-row justify-between items-center">
                  <p class="text-sm md:text-[20px] text-[#507061] font-medium ">นวดอโรมา</p>
                  <p class="text-sm md:text-[20px] text-[#507061] font-medium">Book</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center items-center mt-[120px] px-4 relative" id="events">
        <div class="w-[1578px] flex flex-col justify-between items-start gap-4">
          <p class="w-full text-sm md:text-base text-[#515151] text-center md:text-left">โอกาสของเรา</p>
          <div class="w-full flex flex-col md:flex-row justify-between items-center">
            <p class="text-lg md:text-[40px] font-medium text-[#507061]">สำรวจกิจกรรมที่จะเกิดขึ้นของเรา</p>
            <button class="mt-[20px] w-[174px] h-[50px] bg-[#507061] p-4 rounded-full text-white flex justify-center items-center uppercase">
              อ่านต่อ
            </button>
          </div>
          <div class="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-20">
            <div class="w-full flex flex-col justify-start items-start gap-4 text-center md:text-left">
              <p class="w-full text-sm md:text-base text-[#515151]">Apr 10, 2023</p>
              <p class="w-full text-lg md:text-2xl text-[#507061] font-medium">เครียดน้อยลง บำรุงผิวหน้ามากขึ้น</p>
              <p class="w-full text-sm md:text-base text-[#272727] md:w-[312px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisi nec lectus interdum
                porttitor. </p>
            </div>
            <div class="hidden md:block border-r border-[#A3A799]  md:h-[184px]"></div>
            <div class="block md:hidden border-b border-[#A3A799] w-full"></div>
            <div class="w-full flex flex-col justify-start items-start gap-4 text-center md:text-left">
              <p class="w-full text-sm md:text-base text-[#515151]">Apr 10, 2023</p>
              <p class="w-full text-lg md:text-2xl text-[#507061] font-medium">หลีกหนีจากชีวิตประจำวัน</p>
              <p class="w-full text-sm md:text-base text-[#272727] md:w-[312px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisi nec lectus interdum
                porttitor. </p>
            </div>
            <div class="hidden md:block border-r border-[#A3A799]  md:h-[184px]"></div>
            <div class="block md:hidden border-b border-[#A3A799] w-full"></div>
            <div class="w-full flex flex-col justify-start items-start gap-4 text-center md:text-left">
              <p class="w-full text-sm md:text-base text-[#515151]">Apr 10, 2023</p>
              <p class="w-full text-lg md:text-2xl text-[#507061] font-medium">สงบสติอารมณ์และสปา</p>
              <p class="w-full text-sm md:text-base text-[#272727] md:w-[312px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisi nec lectus interdum
                porttitor. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
