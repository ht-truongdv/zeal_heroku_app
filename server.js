const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "/api"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */
app.use('/dist', express.static('dist'));
app.use('/src', express.static('src')); 

const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
// app.get(/.*/, function (req, res) {
// 	res.sendFile(path.join(__dirname, '/dist/index.html'))
// })
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
app.use((req,res) =>{
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})