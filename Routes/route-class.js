class RestfulAPI {
  constructor(resourceName, app, model){
    this.resource = resourceName;
    this.app = app;
    this.model = model;
  };
  create(){
    this.app.post(`/${this.resource}`, (req,res) => {
      this.model.create(req.body)
        .then( (data) => {
          res.json(data);
        })
        .catch( (err) => {
          res.json(err);
        });
    });
  };

} 

module.exports = RestfulAPI;