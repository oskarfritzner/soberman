<template>
    <ion-card class="swiper-slide-content">
      <ion-card-header class="stat-header">
        <ion-card-title class="stat-title">Money Saved</ion-card-title>
      </ion-card-header>
      <ion-card-content class="stat-content">
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
  .stat-header {
    padding: 20 0px;
    margin: 0;
  }
  
  .stat-header .stat-title {
    font-size: 1.2rem;
    font-weight: bold;
    --color: rgba(0, 0, 0, 0.588);
    margin-top: 20px;
  }
  
  .stat-content {
    padding-inline-end: 0;
    margin: 15px 0 0 0;
    height: 350px;
    width: 350px;
    border-radius: 50%;
    background: linear-gradient(115deg, rgb(255, 251, 0), rgba(255, 0, 64, 0.7));
    box-shadow: 0 0 20px 0px black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>