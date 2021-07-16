const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, () => {
  console.log("서버 접속 포트는 8080포트 입니다.");
});

app.get("/", (res, req) => {
  req.sendFile(__dirname + "/index.html");
});

app.get("/write", (res, req) => {
  req.sendFile(__dirname + "/write.html");
});

app.post("/add", (res, req) => {
  req.send("전송완료");
  console.log(res.body.title);
  console.log(res.body.date);
});
