function makeRequest() {
  var request = gapi.client.mirror.locations.list({
    'fields':'items'
  });
  request.then(function(response) {
      console.log(response)
      fetch('/glass', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: response,
          login: 'hubot',
        })
      })
  })
}
function auth() {
  var config = {
      'client_id': '82458604167-4sdleauovi5h33p4v3m3ud7l01r5jhua.apps.googleusercontent.com',
      'scope': [
          'https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/glass.timeline',
          'https://www.googleapis.com/auth/glass.location'
      ]
  }
  gapi.auth.authorize(config, function () {
      console.log('login complete');
      console.log(gapi.auth.getToken());
       gapi.client.load('mirror', 'v1', makeRequest)
  })
}
