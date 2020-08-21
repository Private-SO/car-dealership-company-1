const { get } = require("request");

module.exports.datastores = {
  default: {
    adapter: "sails-mysql",
    // url: global.url,
    url:
      "mysql://admin:admin12345@cloud-project.cikbeszs0uzj.us-east-1.rds.amazonaws.com:3306/carDealer",
  },
};
