<template>
  <div class="slide-container">
    <ion-card>
      <ion-card-content>
        <h2>Tell us more about yourself</h2>
        
        <!-- Sobriety Date -->
        <label for="sobrietyDate">When did you start your sobriety journey?</label>
        <ion-input id="sobrietyDate" v-model="sobrietyDate" placeholder="Sobriety Start Date" type="date"></ion-input>

        <!-- Weekly Spend -->
        <label for="weeklySpend">How much do you usually spend on alcohol each week?</label>
        <ion-input id="weeklySpend" v-model="weeklySpend" placeholder="Enter amount" type="number"></ion-input>

        <!-- Time Affected -->
        <label for="timeAffected">How many hours are you affected by alcohol weekly?</label>
        <ion-input id="timeAffected" v-model="timeAffected" placeholder="Enter hours" type="number"></ion-input>

        <!-- Optional Quote -->
        <label for="optionalQuote">Why did you stop drinking? (Optional)</label>
        <ion-textarea id="optionalQuote" v-model="optionalQuote" placeholder="Why did you stop drinking?"></ion-textarea>

        <ion-button @click="saveUserInfo">Submit</ion-button>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script lang="ts">
import "./SlideStyle.css";
import { defineComponent, ref } from "vue";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useSwiper } from "swiper/vue"; // Import useSwiper to control Swiper instance

import { IonCard, IonCardContent, IonInput, IonTextarea, IonButton } from "@ionic/vue";

export default defineComponent({
  name: "SlideTwo",
  setup() {
    const swiper = useSwiper(); // Get Swiper instance

    const sobrietyDate = ref<string>("");
    const weeklySpend = ref<number | string>(0);
    const timeAffected = ref<number | string>(0);
    const optionalQuote = ref<string>("");

    const saveUserInfo = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const db = getFirestore();
        await setDoc(doc(db, "users", user.uid), {
          sobrietyDate: sobrietyDate.value,
          weeklySpend: weeklySpend.value,
          timeAffected: timeAffected.value,
          optionalQuote: optionalQuote.value,
        });
        console.log("User info saved to Firebase");

        // Move to SlideThree (index 2)
        if (swiper.value) {
          swiper.value.slideTo(2); // Move to SlideThree
        } else {
          console.error("Swiper instance not found");
        }
      }
    };

    return {
      sobrietyDate,
      weeklySpend,
      timeAffected,
      optionalQuote,
      saveUserInfo,
    };
  },
  components: {
    IonCard,
    IonCardContent,
    IonInput,
    IonTextarea,
    IonButton,
  },
});
</script>