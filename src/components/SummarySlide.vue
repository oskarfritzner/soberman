<template>
  <div class="summary-slide">
    <CurrentSoberStreak :streak="streak" />
    <MoneySaved :money="moneySaved" />
    <TimeSaved :time="timeSaved" />
    <BestSoberStreak :bestStreak="bestStreak" />
  </div>
</template>

<script>
import CurrentSoberStreak from "@/data/CurrentSoberStreak.vue";
import MoneySaved from "@/data/MoneySaved.vue";
import TimeSaved from "@/data/TimeSaved.vue";
import BestSoberStreak from "@/data/BestSoberStreak.vue";

export default {
  components: {
    CurrentSoberStreak,
    MoneySaved,
    TimeSaved,
    BestSoberStreak,
  },
  props: {
    streak: {
      type: Number,
      required: true,
    },
    moneySaved: {
      type: Number,
      required: true,
    },
    timeSaved: {
      type: Number,
      required: true,
    },
    bestStreak: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.summary-slide {
  display: flex;
  justify-content: space-around;
  text-align: center;
  gap: 10px;
  padding: 20px;
}
</style>