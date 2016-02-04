// GAPI Callback
function makeRequest () {
  var request = gapi.client.mirror.locations.list({
    'fields': 'items'
  })
  request.then(function (response) {
    console.log(response)
    fetch('/glass', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: response
      })
    }).then(function (response) {
      return response.json()
    }).then(function (json) {
      console.log(json.products)
      // this row belongs to table head
      var tr = document.createElement('tr')
      Object.keys(json.products[0]).forEach(function (e) {
        if (e === 'price_details') {
          console.log('price')
        }
        else {
          var th = document.createElement('th')
          th.innerHTML = e
          tr.appendChild(th)
          document.getElementById('thead').appendChild(tr)
        }
      })
      json.products.forEach(function (obj) {
        var tr = document.createElement('tr')
        Object.keys(obj).forEach(function (key) {
          var value = obj[key]
          if (typeof value === 'object'){
            console.log('hi')
          }
          else {
            console.log(value)
            var td = document.createElement('td')
            td.innerHTML = value
            tr.appendChild(td)
            document.getElementById('tbody').appendChild(tr)
          }
        })
      })
    })
  })
}
// Executed On Button Click
function auth () {
  var config = {
    'client_id': '82458604167-4sdleauovi5h33p4v3m3ud7l01r5jhua.apps.googleusercontent.com',
    'scope': [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/glass.timeline',
      'https://www.googleapis.com/auth/glass.location'
    ]
  }
  gapi.auth.authorize(config, function () {
    console.log('login complete')
    console.log(gapi.auth.getToken())
    gapi.client.load('mirror', 'v1', makeRequest)
  })
}
