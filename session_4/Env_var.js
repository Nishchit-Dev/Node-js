 const express = require('express');

 const app = express();

 app.get('/', (req, res) => {
         res.send("hello")
         console.log("connected to the services")

     })
     // ports

 const r = process.env.PORT || 3000;

 app.listen(r, () => {
     console.log(`listening the port ${r}....`)
 })