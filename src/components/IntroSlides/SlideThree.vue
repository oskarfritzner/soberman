<template>
  <ion-card>
    <ion-card-content>
      <h2>SLIDE 3</h2>
      <p>Congratulations on your sobriety journey!</p>
      <p v-if="daysSinceLastDrink !== null">Days since last drink: {{ daysSinceLastDrink }}</p>
      <ion-button @click="goToHome">Go to Home</ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { IonCard, IonCardContent, IonButton } from "@ionic/vue";
import { db } from '@/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

const router = useRouter();
const daysSinceLastDrink = ref<number | null>(null);

const fetchLatestData = async () => {
  const q = query(collection(db, 'sobrietyData'), orderBy('timestamp', 'desc'), limit(1));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    daysSinceLastDrink.value = doc.data().daysSinceLastDrink;
  });
};

onMounted(() => {
  fetchLatestData();
});

const goToHome = () => {
  router.push({ path: '/' });
};
</script>

<style scoped>
ion-card {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>