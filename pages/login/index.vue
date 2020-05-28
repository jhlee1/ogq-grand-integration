<template>
  <div class="text-center">
    <google-login :client-id="social.google.clientId" :scope="social.google.scope" @callback="(res) => processLogin('GOOGLE', res)" />
  </div>
</template>

<script>
import GoogleLogin from '@/components/SocialLogin/GoogleLogin'

export default {
  name: 'Login',
  components: { GoogleLogin },
  data() {
    const SOCIAL = {
      google: {
        clientId: '176109249735-uorsueki6n45tbnfkvvidicf6k736ink.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      }
    }
    return {
      social: SOCIAL
    }
  },
  methods: {
    processLogin (provider, token) {
      console.log('provider ', provider)
      console.log('token ', token)
      // login api 연동
    }
  },
}
</script>

<style scoped>

</style>
