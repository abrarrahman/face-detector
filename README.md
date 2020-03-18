## Face Detector
This is a demo application to show how an external API can be called from a server to respond to user input. Here I have used a backend API made using Express for Node.js to call the Clarifai API to use its face detection feature.<br />

Users can either register or login to get started. The interface allows a url to be pasted into a search bar.
The url will be used to display the image. The image is also sent to the Clarifai API to detect whether any faces exist and the coordinates of where this face resides in this image. This information when returned from the Clarifai API is used to draw a box around the face in the image and display it on the client side.<br />

The user database is managed with PostgreSQL that connects to our Node server using knex.
This project has been deployed for free on heroku and you can check it out using the link in the description.
Please note: 
The server goes to sleep after some period of inactivity so it takes a while for it to respond the first time.
Clarifai can only accept secure urls so please use links to images that start with https://

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Using this project

In the project directory, you should first run:

### `npm install`

Installs any dependancies in the package.json <br />

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
