const app = require("../index");
const connect = require("../config/db");

app.listen("8787", async () => {
  try {
    await connect();
    console.log("listening on port 8787");
  } catch (err) {
    console.log(err);
  }
});
