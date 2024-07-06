import express from "express";

let server = express();

let port = 8000;

server.get("/", (req, res) => {
  res.send({ requestType: "Get" });
});

server.post("/", (req, res) => {
  res.send({ reqType: "POST" });
});

server.put("/", (req, res) => {
  res.send({ reqType: "PUT" });
});

server.patch("/", (req, res) => {
  res.send({ reqType: "Patch" });
});

server.delete("/", (req, res) => {
  res.send({ reqType: "delete" });
});

server.listen(port, () => {
  console.log("Server is running at ", port);
});
