<template>
  <v-container>
    <v-layout align-center wrap>
      <v-flex sm12 md6>
        <v-img 
          :src="require('@/assets/joseph-grodzicki.jpg')"
          :max-height="500"
          :contain="true"
        ></v-img>
      </v-flex>
      <v-flex sm12 md6 pa-5 class="text-justify">
        100-letnia historia zakładu to lekkie niedopowiedzenie. Swoje początki znajduje już pod koniec XIX wieku, a konkretnie w roku 1885. Założycielem był Józef Grodzicki, znany fotograf, który w Radomiu postanowił kontynuować swoją pracę po przeprowadzce z Kielc i otworzył „Zakład Drukarski i Litograficzny”, początkowo mieszczący się przy ulicy Żeromskiego 15, a później przeniesiony kawałek dalej, na Żeromskiego 51. Grodzicki oferował swoje usługi dla Radomian aż do roku 1939. Oprócz zakładu fotograficznego prowadził również drukarnię oraz założył pierwsze w Radomiu kino „Czary”, później przekształcone w kino „Hel”.
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex sm12 md6 pa-5 class="text-justify">Jeżeli mieszkasz w Radomiu, to bardzo możliwe , że Twoi dziadkowie lub pradziadkowie również w swoich kolekcjach posiadają pozowane zdjęcia z charakterystyczną posadzką, która służy do dnia dzisiejszego. Już w 1918 roku zdjęcia sygnowane były przez wspólników – J. Grodzickiego i S. Sybilskiego. Studio zostało zamknięte na krótko po wybuchu drugiej wojny światowej, ponieważ 23 września 1939 roku Józef Grodzicki zmarł. Zakład został jednak reaktywowany po drugiej wojnie światowej przez Stanisława Sybilskiego, byłego współpracownika Grodzickiego. Ówczesne studio dzięki zastosowaniu przeszklonego sufitu pozwalało na wykorzystanie naturalnego oświetlenia podczas sesji fotograficznych. Wraz z rozwojem technologii znaczenie naturalnego światła w fotografii malało, co poskutkowało modernizacją zakładu i zamknięciem bryły obiektu.</v-flex>
      <v-flex sm12 md6>
        <v-img 
          :src="require('@/assets/fancy-guys.jpg')"
          :max-height="500"
          :contain="true"
        ></v-img>
      </v-flex>
      <v-flex sm12 md6>
        <v-img 
          :src="require('@/assets/wladyslaw-prawda.jpg')"
          :max-height="500"
          :contain="true"
        ></v-img>
      </v-flex>
      <v-flex sm12 md6 pa-5 class="text-justify">Od roku XXXX na praktyki do Sybilskiego przyszedł Władysław Prawda, który bardzo chętnie wchłaniał wiedzę przekazywaną mu przez doświadczonego fotografa. Po śmierci Stanisława to właśnie Władysław kontynuował prowadzenie zakładu przy ulicy Żeromskiego 51. W tym okresie fotografia w Radomiu zyskiwała na popularności, więc i firma przeżywała złoty okres. W procesie wywoływania zdjęć musiały czasem pomagać nastoletnie dzieci Władysława, które po dziś dzień wspominają z uśmiechem i iskrą nostalgii w oczach. Najmłodszy z nich, Mirosław, przejawiał spore zainteresowanie technikami fotograficznymi i w tym kierunku się kształcił. W roku 1979 w wieku 16 lat odbył praktyki w rodzinnym zakładzie w ramach szkoły zawodowej  w Radomiu o profilu fotograficznym, a w 1983 roku skończył studium fotograficzne w Łodzi.</v-flex>
      <v-flex sm12 md12 pa-5 class="text-justify">W wieku 16 lat odbył praktyki w rodzinnym zakładzie w ramach szkoły zawodowej  w Radomiu o profilu fotograficznym, a w wieku 20 lat skończył studium fotograficzne w Łodzi. Po przedwczesnej śmierci Władysława w 1985 roku, Mirosław przejął jego obowiązki i sam prowadzi zakład już od ponad 33 lat. Przez ten czas fotografia niesamowicie się rozwinęła, a wraz z nią umiejętności Mirosława, który postanowił specjalizować się w naprawie sprzętu fotograficznego oraz wykonywaniu zdjęć w studio. I tak po ponad 133 latach istnienia zakładu, na tej samej posadzce, tak jak kiedyś Józef Grodzicki fotografował swoich klientów, tak i dzisiaj, Mirosław Prawda wręcza ludziom ich uśmiechnięte twarze uwiecznione na papierze.</v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default{};
</script>

<style scoped>
.text-justify {
  text-align: justify;
}
</style>