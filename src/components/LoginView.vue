<template>
    <ion-page>
        <ion-card class="login-card">
          <ion-card-header>
            <ion-card-title>Sign in to Soberman</ion-card-title>
          </ion-card-header>
  
            <ion-text color="medium">
              <p>Please sign in with your Google account to continue.</p>
            </ion-text>
  
            <ion-button
              expand="block"
              color="primary"
              @click="signInWithGoogle"
            >
              Sign in with Google
            </ion-button>
        </ion-card>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { signInWithPopup, auth, provider } from '../firebase';
  
  export default defineComponent({
    name: 'LoginView',
    methods: {
      async signInWithGoogle() {
        try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
          console.log("User signed in:", user);
  
          // Redirect to Home page after login
          this.$router.push('/');
        } catch (error) {
          console.error("Error signing in:", error);
        }
      },
    },
  });
  </script>
  
  <style scoped>
  .login-card {
    margin: 20px auto;
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  
  ion-card-title {
    font-size: 1.4rem;
  }
  
  ion-button {
    margin-top: 20px;
  }
  </style>