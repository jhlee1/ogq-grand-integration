<template>
  <div>
<button label="TEST" @click="getGoogleAnalytics">test</button>
  </div>
</template>

<script>
	import gAPI from '@/gapi/analytics'

	export default {
		name: 'dashboard',
		mounted() {},
		methods: {
			async getGoogleAnalytics() {
				try {
                    const test = await this.gapiAnalyticsInit()
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
                    //'clientId': '759830993627-j9p2qbkg3f9559tcs16pldih0d5bp5no.apps.googleusercontent.com',
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
                    // 'clientId': '759830993627-j9p2qbkg3f9559tcs16pldih0d5bp5no.apps.googleusercontent.com',
                    'scope': 'https://www.googleapis.com/auth/analytics.readonly'
                    })
                    console.log('res', res)
                    this.client = res
				} catch (err) {
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
									{expression: 'ga:users'}
							],
							dimensions: [
									{name: 'ga:userType'}
									, {name: 'ga:date'}
							],
							orderBys: [
									{fieldName: 'ga:date'}
							]
							}
					]
				}})
				console.log('res', res)
			},
		}
	}
</script>

<style scoped>

</style>
