//import { readFile } from "fs";
import { readFile } from "fs/promises";
import fs from "fs/promises";
import http from "http";

const petRegExp = /^\/pets\/(.*)$/;

const server = http.createServer((req, res) => {
  //When receiving a GET request to /pets
  const matches = req.url.match(petRegExp);
  const url = new URL("http://localhost:3000" + req.url);
  console.log(url);
  if (url.pathname === "/pets" && req.method === "GET") {
    readFile("pets.json", "utf-8")
      .then((str) => {
        const data = JSON.parse(str);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
      })
      .catch((err) => {
        if (err) throw err;
      });
  } else if (matches && req.method === "GET") {
    const id = matches[1];
    readFile("pets.json", "utf-8")
      .then((str) => {
        const data = JSON.parse(str);
        if (data[id]) {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(data[id]));
        } else {
          res.writeHead(404);
          res.end();
        }
      })
      .catch((err) => {
        if (err) {
          res.writeHead(404);
          res.end();
        }
      });
  } else if (req.url === "/pets" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const newPet = JSON.parse(body);
      readFile("pets.json", "utf-8").then((str) => {
        const existingPets = JSON.parse(str);
        existingPets.push(newPet);
        return writeFile("pets.json", JSON.stringify(existingPets)).then(() => {
          res.setHEader("Content-Type", "application/json");
          res.end(JSON.stringify(newPet));
        });
      });
    });
  }
});

server.listen(3000, () => {
  console.log("server started on port 3000");
});
