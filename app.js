var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

/*
	DB 연동시 삭제될 부분
*/
var currentTime = new Date();
var users = [{
	email : '1',
	password : '1',
	name:'1',
	job:'1',
	joinDate : currentTime,
	updateDate : currentTime
},
{
	email : '2',
	password : '2',
	name:'2',
	job:'2',
	joinDate : currentTime,
	updateDate : currentTime
}]

//path ----
app.use(express.static(path.join(__dirname, '')));

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname + '/view/login.html'));
});

//!-- path ----


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/email',function(req,res){
	var email = req.body.email;
	var result = {
		status : false
	};

	for (var i=0;i<users.length;i++){
		if(email === users[i].email){
			result.status = true;
			result.messge = '중복된 사용자';
			break;
		}
	}
	res.send(result);
});

//first ---
app.get('/user', function(req,res){
	res.send(users);
});

app.get('/user/:idx', function(req,res){
	res.send(users[req.params.idx]);
});

app.listen(8080);
console.log('Express Listening on port 8080...');

//!-- first -------