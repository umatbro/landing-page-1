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
         <div id="mapid"></div>
      </v-flex>
    </v-layout>
  <!-- TODO Gdzie można zaparkować ? -->
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import config from '../../config';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  computed: {
    ...mapState(['phoneNumber']),
  },
  mounted() {
    const pos = [ 51.401, 21.15674 ];
    const map = L.map('mapid').setView(pos, 16);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
        <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
          Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`,
      maxZoom: 21,
      id: 'mapbox.streets',
      accessToken: config.mapBoxToken,
    }).addTo(map);

    // add marker
    const marker = L.marker(pos).addTo(map);
    const polygon = L.polygon([
    [51.40103, 21.15709],
    [51.40125, 21.15715],
    [51.40132, 21.15676],
    [51.40108, 21.15666]], 
    {
    color: 'blue',
    fillOpacity: 0.5,
}).bindPopup("Tutaj możesz zaparkować.").addTo(map);
  },
};
</script>

<style scoped>
.container {
  margin-top: 1rem;
}
#mapid { height: 450px; }

</style>