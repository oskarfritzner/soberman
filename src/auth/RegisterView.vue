<template>
  <ion-card class="login-card">
    <ion-card-header>
      <ion-card-title>Register for Soberman</ion-card-title>
    </ion-card-header>

    <ion-text color="medium">
      <p>Please register with your Google account to continue.</p>
    </ion-text>

    <ion-button expand="block" @click="registerWithGoogle">
      Register with Google
    </ion-button>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { signInWithPopup, auth, provider } from "../firebase";

export default defineComponent({
  name: "RegisterView",
  emits: ["registered"],  // Emit custom event when registration is successful
  methods: {
    async registerWithGoogle() {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("User registered:", user);

        // Emit the "registered" event
        this.$emit("registered");
      } catch (error) {
        console.error("Error registering:", error);
      }
    },
  },
});
</script>

  <style scoped>
  .login-card {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin: 0;
    box-shadow: 0px 4px 2px 2px rgba(0, 0, 0, 0.1);
  }
  
  ion-card-title {
    font-size: 1.4rem;
  }
  
  ion-button {
    --background: var(--ion-color-secondary);
    margin-top: 20px;
    --color: white;
  }
  
  ion-button:hover {
    --background: var(--ion-color-primary);
  }
  </style>