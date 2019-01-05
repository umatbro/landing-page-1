<template>
  <div class="home">
    <home-content></home-content>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeContent from '@/components/HomeContent.vue';

export default Vue.extend({
  name: 'home',
  components: {
    HomeContent,
  },
});
</script>
