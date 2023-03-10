import express from "express";
import os from "os";

const app = express();

app.use("/", async (req, res) => {
  console.log(`I am sending a response ${os.hostname()}`);
  res.json({ message: "Ok it works !", hostname: os.hostname() });
});

app.listen(3000, () => console.log("Server on port 3000"));
