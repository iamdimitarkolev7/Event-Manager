# Event-Manager

A web application which helps event organizers to manage their events and also helps other people to look for a suitable event for them.

![Screenshot](pic.png)

## Technologies:
* Backend: Express.js, Node.js, MongoDB
* Frontend: React

## Functionalities:
* Registration and login of users;
* Users can create, edit and  delete their events;
* Other users can like the events and see details about the event which they find interesting.

## Steps to run the project locally: 
* Clone the repo.
* Switch to `development` branch for running in development mode.
* Make sure you have `npm` Node.js & MongoDB installed in your system.
* Create a `.env` file in the server directory.
* It should include the database url, port, secret and cookie-name
  ###### .env file example
  *DB_URL=mongodb+srv://***:***@event-manager.ul235.mongodb.net/***?retryWrites=true&w=majority*<br/>
  *PRIVATE_KEY=secret*<br/>
  *PORT=4000*<br/>
  *COOKIE=x-auth-token*<br/>
  <br/>
* Enter the `server` folder and run `nodemon`.
* Then enter the `client` folder and run `npm start`.
* Go to `http://localhost:3000` to see the application running.
