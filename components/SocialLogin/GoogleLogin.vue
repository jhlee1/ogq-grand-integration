<template>
  <v-btn @click="click" class="btn_login_google" color="primary" large>
    <img src="~assets/images/logo_google_square.png">
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
.btn_login_google {width: 300px; padding: 14px 0; display: block; margin: 0 auto 12px;}
.btn_login_google span {color: #3986f9; font-weight: 700;}
.btn_login_google img {width: 24px; height: 24px; display: inline-block; margin: -6px 4px -6px 0;}
</style>
