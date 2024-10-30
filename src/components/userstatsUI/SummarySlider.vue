<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="false"
    :pagination="pagination"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <CurrentSoberStreakUI />
    </swiper-slide>
    <swiper-slide>
      <MoneySavedUI />
    </swiper-slide>
    <swiper-slide>
      <TimeSavedUI />
    </swiper-slide>
    <swiper-slide>
      <BestSoberStreakUI />
    </swiper-slide>
  </swiper>
</template>

<script>

import CurrentSoberStreakUI from "@/components/userstatsUI/CurrentStreakUi.vue";
import MoneySavedUI from "@/components/userstatsUI/MoneySavedUi.vue";
import TimeSavedUI from "@/components/userstatsUI/TimeSavedUi.vue";
import BestSoberStreakUI from "@/components/userstatsUI/BestSoberStreakUi.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
    CurrentSoberStreakUI,
    MoneySavedUI,
    TimeSavedUI,
    BestSoberStreakUI,
  },
  setup() {
    const menu = ['Current Streak', 'Money Saved', 'Time Saved', 'Best Streak'];
    
    return {
      pagination: {
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}">${menu[index]}</span>`;
        },
      },
      modules: [Pagination],
    };
  },
};
</script>

