<template>
    <div class="data-component">
      <h3>Time Saved</h3>
      <p>{{ formattedTimeSaved }} hours</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, computed } from "vue";
  import { getFirestore, doc, getDoc } from "firebase/firestore";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  
  export default {
    setup() {
      const timeSaved = ref(0);
      const firestore = getFirestore();
      const auth = getAuth();
  
      const calculateTimeSaved = (dailyTime, daysSober) => dailyTime * daysSober;
  
      const fetchTimeSavedData = async () => {
        const user = auth.currentUser;
        if (user) {
          try {
            const userDoc = await getDoc(doc(firestore, "users", user.uid));
            if (userDoc.exists()) {
              const data = userDoc.data();
              const dailyTime = Number(data.timeAffected) / 7; // Calculate daily time from weekly
              const daysSober = Math.floor((new Date() - new Date(data.sobrietyDate)) / (1000 * 60 * 60 * 24));
              timeSaved.value = calculateTimeSaved(dailyTime, daysSober);
            } else {
              console.warn("User data not found in Firebase.");
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
      };
  
      onMounted(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            fetchTimeSavedData();
          }
        });
      });
  
      // Computed property to format timeSaved with two decimal places
      const formattedTimeSaved = computed(() => timeSaved.value.toFixed(2));
  
      return {
        timeSaved,
        formattedTimeSaved,
      };
    },
  };
  </script>
  
  <style scoped>
  .data-component {
    text-align: center;
  }
  </style>