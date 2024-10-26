<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Keep Going</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-grid v-if="weeks.length > 0"> <!-- Only show calendar if weeks are generated -->
          <ion-row>
            <ion-col v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']" :key="day" class="day-header">
              {{ day }}
            </ion-col>
          </ion-row>
          <ion-row v-for="week in weeks" :key="week">
            <ion-col
              v-for="day in week"
              :key="day.date"
              :class="getDayStyle(day)"
              @click="onDayClick(day)"
            >
              <div class="day-content">
                <span>{{ day.date.getDate() }}</span>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
        <p v-else>Loading calendar...</p>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, watch } from "vue";
  import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol } from "@ionic/vue";
  import { generateCalendar, CalendarDay } from "../utils/calendar";
  import { getFirestore, doc, getDoc } from "firebase/firestore";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  
  export default defineComponent({
    name: "SobrietyCalendar",
    components: {
      IonPage,
      IonContent,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonGrid,
      IonRow,
      IonCol,
    },
    setup() {
      const sobrietyDate = ref<Date | null>(null);
      const weeks = ref<CalendarDay[][]>([]);
  
      const fetchSobrietyDate = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          const db = getFirestore();
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            sobrietyDate.value = new Date(userDoc.data().sobrietyDate);
          }
        }
      };
  
      // Watch for changes in sobrietyDate and update weeks when it's available
      watch(sobrietyDate, (newDate) => {
        if (newDate) {
          weeks.value = generateCalendar(new Date(), newDate);
        }
      });
  
      // Adjust the sobriety start date by +1 day and calculate days of sobriety
      const calculateSobrietyDays = (date: Date) => {
        if (!sobrietyDate.value) return 0;
        const adjustedStartDate = new Date(sobrietyDate.value);
        adjustedStartDate.setDate(adjustedStartDate.getDate() + 1); // Add 1 day to sobriety start date
        const diffTime = date.getTime() - adjustedStartDate.getTime();
        return Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);
      };
  
      const getDayStyle = (day: CalendarDay) => {
        const sobrietyDays = calculateSobrietyDays(day.date);
        return sobrietyDays < 7
          ? "week1"
          : sobrietyDays < 30
          ? "week2"
          : "milestone";
      };
  
      const onDayClick = (day: CalendarDay) => alert(`Day ${calculateSobrietyDays(day.date)}`);
  
      // Ensure auth state is checked before trying to fetch sobriety date
      onMounted(() => {
        onAuthStateChanged(getAuth(), (user) => {
          if (user) {
            fetchSobrietyDate();
          } else {
            console.warn("User is not authenticated.");
          }
        });
      });
  
      return {
        weeks,
        getDayStyle,
        onDayClick,
      };
    },
  });
  </script>
  
  <style scoped>
  .day-header {
    text-align: center;
    font-weight: bold;
  }
  
  .day-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .week1 {
    background-color: lightblue;
  }
  
  .week2 {
    background-color: mediumseagreen;
  }
  
  .milestone {
    background-color: gold;
  }
  </style>
  