import redis = require("redis");

const client = redis.createClient();

client.connect();

client.on("error", (err) => {
  console.log("Redis error : ", err);
});

client.on("ready", () => {
  console.log("Redis is ready");
});

export default client;
