<template>
  <v-app dark>
    <v-toolbar>
      <!-- Small screen menu -->
      <v-menu offset-y>
        <v-toolbar-side-icon slot="activator" class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile
          v-for="(route, index) of routes"
          :key="index">
            <v-list-tile-title>
              <router-link class="link" :to="route.route">{{ route.name }}</router-link>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <!-- Big and normal screen menu -->
      <v-layout justify-center align-center class="hidden-sm-and-down">
        <router-link v-for="(route, index) of routes" :to="route.route" :key="index">
          <v-btn>{{ route.name }}</v-btn>
        </router-link>
      </v-layout>

    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
export default {
    data: () => {
        const routes: object[] = [
            { name: 'Home', route: '/' },
            { name: 'O mnie', route: '/about' },
            { name: 'Oferta', route: '/services' },
            { name: 'Naprawa aparatów', route: '/repair' },
        ];
        return {
          routes,
        };
    },
};
</script>

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

.link {
  color: inherit;
  text-decoration: none;
}

.router-link-exact-active {
  font-weight: bold;
}
</style>
