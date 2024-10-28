<template>
    <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import CurrentSoberStreakUI from "./CurrentStreakUi.vue";
import MoneySavedUI from "@/components/userstatsUI/MoneySavedUi.vue";
import TimeSavedUI from "@/components/userstatsUI/TimeSavedUi.vue";
import BestSoberStreakUI from "@/components/userstatsUI/BestSoberStreakUi.vue";
import "./userstatStyle.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    CurrentSoberStreakUI,
    MoneySavedUI,
    TimeSavedUI,
    BestSoberStreakUI,
  },
};
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
}
</style>