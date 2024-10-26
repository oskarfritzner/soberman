<template>
  <ion-page>
    <ion-content>
      <swiper :allowTouchMove="false" ref="swiperRef">
        <swiper-slide>
          <SlideOne />
        </swiper-slide>
        <swiper-slide>
          <SlideTwo />
        </swiper-slide>
        <swiper-slide>
          <SlideThree />
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";
import SlideOne from "./SlideOne.vue";
import SlideTwo from "./SlideTwo.vue";
import SlideThree from "./SlideThree.vue";

export default defineComponent({
  name: "IntroView",
  components: {
    IonPage,
    IonContent,
    Swiper,
    SwiperSlide,
    SlideOne,
    SlideTwo,
    SlideThree,
  },
  setup() {
    const swiperRef = ref(null);

    // Method to navigate to the next slide programmatically
    const goToNextSlide = () => {
      if (swiperRef.value) {
        swiperRef.value.swiper.slideNext();
      }
    };

    return {
      swiperRef,
      goToNextSlide,
    };
  },
});
</script>

<style scoped>
.swiper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide {
  height: 95vh;
  margin: auto;
}
</style>
