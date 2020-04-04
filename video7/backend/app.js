const express =require('express')
var request = require('request')
var cors = require('cors')
var bodyParser = require("body-parser");
const app = express()
const port = 5000
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.get("/",(req,res)=>
{
    res.send("hello world");
});
app.post("/getinfo",(req,res)=>
{
    console.log("posted data");
    res.send("triggered"+req.body.name+" "+req.body.age);
})
app.get("/getinfo",(req,res)=>
{
    request(
        "http://dummy.restapiexample.com/api/v1/employees",
        (error,response,body)=>
        {
            if(!error && response.statusCode==200)
            {
                var parseBody = JSON.parse(body);
                res.send(parseBody["data"]);
            }
        }
    )
})
app.listen(port,()=> console.log("server started in the port 5000"))
