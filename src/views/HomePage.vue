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
          <ion-card-title>Welcome to Soberman</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-button
            class="custom-button"
            @click="showSection('calendar')"
          >
            <span class="button-text">Calendar</span>
          </ion-button>
          <ion-button
            class="custom-button"
            @click="showSection('journal')"
          >
            <span class="button-text">Journal</span>
          </ion-button>
          <ion-button
            class="custom-button"
            @click="showSection('benefits')"
          >
            <span class="button-text">Benefits</span>
          </ion-button>
        </ion-card-content>
      </ion-card>
      <div v-if="activeSection === 'calendar'" class="section-box">
        <h2>Calendar View</h2>
        <!-- Calendar content goes here -->
      </div>
      <div v-if="activeSection === 'journal'" class="section-box">
        <h2>Journal View</h2>
        <!-- Journal content goes here -->
      </div>
      <div v-if="activeSection === 'benefits'" class="section-box">
        <h2>Benefits View</h2>
        <!-- Benefits content goes here -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonButtons } from '@ionic/vue';

export default defineComponent({
  name: 'HomePage',
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
    IonButtons
  },
  setup() {
    const activeSection = ref<string | null>(null);

    const showSection = (section: string) => {
      activeSection.value = section;
    };

    return {
      activeSection,
      showSection
    };
  }
});
</script>

<style scoped>
.logo {
  height: 40px;
  width: auto;
}

.section-box {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f3f0f0;
}

.custom-button {
  position: relative;
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
  color: white;
  font-size: 12px;
}

.calendar-button {
  background-image: url("/images/benefits-image.webp");
  background-size: cover;
}

.journal-button {
  background-image: url("/images/journal-image.webp");
}

.benefits-button {
  background-image: url("/images/benefits-image.jpeg");
}


</style>