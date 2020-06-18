<template>
  <client-only>
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-item link to="/">
            <v-list-item-action>
              <v-icon>mdi-chart-bar</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>대시보드</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/releaseNote">
            <v-list-item-action>
              <v-icon>mdi-google-classroom</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>릴리즈노트</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/card">
            <v-list-item-action>
              <v-icon>mdi-credit-card-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>법카 대여</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="restaurants">
            <v-list-item-action>
              <v-icon>mdi-food</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>뭐먹</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        app
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>OGQ 대통합</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <nuxt />
      </v-content>

      <v-footer
        color="indigo"
        app
      >
        <span class="white--text">&copy; 2020 OGQ Grand Integration</span>
      </v-footer>
    </v-app>
  </client-only>
</template>

<script>

export default {
  name: 'Default',
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    login: false,
    authentication: false
  }),
  beforeMount () {
    this.login = this.isLoggedIn()
    console.log('login ', this.login)
    this.authentication = this.$store.state.authentication
    console.log('authentication ', this.authentication)
  },
  methods: {
    isLoggedIn () {
      const cookie = document.cookie.match('(^|;) ?token=([^;]*)(;|$)')
      return !!cookie
    }
  },
}
</script>
