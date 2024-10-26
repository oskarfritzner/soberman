<template>
  <div class="slide-container">
    <ion-card>
      <ion-card-content>
        <h2>Congratulations on your sobriety journey!</h2>
        <ion-button @click="finishIntro">Go to Home</ion-button>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script lang="ts">
import "./SlideStyle.css";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SlideThree",
  setup(_, { emit }) {
    const finishIntro = () => {
      localStorage.setItem("hasVisited", "true");
      emit("finished"); 
      location.reload(); 
    };

    return {
      finishIntro,
    };
  },
});
</script>
