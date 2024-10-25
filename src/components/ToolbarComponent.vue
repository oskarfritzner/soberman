<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        <img src="/public/images/Sober.png" alt="Soberman Logo" class="logo" />
      </ion-title>
      <ion-buttons slot="end">
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
.logo {
  height: 40px;
  width: auto;
}

ion-toolbar {
  --background: white;
  border: none;
  height: 5vh;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

ion-title {
  padding: 0;
  width: 20%;
}

</style>
