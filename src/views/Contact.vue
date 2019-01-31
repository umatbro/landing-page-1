<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Mirosław Prawda</h1>
        <h2>Naprawa aparatów fotograficznych i studio fotograficzne</h2>
      </v-flex>
      <v-flex class="container" lg6 md6 xs12>
        <h3>Kontakt</h3>
        <h4>Tel: {{ phoneNumber }}</h4>
        <h3>Adres zakładu</h3>
        <h4>ul. Żeromskiego 51</h4>
        <h4>26-600 Radom</h4>
        <h3>Godziny otwarcia</h3>
        <h4>poniedziałek - piątek 10:00-17:00</h4>
      </v-flex>
      <v-flex class="container" lg6 md6 xs12>
        <h2>Mapa</h2>
        <div id="map-placeholder"></div>
      </v-flex>
    </v-layout>
  <!-- TODO Gdzie można zaparkować ? -->
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['phoneNumber']),
  },
};
</script>

<style scoped>
.container {
  margin-top: 1rem;
}

#map-placeholder {
  width: 320px;
  height: 240px;
  background-color: lightgray;
  margin: auto;
}
</style>