<template>
  <div>
O mnie
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