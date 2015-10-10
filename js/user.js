// DB 연동시 삭제될 부분
var currentTime = new Date();
var users = [{
		email : '1',
		password : '1',
		name : '1',
		job : '1',
		joinDate : currentTime,
		updateDate : currentTime
},
{
		email : '2',
		password : '2',
		name : '2',
		job : '2',
		joinDate : currentTime,
		updateDate : currentTime
}];

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

		this.$el.find('#btnSubmit').click(function(){
			user.signUp();
		});

		this.$el.find('#btnLogin').click(function(){
			user.login();
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
		this.$el.find('.signForms').val('');
	},

	signUp : function(){
		var email = this.$el.find('#inputEmail').val(),
			password = this.$el.find('#inputPassword').val(),
			passwordConfirm = this.$el.find('#inputPasswordConfirm').val(),
			name = this.$el.find('#inputName').val(),
			job = this.$el.find('#inputJob').val();
		
		var currentTime = new Date();

		// 1. 입력창에서 빈칸은 없는가?
		if(!this.validate()){
			alert('필수값을 모두 채워주세요');
			return;
		}
		
		// 2. password와 passwordConfirm이 같은가?
        if(password !== passwordConfirm){
            alert('패스워드가 일치하지 않습니다.');
            return;
        }
	
		// 3. 이미 등록된 사용자가 아닌가?
		this.save({
					email : email,
					password : password,
					name : name,
					job : job,
					joinDate : currentTime,
					updateDate : currentTime
		});

	},

	validate : function(){
		var $signForms = this.$el.find('.signForms'),
			result = true;

		$.each($signForms, function(index, signForm){
			var $signForm = $(signForm);

			if(!$signForm.val()){
				$signForm.addClass('empty');
				result = false;
			}else{
				$signForm.removeClass('empty');
			}
		});

		return result;
	},

	//DB 연동시 수정
	find : function(obj){
		var result;
		var _ = this;


		$.ajax({
			method: 'POST',
			url: 'email',
			data:obj,
			dataType:'json',
			success:function(data){

				alert(data.status);
				if(data.status){
					_.save(obj);
					_.closeModal();
				}else{
					alert('이미 가입된 사용자입니다.')
				}
			}
		});
		
	},

	//DB 연동시 수정
	save : function(obj){

		var _ = this;

		$.ajax({
			method: 'POST',
			url: 'user',
			data:obj,
			dataType:'json',
			success:function(data){

				alert(data.status);

				if(data.status) {
					alert('등록 되었습니다.')
					_.closeModal();
				}else{
					alert('이미 가입된 사용자입니다.')
				}
			}
		});
		

	},

	login : function(obj){

		var _ = this;

		// var email = this.$el.find('#loginEmail').val(),
		// 	password = this.$el.find('#loginPassword').val();

		var email = this.$el.find('#inputEmail').val(),
			password = this.$el.find('#inputPassword').val(),
			passwordConfirm = this.$el.find('#inputPasswordConfirm').val(),
			name = this.$el.find('#inputName').val(),
			job = this.$el.find('#inputJob').val();			

		if(password == passwordConfirm){
            alert('패스워드가 일치하지 않습니다.');
            return;
        }

		
		$.ajax({
			method: 'post',
			url: 'login',
			data:obj,
			dataType:'json',
			success:function(data){

				alert(data.status);

				if((password == passwordConfirm)) {
					alert('로그인 성공')
					_.closeModal();
				}else{
					alert('이메일, 패스워드 확인하세요')
				}
			}
		});

		// 1. ajax로 email과 패스워드 전송
		// 2. 해당 회원이 존재하고 패스워드가 같으면 alert('로그인 성공'); 없으면 alert('이메일, 패스워드 확인하세요');

		



	}
}