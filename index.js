import express from 'express';

const app = express()

app.get("/", (req, res) => {
  res.send("ok now is working now");
});


app.listen(4000)
console.log('Server on port', 4000)