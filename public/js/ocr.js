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
      console.log(returndata)
      $('.ocr-result').html(returndata.ParsedResults[0].ParsedText)
      returndata.ParsedResults[0].TextOverlay.Lines.forEach(function (e) {
        e.Words.forEach(function (e) {
          console.log(e.WordText)
        })
      })
    }
  })
  return false
})
