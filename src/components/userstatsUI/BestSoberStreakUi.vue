<template>
  <ion-card class="swiper-slide-content">
    <ion-card-header>
      <ion-card-title class="stat-title">Best Sober Streak</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p class="stat-number"><BestSoberStreak /></p>
    </ion-card-content>
  </ion-card>
</template>

<script>
import BestSoberStreak from "@/data/BestSoberStreak.vue";
import "./userstatStyle.css";

export default {
  components: {
    BestSoberStreak,
  },
};
</script>

<style scoped>


</style>
