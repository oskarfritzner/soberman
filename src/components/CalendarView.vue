<template>
    <div>
      <v-calendar @dayclick="onDayClick" />
      <div v-if="selectedDate">
        <h3>{{ selectedDate }}</h3>
        <textarea v-model="note" placeholder="How are you feeling today?"></textarea>
        <button @click="saveNote">Save Note</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        selectedDate: null as string | null,
        note: '',
      };
    },
    methods: {
      onDayClick(day: any) {
        this.selectedDate = day.date;
      },
      saveNote() {
        
        console.log(`Note for ${this.selectedDate}: ${this.note}`);
      },
    },
  });
  </script>