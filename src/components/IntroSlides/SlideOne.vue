<template>
  <div class="slide-container">
    <ion-card>
      <ion-card-content>
        <img id="intro-soberman-img" src="/public/images/soberman-new.png" alt="Soberman" />
        <RegisterView @registered="moveToNextSlide" />
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script lang="ts">
import "./SlideStyle.css";
import { defineComponent } from "vue";
import { IonCard, IonCardContent } from "@ionic/vue";
import RegisterView from "@/auth/RegisterView.vue";
import { useSwiper } from "swiper/vue"; // Import useSwiper to control Swiper instance

export default defineComponent({
  name: "SlideOne",
  components: {
    IonCard,
    IonCardContent,
    RegisterView,
  },
  setup() {
    const swiper = useSwiper(); // Get Swiper instance

    const moveToNextSlide = () => {
      if (swiper.value) {
        swiper.value.slideTo(1); // Move to the next slide (SlideTwo, index 1)
      } else {
        console.error("Swiper instance not found");
      }
    };

    return {
      moveToNextSlide,
    };
  },
});
</script>