const routes = {
  "GET /getScores": {
    controller: "score",
    action: "getScores"
  },
  "POST /submitEntry": {
    controller: "score",
    action: "submitEntry"
  },
  "/:controller/:action/:id?": {}
};

export default routes;
