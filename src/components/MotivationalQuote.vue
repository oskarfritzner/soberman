<template>
  <ion-content>
    <div>
      <h2>Motivational Quote of the Day</h2>
      <p>{{ quote }}</p>
    </div>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'MotivationalQuote',
  components: {
    IonContent,
  },
  data() {
    return {
      quote: 'Stay strong, one day at a time!',
    };
  },
  mounted() {
    
  },
});
</script>