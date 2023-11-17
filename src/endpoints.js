const frontend = require("./frontend");
const schema = require("./schema");
const crosswalk = require("./crosswalk");
const admin = require("./admin");
const user = require("./user");

module.exports = function (app) {
  app.put("/datamodel-api/v2/schemaFull", (req, res) => {
    /*  #swagger.tags = ['Schema']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(schema.add(true));
  });
  app.put("/datamodel-api/v2/schema", (req, res) => {
    /*  #swagger.tags = ['Schema']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(schema.add(true));
  });
  app.put("/datamodel-api/v2/schema/:pid/upload", (req, res) => {
    /*  #swagger.tags = ['Schema']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(schema.upload(true));
  });
  app.get("/datamodel-api/v2/schema/original", (req, res) => {
    /*  #swagger.tags = ['Schema']
     */
    res.setHeader("Content-Type", "text/turtle");
    return res.status(200).send(schema.getOriginal(true));
  });
  app.get("/datamodel-api/v2/schema/internal", (req, res) => {
    /*  #swagger.tags = ['Schema']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(schema.getInternal(true));
  });
  app.get("/datamodel-api/v2/schema/:pid", (req, res) => {
    /*  #swagger.tags = ['Schema']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(schema.get(true));
  });
  app.post("/datamodel-api/v2/schema/:pid", (req, res) => {
    /*  #swagger.tags = ['Schema']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(schema.add(true));
  });

  /**** CROSSWALK */
  app.put("/datamodel-api/v2/crosswalkFull", (req, res) => {
    /*  #swagger.tags = ['Crosswalk']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(crosswalk.add(true));
  });
  app.put("/datamodel-api/v2/crosswalk", (req, res) => {
    /*  #swagger.tags = ['Crosswalk']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(crosswalk.add(true));
  });
  app.put("/datamodel-api/v2/crosswalk/:pid/upload", (req, res) => {
    /*  #swagger.tags = ['Crosswalk']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(crosswalk.upload(true));
  });
  app.get("/datamodel-api/v2/crosswalk/original", (req, res) => {
    /*  #swagger.tags = ['Crosswalk']
     */
    res.setHeader("Content-Type", "text/xml");
    return res.status(200).send(crosswalk.getOriginal(true));
  });
  app.get("/datamodel-api/v2/crosswalk/:pid", (req, res) => {
    /*  #swagger.tags = ['Crosswalk']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(crosswalk.get(true));
  });
  app.post("/datamodel-api/v2/crosswalk/:pid", (req, res) => {
    /*  #swagger.tags = ['Crosswalk']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(crosswalk.add(true));
  });

  /**** FRONTEND */
  app.get("/datamodel-api/v2/frontend/searchModels", (req, res) => {
    /*  #swagger.tags = ['Crosswalk']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(frontend.searchModels(true));
  });
  app.get("/datamodel-api/v2/frontend/organizations", (req, res) => {
    /*  #swagger.tags = ['Crosswalk']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(frontend.organizations(true));
  });

  app.get("/datamodel-api/v2/frontend/filters", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(frontend.filters());
  });


  app.get("/datamodel-api/v2/schemas", (req, res) => {
    /*
     */
    res.setHeader("Content-Type", "application/json");
    const organization = req.params.organization;
    const status = req.params.status;

    const result = schema
      .getAllSchemas(true)
      .sort(
        (x) =>
          x.status === status &&
          x.organizations.includes((y) => y.id == organization)
    );
    return res.status(200).send(result);
  })
  /**** FRONTEND */
  app.get("/datamodel-api/v2/frontend/searchModels", (req, res) => {
    /*  #swagger.tags = ['Frontend']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(frontend.searchModels(true));
  });
  app.get("/datamodel-api/v2/frontend/organizations", (req, res) => {
    /*  #swagger.tags = ['Frontend']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(frontend.organizations(true));
  });

  app.get("/datamodel-api/v2/frontend/mscrSearch", (req, res) => {
    /*  #swagger.tags = ['Frontend']
     */
    const type = req.query.type;
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(frontend.mscrSearch({ "_type": type }));
  });


  app.get("/datamodel-api/v2/frontend/mscrSearchPersonalContent", (req, res) => {
    /*  #swagger.tags = ['Frontend']
     */
    const type = req.query.type;
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(frontend.mscrSearchPersonalContent({ "_type": type }));
  });

  app.get("/datamodel-api/v2/frontend/mscrSearchOrgContent", (req, res) => {
    /*  #swagger.tags = ['Frontend']
     */
    
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(frontend.mscrSearchOrgContent());
  });

  
  /*** ADMIN */
  app.get("/datamodel-api/v2/fakeable-users", (req, res) => {
    /*  #swagger.tags = ['Crosswalk']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(admin.fakeableUsers(true));
  });

  /*** USER */
  app.get("/datamodel-api/v2/user", (req, res) => {
    const options = {
      expires: new Date(Date.now() + 900000),
      httpOnly: true, // The cookie only accessible by the web server
      domain: "localhost",
      path: "/",
    };
    res.cookie("JSESSIONID", "test".options);

    return res.status(200).send(user.user(true));

  });

  /*** ADMIN */
  app.get("/v2/fakeable-users", (req, res) => {
    /*  #swagger.tags = ['Crosswalk']
     */
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(admin.fakeableUsers(true));
  });

  /*** AUTH */
  app.get("/api/auth/fake-login", (req, res) => { });

  /*** USER */
  app.get("/v2/user", (req, res) => {
    return res.status(200).send(user.user(true));
  });
};
