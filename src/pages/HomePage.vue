<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <img src="/public/images/Sober.png" alt="Soberman Logo" class="logo" />
        </ion-title>
        <ion-buttons slot="end">
          <ion-button>Login</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title class="page-title">Welcome to 
            <span><img class="soberman-image" src="/public/images/soberman.png" alt="Soberman"/>
          </span> Soberman</ion-card-title>
        </ion-card-header>
  
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title class="page-title">What do you want to see today?</ion-card-title>
        </ion-card-header>
        <ion-grid :fixed="true">
          <ion-row class=".ion-align-items-stretch">
            <ion-col size="6" size-lg="2">
              <ion-card>
                <img src="/public/images/calendar-image.webp" alt="Calendar" />
                <ion-card-header>
                  <ion-card-title>Your Sober Timeline</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-col>
            <ion-col size="6" size-lg="2">
              <ion-card>
                <img src="/public/images/journal-image.webp" alt="Journal" />
                <ion-card-header>
                  <ion-card-title>Your Sober Journal</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-col>
            <ion-col size="6" size-lg="2">
              <ion-card>
            <img src="/public/images/benefits-image.jpeg" alt="benefits" />
            <ion-card-header>
              <ion-card-title>See your benefits</ion-card-title>
            </ion-card-header>
          </ion-card>
            </ion-col>
            <ion-col size="6" size-lg="2">
              <ion-card>
            <img src="/public/images/benefits-image.jpeg" alt="benefits" />
            <ion-card-header>
              <ion-card-title>See your benefits</ion-card-title>
            </ion-card-header>
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

.soberman-image {
  margin: 0;
  width: 100%;
  height: 300px;
}

.page-title {
  font-size: 24px;
}

ion-toolbar {
  --background: white;
  
}

ion-grid {
  --ion-grid-padding: 12px;
  
}

ion-col {
  margin-top: 10px;
}

ion-col > ion-card {
  margin: 0;
  padding: 0;
  border-radius: 20px;
  height: 100%;
}

ion-card > img {
  width: 100%;
  height: 120px;
}

ion-card > ion-card-header {
  padding: 10px;
  text-align: center;
}

ion-card > ion-card-header > ion-card-title {
  font-size: 16px;
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

@media (min-width: 720px) {
  ion-row {
    margin: 20px;
    justify-content: space-between;
  }
}
</style>
