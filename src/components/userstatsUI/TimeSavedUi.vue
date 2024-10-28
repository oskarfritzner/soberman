<template>
    <ion-card class="swiper-slide-content">
      <ion-card-header>
        <ion-card-title class="stat-title">Time saved</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p class="stat-number"><TimeSaved /></p>
      </ion-card-content>
    </ion-card>
  </template>
  
  <script>
  import TimeSaved from "@/data/TimeSaved.vue";
  import "./userstatStyle.css";
  
  export default {
    components: {
      TimeSaved,
    },
  };
  </script>
  
  <style scoped>
  </style>