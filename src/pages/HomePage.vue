<template>
  <ion-page>
    <ToolbarComponent />
    <ion-content>
      <div v-if="showIntroSlides">
        <!-- Import and include your IntroSlides component here -->
        <IntroView @finished="handleIntroFinished" />
      </div>
      <div v-else>
        <!-- Main Home Page Content -->
        <ion-card>
          <ion-card-header>
            <img class="soberman-image" src="/public/images/soberman-new.png" alt="Soberman" />
          </ion-card-header>
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title class="page-title">What do you want to see today?</ion-card-title>
          </ion-card-header>
          <ion-grid :fixed="true">
            <ion-row class=".ion-align-items-stretch">
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
              <ion-col size="6" size-lg="2">
                <router-link to="/journal">
                  <ion-card>
                    <img src="/public/images/50.-Travel.png" alt="Journal" />
                    <ion-card-header>
                      <ion-card-title>Your Sober Journal</ion-card-title>
                    </ion-card-header>
                  </ion-card>
                </router-link>
              </ion-col>
              <ion-col size="6" size-lg="2">
                <router-link to="/benefits">
                  <ion-card>
                    <img src="/public/images/43.-Healthcare.png" alt="benefits" />
                    <ion-card-header>
                      <ion-card-title>See your benefits</ion-card-title>
                    </ion-card-header>
                  </ion-card>
                </router-link>
              </ion-col>
              <ion-col size="6" size-lg="2">
                <router-link to="/rewards">
                  <ion-card>
                    <img src="/public/images/42.-Fitness.png" alt="benefits" />
                    <ion-card-header>
                      <ion-card-title>See your rewards</ion-card-title>
                    </ion-card-header>
                  </ion-card>
                </router-link>
              </ion-col>
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
import ToolbarComponent from "@/components/ToolbarComponent.vue";
import IntroView from "@/components/IntroSlides/IntroView.vue"; // Adjust path to the actual location of your IntroSlides component

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
  },
  setup() {
    const showIntroSlides = ref(false);

    onMounted(() => {
      showIntroSlides.value = !localStorage.getItem("hasVisited");
    });

    const handleIntroFinished = () => {
      localStorage.setItem("hasVisited", "true");
      showIntroSlides.value = false;
    };

    return {
      showIntroSlides,
      handleIntroFinished,
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

@media (min-width: 720px) {
  ion-row {
    margin: 20px;
    justify-content: space-between;
  }

  .soberman-image {
    width: 400px;
  }
}
</style>
