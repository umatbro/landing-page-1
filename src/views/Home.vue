<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
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
