export function loadGoogleSdk (params) {
  const el = document.getElementById('auth2_script_id')
  if (el) {
    return
  }
  window.onGapiLoad = () => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init(Object.assign({}, params))
    })
  }
  const gplatformScript = document.createElement('script')
  gplatformScript.setAttribute('src', 'https://apis.google.com/js/platform.js?onload=onGapiLoad')
  gplatformScript.setAttribute('async', true)
  gplatformScript.setAttribute('defer', 'defer')
  gplatformScript.setAttribute('id', 'auth2_script_id')
  document.head.appendChild(gplatformScript)
}
