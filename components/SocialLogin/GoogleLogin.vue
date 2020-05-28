<template>
  <v-btn @click="click">
    <v-img :src="require('../../assets/images/logo_google_square.png')"></v-img>
    구글로그인
  </v-btn>
</template>

<script>
import { loadGoogleSdk } from './google/helper'

export default {
  name: 'GoogleLogin',
  props: {
    clientId: {
      type: String,
      default: ''
    },
    scope: {
      type: String,
      default: ''
    }
  },
  mounted () {
    loadGoogleSdk({
      client_id: this.clientId,
      scope: this.scope
    })
  },
  methods: {
    click () {
      const auth2 = window.gapi.auth2.getAuthInstance()
      auth2.signIn()
        .then((res) => {
          const authResponse = res.getAuthResponse() || {}
          this.$emit('callback', {
            accessToken: authResponse.access_token
          })
        }, (err) => {
          this.$emit('callback', {
            err
          })
        })
    }
  }
}
</script>

<style scoped>

</style>
