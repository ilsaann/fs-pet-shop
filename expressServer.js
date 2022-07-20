import express from express;
import { readFile } from "fs/promises"
const app = express();
const PORT = 3000

app.use(express.json());

app.get('/pets', (req,res, next) =>{
    readFile("pets.json", "utf-8").then(str => {
        const pets = JSON.parse(str);
        if(pets) {
            res.send(pets)
        } else {
            res.status(400);
            res.send("Wrongo in the Congo")
        }
       
    }).catch(next);
});

app.get("/pets/:index", (req, res, next) =>{
    const index = req.params.index
    readFile("pets.json", "utf-8").then(str => {
        const pets = JSON.parse(str);
        if (pets[index]){
            res.send(pets[index])
        } else {
            res.status(400);
            res.send(`Invalid index given: ${index}`)
        }
        
    }).catch(next) 
})

app.use((err, req, res, next) => {
  if (err) {
    log(err);
    res.sendStatus(500);
  }
})

app.listen(PORT, () => {
    console.log (`listenign on port ${PORT}`)
})





//BITS OF TRIAL AND ERROR I MAY REVISIT LATER//////////////////////////////////////////


// app.post("/pets", (req, res) => {
//     console.log(req.body);
//     res.set('Content-Type', 'application/json')
    
//     res.send()
// })
// const petRouter = require("./pets");
// app.use(petRouter);


// const myLogger = function (req, res, next) {
//     console.log(req.ip)
//     next();
// }


// app.use(myLogger);