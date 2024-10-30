<template>
    <div class="data-component">
      <p>{{ bestStreak }} days</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  
  export default {
    setup() {
      const bestStreak = ref(0);
      const firestore = getFirestore();
      const auth = getAuth();
  
      const calculateCurrentStreak = (sobrietyDate) => {
        const today = new Date();
        const startDate = new Date(sobrietyDate);
        const diffTime = today - startDate;
        return Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
      };
  
      const checkAndUpdateBestStreak = async () => {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(firestore, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const data = userDoc.data();
            const currentStreak = calculateCurrentStreak(data.sobrietyDate);
            
            // Check if currentStreak is higher than the stored bestSoberStreak
            if (currentStreak > (data.bestSoberStreak || 0)) {
              await updateDoc(userDocRef, { bestSoberStreak: currentStreak });
              bestStreak.value = currentStreak;
            } else {
              bestStreak.value = data.bestSoberStreak;
            }
          } else {
            console.warn("User data not found in Firebase.");
          }
        }
      };
  
      onMounted(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            checkAndUpdateBestStreak();
          }
        });
      });
  
      return {
        bestStreak,
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