// Program a custom submit function for the form
$('form#data').submit(function (event) {
  //disable the default form submission
  event.preventDefault()
  // grab all form data
  var formData = new FormData($(this)[0])
  formData.append('language', 'eng')
  formData.append('apikey', 'helloworld')
  formData.append('isOverlayRequired', true)

  $.ajax({
    url: 'https://api.ocr.space/parse/image',
    type: 'POST',
    data: formData,
    async: true,
    cache: false,
    contentType: false,
    processData: false,
    success: function (returndata) {
      document.getElementById('receipt').style.display = 'inline'
      console.log(returndata)
      $('.ocr-result').html(returndata.ParsedResults[0].ParsedText)
      returndata.ParsedResults[0].TextOverlay.Lines.forEach(function (e) {
        e.Words.forEach(function (e) {
          var td0 = document.createElement('td')
          var td1 = document.createElement('td')
          var td2 = document.createElement('td')
          var td3 = document.createElement('td')
          var td4 = document.createElement('td')

          var tr = document.createElement('tr')
          td0.innerHTML = e.WordText
          td1.innerHTML = e.Height
          td2.innerHTML = e.Left
          td3.innerHTML = e.Top
          td4.innerHTML = e.Width

          tr.appendChild(td0)
          tr.appendChild(td1)
          tr.appendChild(td2)
          tr.appendChild(td3)
          tr.appendChild(td4)
          document.getElementById('tbody').appendChild(tr)
        })
      })
    }
  })
  return false
})
