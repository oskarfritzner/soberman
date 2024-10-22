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
          <ion-button @click="showSection('calendar')">Calendar View</ion-button>
          <ion-button @click="showSection('journal')">Journal View</ion-button>
          <ion-button @click="showSection('benefits')">Benefits View</ion-button>
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
  background-color: #f9f9f9;
}
</style>