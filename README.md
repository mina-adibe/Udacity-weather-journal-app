Table of Contents
Project Info
List of files
Functions
Project_Info
Project uses node.js to set up a server. User inputs his zip code and additional text in the textbox. The data is sent to the server which checks the weather for that zip code at Open Weather Map API sends it back to the client side and updates the DOM with it. All data is also saved in a variable on the server side.

List_Of_Files
website

app.js
index.html
style.css
server.js README.md

Functions
Server side (server.js)

Setup express server, body parser and cors.
sendData() Setup a route to send all the project data.
addData() Setup a route to receive new data entry and store it in an array.
Client side (app.js)

performAction() Runs the rest of the funcions in specific order after the submit button is clicked.
postApiData() Fetches the weather from the Open Weather MAp API for the input zip code.
postData() Sends the data from the API with the text from the website textbox to the server.
updatePage() Fetches the latest entry from the server and updates the DOM with it.
