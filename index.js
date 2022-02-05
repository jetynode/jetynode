const express = require("express");
const compression = require("compression");
const path = require("path");
const { engine } = require("express-handlebars");
const cors = require("cors");
const apiRoutes = require("./routes/api");
const webRoutes = require("./routes/web");
var bodyParser = require("body-parser");
const app = express();

app.use(cors({ origin: "*" }));

// compress all responses : https://github.com/expressjs/compression
app.use(compression());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//Added Api routus in app
app.use("/api", apiRoutes);

//Added Web routus in app
app.use("/", webRoutes);

//set view template engine
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", engine({ defaultLayout: "layout" }));
app.set("view engine", "handlebars");

// /* Error handler middleware */
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   console.error(err.message, err.stack);
//   res.status(statusCode).json({
//     code: 500,
//     message: "Somthing Wrong",
//     error: err.message,
//   });
//   return;
// });
// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
// This should be the last route else any after it wont work
app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

app.set("port", process.env.PORT || 7000);
app.listen(app.get("port"), () => {
  console.log(`Example app listening at http://localhost:${app.get("port")}`);
});
