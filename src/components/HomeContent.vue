<template>
  <section>
    <v-parallax :src="require('@/assets/background1.jpg')" height="600">
      <v-layout
        column
        align-center
        justify-center
      >
        <h1 class="display-2 font-weight-thin mb-3">{{ companyName }}</h1>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      companyName: (state) => state.companyName,
    }),
  },
};
</script>

<style>
export default{}
</style>
