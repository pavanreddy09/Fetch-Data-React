const express = require("express");
const cors = require("cors");
const { onValue, ref } = require("firebase/database");
const { firedatabase } = require("./firehandler");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/sendData", (req, res) => {
  const reference = ref(firedatabase, `Students/${req.query.usn}`);
  onValue(reference, (snapshot) => {
    res.send(snapshot.val());
  });
});

app.listen(PORT, () => {
  console.log("running");
});
