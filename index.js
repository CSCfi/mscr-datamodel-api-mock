const app = require("express")();
const http = require("http");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

http.createServer(app).listen(9004);
console.log("Listening at:// port:%s (HTTP)", 9004);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

require("./src/endpoints")(app);
