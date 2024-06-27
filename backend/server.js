const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors())
const db = mysql.createConnection({
    host  : "localhost",
    port: 3306,
    user: "root",
    password : "",
    database : "bulkapp"
})


 app.get("/login", (req, res) => {
    const sql = "SELECT * FROM `student`";
    db.query(sql, (err, data) => {
         if(err) return res.json("error in database");
          return res.json(data);
    })
 })


app.listen(8082,() => {
    console.log("working my server");
})