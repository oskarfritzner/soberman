<template>
  <ion-page>
    <ToolbarComponent />

    <ion-content>
      <div v-if="months.length > 0">
        <div v-for="(month, index) in months" :key="index" class="month-section">
          <h2 class="month-title">{{ monthNames[index] }}</h2>
          <ion-grid>
            <ion-row>
              <ion-col v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']" :key="day" class="day-header">
                {{ day }}
              </ion-col>
            </ion-row>
            <ion-row v-for="(week, weekIndex) in month" :key="weekIndex">
              <ion-col v-for="day in week" :key="day.date ? day.date.getTime() : weekIndex + '-' + Math.random()" 
                       :class="day.date ? getDayStyle(day) : 'empty-day'"
                       @click="day.date && onDayClick(day)">
                <div class="day-content">
                  <span v-if="day.date">{{ day.date.getDate() }}</span>
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </div>
      <p v-else>Loading calendar...</p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import ToolbarComponent from "../components/ToolbarComponent.vue";
import { defineComponent, ref, onMounted, watch } from "vue";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { generateYearlyCalendar, CalendarDay } from "../utils/calendar";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default defineComponent({
  name: "SobrietyCalendar",
  components: {
    ToolbarComponent,
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
    const months = ref<CalendarDay[][][]>([]);
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

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

    watch(sobrietyDate, (newDate) => {
      if (newDate) {
        months.value = generateYearlyCalendar(newDate);
      }
    });

    const calculateSobrietyDays = (date: Date) => {
      if (!sobrietyDate.value) return 0;
      const adjustedStartDate = new Date(sobrietyDate.value);
      adjustedStartDate.setDate(adjustedStartDate.getDate() + 1);
      const diffTime = date.getTime() - adjustedStartDate.getTime();
      return Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);
    };

    const getDayStyle = (day: CalendarDay) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (sobrietyDate.value && day.date && day.date >= sobrietyDate.value && day.date <= today) {
        return "soberDay";
      } else {
        return "futureOrPastDay";
      }
    };

    const onDayClick = (day: CalendarDay) => {
      if (day.date) alert(`Day ${calculateSobrietyDays(day.date)}`);
    };

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
      months,
      monthNames,
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
  padding: 10px 0;
}

.month-title {
  font-size: 1.5em;
  margin: 16px 0;
  text-align: center;
}

.month-section {
  margin-bottom: 32px;
}

.soberDay {
  background-color: mediumseagreen;
  border-bottom: 0.5px ridge black;
}

.futureOrPastDay {
  background-color: lightblue;
  border-bottom: 0.5px ridge black;
}

.empty-day {
  background-color: transparent;
}

ion-content {
  overflow-y: scroll;
}
</style>