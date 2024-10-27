<template>
  <ion-page>
    <ToolbarComponent />
    <ion-content>
      <div v-if="showIntroSlides">
        <!-- Intro slides displayed on the first visit -->
        <IntroView @finished="handleIntroFinished" />
      </div>
      <div v-else>
        <!-- Main Home Page Content -->
        <ion-card>
          <ion-card-header>
            <img class="soberman-image" src="/public/images/soberman-new.png" alt="Soberman" />
          </ion-card-header>
        </ion-card>

        <!-- Summary Slide Carousel with Slide Titles -->
        <ion-slides pager="true" class="summary-slides">
          <!-- Combined summary slide -->
          <ion-slide>
            <h2 class="slide-title">Summary</h2>
            <SummarySlide
              :streak="soberDays"
              :moneySaved="moneySaved"
              :timeSaved="timeSaved"
              :bestStreak="bestStreak"
            />
          </ion-slide>
          
          <!-- Individual slides with titles for each category -->
          <ion-slide>
            <h2 class="slide-title">Current Sober Streak</h2>
            <CurrentSoberStreak :streak="soberDays" />
          </ion-slide>
          <ion-slide>
            <h2 class="slide-title">Money Saved</h2>
            <MoneySaved :money="moneySaved" />
          </ion-slide>
          <ion-slide>
            <h2 class="slide-title">Time Saved</h2>
            <TimeSaved :time="timeSaved" />
          </ion-slide>
          <ion-slide>
            <h2 class="slide-title">Best Sober Streak</h2>
            <BestSoberStreak :bestStreak="bestStreak" />
          </ion-slide>
        </ion-slides>

        <!-- Navigation Grid -->
        <ion-card>
          <ion-card-header>
            <ion-card-title class="page-title">What do you want to see today?</ion-card-title>
          </ion-card-header>
          <ion-grid :fixed="true">
            <ion-row class="ion-align-items-stretch">
              <!-- Navigation links to other sections -->
              <ion-col size="6" size-lg="2">
                <router-link to="/calendar">
                  <ion-card>
                    <img src="/public/images/49.-Technology.png" alt="Calendar" />
                    <ion-card-header>
                      <ion-card-title>Your Sober Timeline</ion-card-title>
                    </ion-card-header>
                  </ion-card>
                </router-link>
              </ion-col>
              <!-- Other links go here as in the original code... -->
            </ion-row>
          </ion-grid>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle } from "@ionic/vue";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import ToolbarComponent from "@/components/ToolbarComponent.vue";
import IntroView from "@/components/IntroSlides/IntroView.vue";
import SummarySlide from "@/components/SummarySlide.vue";
import CurrentSoberStreak from "@/data/CurrentSoberStreak.vue";
import MoneySaved from "@/data/MoneySaved.vue";
import TimeSaved from "@/data/TimeSaved.vue";
import BestSoberStreak from "@/data/BestSoberStreak.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonPage,
    ToolbarComponent,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IntroView,
    SummarySlide,
    CurrentSoberStreak,
    MoneySaved,
    TimeSaved,
    BestSoberStreak,
  },
  setup() {
    const showIntroSlides = ref(false);
    const soberDays = ref(0);
    const moneySaved = ref(0);
    const timeSaved = ref(0);
    const bestStreak = ref(0);

    const calculateSoberDays = (startDate: Date): number => {
      const now = new Date();
      const diffTime = now.getTime() - startDate.getTime();
      return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    };

    const calculateSavings = (weeklyCost: number, weeklyTimeAffected: number): void => {
      const dailyCost = weeklyCost / 7;
      const dailyTime = weeklyTimeAffected / 7;
      const days = soberDays.value;

      moneySaved.value = dailyCost * days;
      timeSaved.value = dailyTime * days;
    };

    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const db = getFirestore();
        const userDoc = await getDoc(doc(db, "users", user.uid));

        if (userDoc.exists()) {
          const data = userDoc.data();
          const sobrietyStartDate = new Date(data.sobrietyDate);
          soberDays.value = calculateSoberDays(sobrietyStartDate);
          bestStreak.value = data.bestSoberStreak || soberDays.value;

          calculateSavings(data.weeklySpend || 0, data.timeAffected || 0);
        }
      }
    };

    onMounted(() => {
      showIntroSlides.value = !localStorage.getItem("hasVisited");
      fetchUserData();
    });

    const handleIntroFinished = () => {
      localStorage.setItem("hasVisited", "true");
      showIntroSlides.value = false;
    };

    return {
      showIntroSlides,
      handleIntroFinished,
      soberDays,
      moneySaved,
      timeSaved,
      bestStreak,
    };
  },
});
</script>

<style scoped>
.soberman-image {
  margin: 0;
  width: 100%;
  height: 350px;
  margin: 10px 0;
  border-radius: 40%;
}

.page-title {
  font-size: 24px;
}

.summary-slides {
  --ion-slide-indicator-background: rgba(255, 255, 255, 0.5);
  padding: 20px;
}

.slide-title {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
}

.summary-slide {
  display: flex;
  justify-content: space-around;
  text-align: center;
  gap: 10px;
  padding: 20px;
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

ion-card > ion-card-header {
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-card > ion-card-header > ion-card-title {
  font-size: 16px;
}

@media (min-width: 500px) {
  ion-row {
    margin: 20px;
    justify-content: space-between;
  }

  .soberman-image {
    width: 400px;
  }
}
</style>