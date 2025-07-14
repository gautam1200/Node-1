let express = require("express")
let fs = require("fs")

let app = express()

let datajson = fs.readFileSync('./data.json')
let data = JSON.parse(datajson)

app.set("view engine","ejs")

app.get('/',function (req,res) {
    res.render('data',{data})
})
  
app.get('/product/:id', function (req, res) {
    let id = req.params.id 
    let product = data[id]; 
    res.render('product', { data: product });
});
  
app.get('/product',function (req , res){
    res.render('product',{product})   
})   
     
 
app.listen(3333)
