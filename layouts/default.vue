<template>
  <client-only>
    <v-app id="inspire">
      <v-navigation-drawer
        v-if="login"
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
          <v-col v-if="login">
            <div class="text-right">
              <div class="my-2">
                <v-tooltip left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="success" fab small dark v-bind="attrs" v-on="on" @click="logout">
                      <v-icon>mdi-account-circle</v-icon>
                    </v-btn>
                  </template>
                  <span>로그아웃</span>
                </v-tooltip>
              </div>
            </div>
          </v-col>
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
import utils from '@/utils/cookieUtils'
import * as authStore from '@/store/auth'
import * as authGetters from '@/store/auth/getters'

export default {
  name: 'Default',
  data: () => ({
    drawer: null,
    login: false
  }),
  computed: {
    ...authStore.mapGetters({
      admin: authGetters.ADMIN
    })
  },
  beforeMount () {
    console.log('admin ', this.admin)
    this.login = this.isLoggedIn()
    this.authentication = this.$store.state.authentication
    console.log('authentication ', this.authentication)
    if(this.login) {
      this.$router.push('/card')
    }
  },
  methods: {
    isLoggedIn () {
      const cookie = document.cookie.match('(^|;) ?token=([^;]*)(;|$)')
      return !!cookie
    },
    logout () {
      utils.logout()
      window.location.replace('/login')
    }
  },
}
</script>
