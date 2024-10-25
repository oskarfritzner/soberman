<template>
  <ion-card>
    <ion-card-content>
      <img src="/public/images/soberman-blond.png" alt="Soberman" />
      <LoginView />
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardContent } from "@ionic/vue";

import LoginView from "../LoginView.vue";
</script>

<style scoped>
ion-card {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 500px;
}

img {
  margin-bottom: 90px;
  max-width: auto;
  border-radius: 30%;
}
</style>
