<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Login</ion-title>
            </ion-toolbar>
        </ion-header>
        <LoginView />
    </ion-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import LoginView from '../components/LoginView.vue';

export default defineComponent({
  name: 'LoginPage',
  components: {
    LoginView,
  },
});
</script>