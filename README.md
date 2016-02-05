##Description

FinTacToe is a WDI Project 4 created by @lanbau & @chuckberry1974 . It is a web application for business users to operate their business from one integration platform that is aimed to improve business productivity & agility. This project is deployed on Heroku: https://fintactoe.herokuapp.com

##Features (Brief Overview)
1. Optical Character Recognition (OCR): Image to text
- Using OCR.space API, users are able to
  - upload an image file (JPEG/PNG) & send a post request to OCR API web service
  - The web service will respond a JSON object which contains the recognised words within the image
  - The JSON response object contains the following details:
    - WordText
    - Height
    - Width
- Use Case: Businesses that want to digitalize their accounting softwares.

2. Speech to Text (Artificial Intelligence)
- Using api.ai service, users are able to give sample queries to the web application & it will return the respective response.
- Use Case: Business owners can automate certain tasks by simply speaking to the application. For example, a business owner can retrieve various database records based on the commands given.

3. Google Glass Mirror API + Uber API
- Users are able to get Google Glass Mirror location (latitude & longitude) and retrieve a list of Uber drivers near that location.

##Technologies Used
- Express
- HTML
- CSS
- JavaScript
- Semantics UI
- JQuery
- Api.ai
- Uber API
- Mirror API
- OCR API
- Stormpath

###Installation Instructions
``` javascript
In order for the application to work, you need to retrieve API Keys from the following services:
- stormpath API
- OCR.space
- Uber API
- Google Mirror API
- api.ai API
- clone this repo
- add API keys in bash profile
- npm install
- npm start
- visit http://localhost:3000 in your browser
```
