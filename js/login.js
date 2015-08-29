var myEmail ="dogmarose@naver.com";
var myPassword = "1234";

//js 파일 로딩될 때 바로 시작
$(function(){

	$('#btnLogin').click(showEmail);

	$('font').hide();

});

function showEmail(){
	var email = $('#inputEmail').val();
	var password = $('#inputPassword').val('test');
	var password2 = $('#inputPassword').val();
	alert('email : ' + email +  '\n password : ' + password + '\n password2 : ' + password2);
}