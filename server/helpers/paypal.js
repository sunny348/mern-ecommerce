const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AXuFfa6fQVcLeAMkQ_1z-kMRw77PqSUJTsggVlpKnBr9zYAnZOrp25sVG9P9buRS4eidk5GIqVrNGQp0",
  client_secret: "EPG2pqL69Vs8_KblufeGR5hVbn86RwGRTLinRuG49fHvrrPqlpoa0OiS0qepQlZINxiZhAXOQxYiCudy",
});

module.exports = paypal;
