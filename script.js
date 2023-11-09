const express = require("express"); // saving express from require("express") and store it in variable express u can make any name instead of express like cat dog, human any name , but consider express for understanding.

const app = express(); // now saving again express() function into app and now app and because of () i m running the express. u can see i wrote express()- ()means i m running this.
app.set("view engine", "ejs"); // past in script file
app.use(express.static("./public")); // past in script file
const port = 3000; // port number localhost:3000 write it in url example google.

//app.use(function (req, res, next) {
// request ,response, and next() for push.
// console.log("I am running first from every route ");
// next(); // push to next() means go to next route for example -- read more in docs express.js
//}); // middleware is a function which runs first from every route

app.get("/", (req, res) => {
  res.render("index");
}); // this is my route "/" is saying what is send u can see the code

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.get("/error", (req, res) => {
  throw new Error("something went wrong");
});
// error handling source documentation  express.js
app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

// this is my route "/profile" is saying profile route express code! run this localhost:3000/profile
// npm i nodemon for run

//-------------------------------- dynamic routing-----------------------------------
// app.get("/profile/:username", (req, res) => {
//   res.render(`profile route express code! ${req.params.username}`);
// }); // this is my route "/profile" is saying profile route express code! run this localhost:3000/profile/ankit
app.listen(port);

//-dynamic routing  /profile/:userName by using req.params.username,
// : to make the router dynamic and use req,params.
// www.books.com/author/name/:username -req.params.username--- example

//-------------------------------template engine-----------------------
// ejs is with html with superpowers- calculate
//1, npm i ejs.
//2, configure  ejs.
//3, app.set("view engine", "ejs")
//4, imp - views folder
//5,  use in ejs files
//6,  do render instead send - example line number 13

//----------------------static files ----------------------------

// static file setup
// create a folder called public
// img. stylesheet, javascript
// configure the express statics
