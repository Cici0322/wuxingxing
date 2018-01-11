require(["config"], function(){
	require(["jquery","cookie","load"], function($,cookie){
		$("#onlogin").click(function(e){
			$.cookie.json = true;
			e.preventDefault()?e.preventDefault():e.returnValue = false;
			var _usertel = $("#shouji").val(),
			_password = $("#mm").val();
			
			var strURL = `http://10.7.187.111/cici/login.php?name=${_usertel}&password=${_password}`;
			$.ajax({
				url: strURL,
				type: "GET",
				dataType:"json",
				success:function(data){
					//保存cookie
					$.cookie("_usertel",_usertel, { path: '/' } );
					console.log("login正确....")
					console.log($.cookie("_usertel"))
					location.href="/index.html";	
				},
				error:function(msg){
             		console.log("login错误")        
  				}
			});

	    });		
	});
});