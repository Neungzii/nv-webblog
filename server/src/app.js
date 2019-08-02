let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./routes')(app)

app.get('/status', function (req , res){
    res.send('Hello nodejs sever')	
})

app.get('/hello/:person', function (req, res){
    console.log('hello -'+ req.params.person)
    res.send('sey hello with ' + req.params.person)
})

//Get user by Id
app.get('/user/:userId', function (req, res){
    res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userId)
})

//Get all user
app.get('/users', function(req, res){
    res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
})

//Create User
app.post('/user/', function(req,res){
    res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
})

//Edit user
app.put('/user/:userId', function(req,res){
    res.send('ทำการแก้ไขผู้ใช้งาน : ' + req.params.userId + ' : ' + JSON.stringify(req.body))
})

//Delete user
app.delete('/user/:userId', function(req,res){
    res.send('ทำการลบผู้ใช้งาน : ' + req.params.userId + ' : ' + JSON.stringify(req.body))
})

// Port status
let port = 8081
app.listen(port, function(){  
    console.log('server runing on ' + port)	
})