<template>
    <div class="data-component">
      <p>{{ formattedMoneySaved }} kr</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, computed } from "vue";
  import { getFirestore, doc, getDoc } from "firebase/firestore";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  
  export default {
    setup() {
      const moneySaved = ref(0);
      const firestore = getFirestore();
      const auth = getAuth();
  
      // Function to calculate daily spend from weekly spend and calculate total money saved
      const calculateMoneySaved = (weeklySpend, daysSober) => {
        const dailySpend = weeklySpend / 7; // Convert weekly spend to daily spend
        return dailySpend * daysSober;
      };
  
      const fetchMoneySavedData = async () => {
        const user = auth.currentUser;
        if (user) {
          try {
            const userDoc = await getDoc(doc(firestore, "users", user.uid));
            if (userDoc.exists()) {
              const data = userDoc.data();
              const weeklySpend = Number(data.weeklySpend || 0); // Convert to number
              const daysSober = Math.floor((new Date() - new Date(data.sobrietyDate)) / (1000 * 60 * 60 * 24));
              moneySaved.value = calculateMoneySaved(weeklySpend, daysSober);
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
            fetchMoneySavedData();
          }
        });
      });
  
      // Computed property to format moneySaved with two decimal places
      const formattedMoneySaved = computed(() => moneySaved.value.toFixed(2));
  
      return {
        moneySaved,
        formattedMoneySaved,
      };
    },
  };
  </script>
  
  <style scoped>
  .data-component {
    text-align: center;
  }

  .data-component p {
    font-size: 4rem;
    color: rgb(0, 0, 0);
  }
  </style>