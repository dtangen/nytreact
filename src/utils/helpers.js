var axios = require("axios");

var helper = {

  runQuery: function(location) {

    console.log(location);

  },

  getArticles: function() {
    return axios.get("/api");
  },

  postArticle: function(location) {
    return axios.post("/api", { location: location });
  }
};

module.exports = helper;