<template>
  <div>
  <h3>Mirosław Prawda</h3>
  <h2>Naprawa aparatów fotograficznych i studio fotograficzne</h2>
  <h3>Kontakt</h3>
  <h4>Tel: {{ phoneNumber }}</h4>
  <h3>Adres zakładu</h3>
  <h4>ul. Żeromskiego 51</h4>
  <h4>26-600 Radom</h4>  
  <h3>Godziny otwarcia</h3>
  <h4>poniedziałek - piątek 10:00-17:00</h4>
  <!-- TODO Gdzie można zaparkować ? -->
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