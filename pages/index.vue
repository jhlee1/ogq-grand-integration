<template>
  <div><button label="Sign In" @click="getGoogleAnalytics">test</button></div>
</template>

<script>
import gAPI from '@/gapi/analytics'

export default {
  name: 'dashboard',
  data() {
      return {
        text: '',
        auth2: undefined,
        client: undefined
      }
  },
  mounted() {
    // gapi.load('auth', this.gapiAuthIInit)
    // gapi.load('client', this.gapiAnalyticsInit)
    const token = 'ya29.a0AfH6SMBI1XayCyewR4hRhn7ktA1KhqiLKbP4dxHhU2p79me_zVlRLjBOkFGrBAlQcOWcPMqNrvRQq8kML82D8I_yTKEbgN0pbVwK4_fepY44btq6tacDT0c3x1UqlVK5RewjT2ejVQ59l-ZE8ao3sICuueVj5rINLYdAaw'
    gAPI.postLogin(token)
  },
  methods: {
    async getGoogleAnalytics() {
      try {
        const res = await gAPI.getAnalytics()
        console.log('res', res)
      } catch (err) {
        console.error('gapi getAnalytics', err)
      }
    },
    async gapiAuthIInit() {
      try {
        const res = await gapi.auth2.init({
          'clientId': '176109249735-uorsueki6n45tbnfkvvidicf6k736ink.apps.googleusercontent.com',        
          'scope': 'profile'
        })
        console.log('res', res)
        this.auth2 = res
      } catch (err) {
        console.error('gapiAuthIInit', err)
      }
    },
    async getGoogleProfile() {
      try {
        const gUser = await this.auth2.currentUser.get()
        console.log('gUser', gUser)
        const profile = gUser.getBasicProfile()
        console.log('profile', profile)
        console.log('ID: ' + profile.getId())
        console.log('Full Name: ' + profile.getName())
        console.log('Given Name: ' + profile.getGivenName())
        console.log('Family Name: ' + profile.getFamilyName())
        console.log('Image URL: ' + profile.getImageUrl())
        console.log('Email: ' + profile.getEmail())
      } catch (err) {
        console.error('getGoogleProfile', err)
      }
    },
    async gapiAnalyticsInit() {
      try {
        const res = await gapi.client.init({
          'apiKey': 'AIzaSyCKbpkZPNqGGti_r0XMGxQo7BFWLgh3yHo',
          'discoveryDocs': [ 'https://analyticsreporting.googleapis.com/$discovery/rest?version=v4' ],
          'clientId': '176109249735-uorsueki6n45tbnfkvvidicf6k736ink.apps.googleusercontent.com',
          'scope': 'https://www.googleapis.com/auth/analytics.readonly'
        })
        console.log('res', res)
        this.client = res
      } catch(err) {
        console.error('gapiAnalyticsInit', err)
      }
    },
    async getAnalytics() {
      const VIEW_ID = '175414228'; // 네오마
      // const VIEW_ID = '175431921';  // 크스
      const res = await client.request({
        path: 'https://analyticsreporting.googleapis.com/v4/reports:batchGet',
        method: 'POST',
        body: {
          reportRequests: [
            {
              viewId: VIEW_ID,
              dateRanges: [
                {
                  startDate: '7daysAgo',
                  endDate: 'today'
                }
              ],
              metrics: [
                { expression: 'ga:users' }
              ],
              dimensions: [
                  { name: 'ga:userType' }
                  , { name: 'ga:date' }
              ],
              orderBys: [
                  { fieldName: 'ga:date'}
              ]
            }
          ]
        }
      })
      console.log('res', res)
    },
    /* async signin() {
      const gapi = await this.$gapi._load()
      console.log('gapi object :', gapi)
      const client = await this.$gapi._libraryInit('client', { discoveryDocs: [ 'https://analyticsreporting.googleapis.com/$discovery/rest?version=v4' ]})
      console.log('', client)
    },
    async test2() {
      const VIEW_ID = '175414228'; // 네오마
      // const VIEW_ID = '175431921';  // 크스
      // const client = await this.$gapi._libraryInit('client', {discoveryDocs: ['https://analyticsreporting.googleapis.com/$discovery/rest?version=v4']})
      // const res = await this.batch(client, VIEW_ID)
      const client = await this.batchGetClient()
      console.log('client', client)
      const res = await this.batchGet(client, VIEW_ID)
      console.log('res', res)
    },
    async batchGetClient() {
      const batchGet = await this.$gapi._libraryLoad('request')
      return batchGet.init(this.$gapi.config)
    },
    async batchGet(client, VIEW_ID) {
      return client.request({
        path: 'https://analyticsreporting.googleapis.com/v4/reports:batchGet',
        method: 'POST',
        body: {
          reportRequests: [
            {
              viewId: VIEW_ID,
              dateRanges: [
                {
                  startDate: '7daysAgo',
                  endDate: 'today'
                }
              ],
              metrics: [
                { expression: 'ga:users' }
              ],
              dimensions: [
                  { name: 'ga:userType' }
                  , { name: 'ga:date' }
              ],
              orderBys: [
                  { fieldName: 'ga:date'}
              ]
            }
          ]
        }
      })
    },
    async test() {
      const user = await this.$gapi.currentUser()
      console.log('user', user)

      const VIEW_ID = '175414228'; // 네오마
      // const VIEW_ID = '175431921';  // 크스
      this.$gapi.request({
        path: 'https://analyticsreporting.googleapis.com/v4/reports:batchGet',
        method: 'POST',
        body: {
          reportRequests: [
            {
              viewId: VIEW_ID,
              dateRanges: [
                {
                  startDate: '7daysAgo',
                  endDate: 'today'
                }
              ],
              metrics: [
                { expression: 'ga:users' }
              ],
              dimensions: [
                  { name: 'ga:userType' }
                  , { name: 'ga:date' }
              ],
              orderBys: [
                  { fieldName: 'ga:date'}
              ]
            }
          ]
        }
      }).then(result => {
        console.log('req', result)
      })

      this.$gapi.isSignedIn().then(result => {
        console.log(result ? 'Signed in' : 'Signed out')
      })
      this.$gapi.currentUser().then(user => {
        console.log('user', user)
      })
    } */
  }
}
</script>
