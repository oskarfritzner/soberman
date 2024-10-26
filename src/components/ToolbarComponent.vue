<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <template v-if="user">
          <ion-button>Welcome, {{ user.displayName }}</ion-button>
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
import { ref, onMounted } from "vue";
import { auth } from "../firebase";

export default {
  setup() {
    const user = ref(null);

    const toggleLoggedinn = () => {
      user.value = auth.currentUser;
    };

    onMounted(() => {
      toggleLoggedinn();
      auth.onAuthStateChanged((currentUser) => {
        user.value = currentUser;
      });
    });

    return {
      user,
    };
  },
};
</script>

<style scoped>
ion-toolbar {
  --background: var(--soberman-blue);
  --color: var(--soberman-white);
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-button {
  --background: transparent;
  --color: var(--soberman-white);
  font-weight: bold;
}
</style>