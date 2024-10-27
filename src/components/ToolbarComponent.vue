<template>
  <ion-header>
    <ion-toolbar>
      <!-- Back Arrow Icon on the Left, only visible when not on homepage -->
      <ion-buttons slot="start">
        <ion-button v-if="!isHomePage" @click="goToHome">
          <ion-icon :icon="icons.arrowBackOutline"></ion-icon>
        </ion-button>
      </ion-buttons>

      <!-- Welcome/Login Button on the Right -->
      <ion-buttons slot="end">
        <template v-if="user">
          <router-link to="/">
            <ion-button>Welcome, {{ user.displayName }}</ion-button>
          </router-link>
        </template>
        <template v-else>
          <router-link to="/login">
            <ion-button>Login</ion-button>
          </router-link>
        </template>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { auth } from "../firebase";
import { arrowBackOutline } from "ionicons/icons";

export default {
  setup() {
    const user = ref(null);
    const router = useRouter();
    const route = useRoute();

    const icons = {
      arrowBackOutline,
    };

    // Check if the current route is the homepage
    const isHomePage = computed(() => route.path === "/");

    const goToHome = () => {
      router.push("/");
    };

    onMounted(() => {
      user.value = auth.currentUser;
      auth.onAuthStateChanged((currentUser) => {
        user.value = currentUser;
      });
    });

    return {
      user,
      isHomePage,
      goToHome,
      icons,
    };
  },
};
</script>

<style>
ion-icon {
  font-size: 24px !important;
  width: 24px !important;
  height: 24px !important;
}

ion-button {
  --color: black;
  --background: transparent;
  position: relative;
  z-index: 100;
}
</style>
