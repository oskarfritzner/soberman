<template>
    <ion-card class="swiper-slide-content">
      <ion-card-header>
        <ion-card-title class="stat-title">Money Saved</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p class="stat-number"><MoneySaved /></p>
      </ion-card-content>
    </ion-card>
  </template>
  
  <script>
  import MoneySaved from "@/data/MoneySaved.vue";
  import "./userstatStyle.css";
  
  export default {
    components: {
      MoneySaved,
    },
  };
  </script>
  
  <style scoped>
  </style>