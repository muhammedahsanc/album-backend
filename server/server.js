const app = require("../app");
require("dotenv").config();
const port = 4000 ?? 7000;

app.listen(port, () => {
  console.log("server running on", port);
});
