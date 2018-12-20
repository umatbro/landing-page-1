<template>
  <div>
    <h4>Phone number: {{ phoneNumber }}</h4>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['phoneNumber']),
  },
};
</script>