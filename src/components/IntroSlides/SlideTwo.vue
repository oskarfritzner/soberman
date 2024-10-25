<template>
  <ion-card>
    <ion-card-content>
      <h2>Tell us more about yourself</h2>
      <ion-input v-model="sobrietyDate" placeholder="Sobriety Start Date" type="date"></ion-input>
      <ion-button @click="saveUserInfo">Submit</ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { IonCard, IonCardContent, IonInput, IonButton } from "@ionic/vue";

export default defineComponent({
  name: "SlideTwo",
  setup() {
    const sobrietyDate = ref<string>("");

    const saveUserInfo = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const db = getFirestore();
        await setDoc(doc(db, "users", user.uid), {
          sobrietyDate: sobrietyDate.value,
        });
        console.log("User info saved to Firebase");
        // Add logic for moving to SlideThree
      }
    };

    return {
      sobrietyDate,
      saveUserInfo,
    };
  },
  components: {
    IonCard,
    IonCardContent,
    IonInput,
    IonButton,
  },
});
</script>