<template>
    <ion-card class="swiper-slide-content">
      <ion-card-header>
        <ion-card-title class="stat-title">Current sober Streak</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p class="stat-number"><CurrentSoberStreak /></p>
      </ion-card-content>
    </ion-card>
  </template>
  
  <script>
  import CurrentSoberStreak from "@/data/CurrentSoberStreak.vue";
  import "./userstatStyle.css";
  
  export default {
    components: {
      CurrentSoberStreak,
    },
  };
  </script>
  
  <style scoped>

  </style>