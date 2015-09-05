/*var name = 'name';

console.log(name);

var name = 'test'

function name(){
	console.log('study')
}

name();




//실행순서
var name;
function name(){}

name = 'name'
console.log(name)
name();
*/

/*
//객체

var name;
var age
var job;

function getName(){}


var user = {} //객체 생성
//var user = new Object();
//var array = new Array();
user.age = 11;
user.name = 'rline';
console.log(user.age)
console.log(user.name)


var users = {
	age:10,
	showAge : function(){
		console.log(this.age)
	}
}
users.showAge();

*/

$(function(){

	//js 호출시 바로 시작될 영역
	user.init();
	
});

var user = {
	$el : {},
	init : function(){

		//기본적인 이벤트 바인딩
		this.$el = $('.container');

		this.$el.find('#btnSignUp').click(function(){
			user.showModal();
		});

		this.$el.find('#btnClose').click(function(){
			user.closeModal();
		});
	},
	showModal : function(){
		this.resetModal();
		this.$el.find('#userModal').modal();

	},
	closeModal : function(){
		this.$el.find('#userModal').modal('hide');
	},
	resetModal : function(){
		alert('resetModal 실행')
		this.$el.find('.signForms').val('');
	}
}






































