<template>
  <div>
  </div>
</template>

<script>

export default {
  name: 'main',
  data() {
    return {
      text: '',
      auth2: undefined,
      client: undefined
    }
  },
  beforeMount () {
    const nextPage = this.isLoggedIn() ? '/dashboard' : '/login'
    this.$router.push(nextPage)
  },
  mounted() {

  },
  methods: {
    isLoggedIn() {
      const cookie = document.cookie.match('(^|;) ?token=([^;]*)(;|$)')
      return !!cookie
    }
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
