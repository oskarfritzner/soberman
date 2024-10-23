<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <img src="#" alt="Soberman Logo" class="logo" />
        </ion-title>
        <ion-buttons slot="end">
          <ion-button>Login</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>What do you want to see today?</ion-card-title>
        </ion-card-header>
        <ion-grid class="hp-nav-btns-section">
          <ion-row>
            <ion-col>
              <ion-card>
                <img src="/public/images/calendar-image.webp" alt="Calendar" />
                <ion-card-header>
                  <ion-card-title>Your Sober Timeline</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  Keeping track of your days sober can be a great motivator by
                  seeing how far you have come.
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card>
                <img src="/public/images/journal-image.webp" alt="Journal" />
                <ion-card-header>
                  <ion-card-title>Your Sober Journal</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  Keeping score of how you feel each day can help you see
                  patterns and triggers that you may not have noticed before.
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-card>
            <img src="/public/images/benefits-image.jpeg" alt="benefits" />
            <ion-card-header>
              <ion-card-title>See your benefits</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              See the benefits of being sober and how it can improve your life.
            </ion-card-content>
          </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonButtons,
} from "@ionic/vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonButtons,
  },
  setup() {
    const activeSection = ref<string | null>(null);

    const showSection = (section: string) => {
      activeSection.value = section;
    };

    return {
      activeSection,
      showSection,
    };
  },
});
</script>

<style scoped>
.logo {
  height: 40px;
  width: auto;
}

#calendar-image {
  background-image: url("/images/calendar-image.webp");
  --background: cover;
}

#journal-button {
  background-image: url("/images/journal-image.webp");
  --background: cover;
}

#benefits-button {
  background-image: url("/images/benefits-image.jpeg");
  --background: cover;
}
</style>
