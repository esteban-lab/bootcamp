const express = require("express");
const app = express();


//antes de los endpoints usamos middlewares

app.use(express.json());

app.get("/", (req,res)=> {
    res.json({message:"peticion recibida correctamente"});
});

app.get("/:user", (req,res)=> {
    let user =req.params.user;
    res.json({message:`peticion Get con parametro: ${user}`});
});


app.post("/newuser", (req,res)=> {
    let body = req.body;

    if(body.newuser){
        res.status(200).json({message:`recibido name: ${body.newuser}`});
    }else {
        res.status(400).json({ok: false, message:"el name es obligatorio"});;
    }

   
});


app.listen(3000);


