const app = require("../index");
const connect = require("../config/db");

app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log("listening on port 8787");
  } catch (err) {
    console.log(err);
  }
});
