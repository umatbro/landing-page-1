<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
        <router-link to="/"><v-btn>Home</v-btn></router-link>
        <router-link to="/about"><v-btn>O mnie</v-btn></router-link>
        <router-link to="/services"><v-btn>Oferta</v-btn></router-link>
        <router-link to="/repair"><v-btn>Naprawa aparatów</v-btn></router-link>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
