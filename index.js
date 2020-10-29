const express = require("express"); 
const app = express(); 
const PORT = process.env.PORT || 8080; 

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/todos_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}.`); 
}); 