<template>
<!--  <v-row justify="center">-->
    <div>
      <div class="about_login">
<!--        <p class="tit">-->
<!--          OGQ 대통합-->
        <v-img :src="require('~/assets/images/logo.png')" style="width: 20%; margin: 0 auto;"></v-img>
<!--        </p>-->
        <div class="btns_login">
          <google-login :client-id="social.google.clientId" :scope="social.google.scope" @callback="(res) => processLogin('GOOGLE', res)" />
        </div>
        <v-img :src="require('~/assets/images/img_login_illust.png')" style="width: 70%; margin: 0 auto;"></v-img>
      </div>
      <v-dialog v-model="modal" width="400">
        <v-card>
          <v-card-title></v-card-title>
          <v-card-text class="headline">
            {{ modalMSG1 }}
            <v-spacer></v-spacer>
            {{ modalMSG2 }}
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
<!--  </v-row>-->
</template>

<script>
import * as authStore from '@/store/auth'
import * as authGetters from '@/store/auth/getters'
import * as authActions from '@/store/auth/actions'

import GoogleLogin from '@/components/SocialLogin/GoogleLogin'

export default {
  name: 'Login',
  components: { GoogleLogin },
  data() {
    const SOCIAL = {
      google: {
        clientId: '759830993627-j9p2qbkg3f9559tcs16pldih0d5bp5no.apps.googleusercontent.com',
        // clientId: '176109249735-uorsueki6n45tbnfkvvidicf6k736ink.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      }
    }
    return {
      social: SOCIAL,
      modal: false,
      modalMSG1: '',
      modalMSG2: ''
    }
  },
  watch: {
    'loginCode': 'activePopup'
  },
  computed: {
    ...authStore.mapGetters({
      loginCode: authGetters.LOGIN_CODE
    })
  },
  methods: {
    ...authStore.mapActions([
      authActions.GET_AUTH
    ]),
    async processLogin (provider, token) {
      try {
        await this[authActions.GET_AUTH](token)
        console.log('loginCode ', this.loginCode)
      } catch (err) {
        console.log('err ', err)
      }
    },
    activePopup () {
      console.log('activePopup loginCode ', this.loginCode)
      if (this.loginCode === 400002) {
        this.modalMSG1 = '텔레그램 인증이 필요합니다.'
        this.modalMSG2 = 'ex) /인증 이메일'
        this.modal = true
      }
    }
  },
}
</script>

<style scoped>
/** 로그인 **/
.about_login {margin: 80px auto 60px; text-align: center;}
.about_login .tit {font-size: 30px; font-weight: 700; margin-bottom: 20px;}
.btns_login {margin: 0 auto 90px; text-align: center;}
</style>
