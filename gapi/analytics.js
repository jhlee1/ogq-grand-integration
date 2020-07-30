import googleRequest from '@/utils/googleRequest'

const ANALYTICS_URL = 'https://content-analyticsreporting.googleapis.com/v4/reports:batchGet?alt=json'
const VIEW_ID = '175414228'; // 네오마
// const VIEW_ID = '175431921';  // 크스
export default {
  postLogin (token) {
    // googleRequest.defaults.headers.common['authorization'] = 'Bearer ' + token
    googleRequest.defaults.headers.get['authorization'] = 'Bearer ' + token
    googleRequest.defaults.headers.post['authorization'] = 'Bearer ' + token
    /* googleRequest.defaults.headers.post['x-origin'] = 'http://dev.creators.ogq.me:3000'
    googleRequest.defaults.headers.post['x-referer'] = 'http://dev.creators.ogq.me:3000' */

  },
  getAnalytics () {
    const params = {
      reportRequests: [{
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
    ]}
    return googleRequest.post(ANALYTICS_URL, params)
  }
}