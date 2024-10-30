<template>
    <div class="data-component">
      <p>{{ currentStreak }} days</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { getFirestore, doc, getDoc } from "firebase/firestore";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  
  export default {
    setup() {
      const currentStreak = ref(0);
      const firestore = getFirestore();
      const auth = getAuth();
  
      const calculateCurrentStreak = (startDate) => {
        const today = new Date();
        const timeDifference = today - new Date(startDate);
        return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      };
  
      const fetchCurrentStreak = async () => {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(firestore, "users", user.uid));
          if (userDoc.exists()) {
            currentStreak.value = calculateCurrentStreak(userDoc.data().sobrietyDate);
          }
        }
      };
  
      onMounted(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            fetchCurrentStreak();
          }
        });
      });
  
      return {
        currentStreak,
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