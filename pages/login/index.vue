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
        </div>{{ loginCode }}
        <v-img :src="require('~/assets/images/img_login_illust.png')" style="width: 70%; margin: 0 auto;"></v-img>
      </div>
      <one-btn-modal :title="title" :content="content" :active="active" />
    </div>
<!--  </v-row>-->
</template>

<script>
import * as authStore from '@/store/auth'
import * as authGetters from '@/store/auth/getters'
import * as authActions from '@/store/auth/actions'

import GoogleLogin from '@/components/SocialLogin/GoogleLogin'
import OneBtnModal from '@/components/OneBtnModal'

export default {
  name: 'Login',
  components: { GoogleLogin, OneBtnModal },
  data() {
    const SOCIAL = {
      google: {
        //clientId: '759830993627-j9p2qbkg3f9559tcs16pldih0d5bp5no.apps.googleusercontent.com',
        clientId: '176109249735-uorsueki6n45tbnfkvvidicf6k736ink.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      }
    }
    return {
      social: SOCIAL,
      active: false,
      title: '',
      content: ''
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
      if (this.loginCode === 400002) {
        this.title = '텔레그램 인증이 필요합니다.'
        this.content = 'ex) /인증 이메일'
        this.active = true
      } else {
        try {
          const response = await this[authActions.GET_AUTH](token)
          console.log('response dddd ', response)
          console.log('loginCOde ', this.loginCode)
          // if (response.status === 200) {
          //   this.$router.push('/card')
          // }
          // console.log('response ', response)
          // this.$router.push('/card')
        } catch (err) {
          console.error('processLogin Err ', err)
        }
      }
    },
    activePopup () {
      if (this.loginCode === 400002) {
        this.title = '텔레그램 인증이 필요합니다.'
        this.content = 'ex) /인증 이메일'
        this.active = true
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
