<template>
  <ion-page>
    <ion-content>
      <div>
        <swiper>
        <template v-for="(slide, index) in slideData" :key="index">
            <swiper-slide>
              <component :is="slide.component"/>
            </swiper-slide>
        </template>
      </swiper>
      </div>
       </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";


import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
} from "@ionic/vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';

import SlideOne from "./SlideOne.vue";
import SlideTwo from "./SlideTwo.vue";
import SlideThree from "./SlideThree.vue";

export default defineComponent({
  name: "IntroView",
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    Swiper,
    SwiperSlide,
    SlideOne,
    SlideTwo,
    SlideThree
  },
  setup() {
    const slideData = ref<any>([
      { component: SlideOne},
      { component: SlideTwo},
      { component: SlideThree }
    ]);

    return {
      slideData,
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
  font-size: 28px;
  color: black;
  height: 95vh;
  margin: auto;
}

</style>
