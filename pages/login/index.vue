<template>
  <div>
    <div class="about_login">
      <p class="tit">
        OGQ 대통합
      </p>
      <div class="btns_login">
        <google-login :client-id="social.google.clientId" :scope="social.google.scope" @callback="(res) => processLogin('GOOGLE', res)" />
      </div>
    </div>
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
        clientId: '759830993627-j9p2qbkg3f9559tcs16pldih0d5bp5no.apps.googleusercontent.com',
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
/** 로그인 **/
.about_login {margin: 200px auto 60px; text-align: center;}
.about_login .tit {font-size: 30px; font-weight: 700; margin-bottom: 20px;}
.btns_login {margin: 0 auto 32px; text-align: center;}
</style>
