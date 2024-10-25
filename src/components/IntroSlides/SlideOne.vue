<template>
  <ion-card>
    <ion-card-content>
      <img src="/public/images/soberman-blond.png" alt="Soberman" />
      <RegisterView />
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonCard, IonCardContent } from "@ionic/vue";
import RegisterView from "@/auth/RegisterView.vue";

export default defineComponent({
  name: "SlideOne",
  components: {
    IonCard,
    IonCardContent,
    RegisterView,
  },
});
</script>