<template>
  <ion-card>
    <ion-card-content>
      <h2>Congratulations on your sobriety journey!</h2>
      <router-link to="/">
        <ion-button>Go to Home</ion-button>
      </router-link>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonCard, IonCardContent, IonButton } from "@ionic/vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "SlideThree",
  components: {
    IonCard,
    IonCardContent,
    IonButton,
    RouterLink,
  },
});
</script>