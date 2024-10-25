<template>
  <ion-page>
    <ion-content>
      <swiper>
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
import { defineComponent } from "vue";
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