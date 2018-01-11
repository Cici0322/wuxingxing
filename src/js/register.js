require(["config"], function(){
	require(["jquery","cookie","load"], function($,cookie){
		//密码提示
		$(".in #psw").click(function info(){
			$(".in #info").css({
				display : "block",
			})
		})
		$(".in #psw").blur(function info(){
			//密码提示
			$(".in #info").css({
				display : "none",
			})
		})
		$(".in #psw").keyup(function verification(){
			var level = 0;
			//密码验证规则
			$([/[a-z]/g,/[0-9]/g,/[A-Z]/g,/\W/g,/.{6,12}/g,/.{13,20}/g]).each((index,reg)=>{
				reg.test($(this).val()) ? level++ : level
			});
			if(level <= 2){
				$(".in span").first().css({
					background : "red",
					color: "white",
				});
				$(".in #info p .first").css({
					backgroundPosition: "-553px -33px",
				})
			}else if(level < 5){
				$(".in span").not($(".in span")[2]).css({
					background : "yellow",
					color: "white",
				});
			}else{
				$(".in span").css({
					background : "#3ee392",
					color: "white",
				});
			};
			//当输入框没有 内容时，#info信息框隐藏
				if(!$(".in #psw").val()){
					$(".in #info p .first").css({
						backgroundPosition: "-508px -33px",
					})
					$(".in span").css({
						background: "#e8e8e8",
						color: "#bdbdc3",
					});
				}
		})
		verificationCode();
		function verificationCode(){
			var url = "http://route.showapi.com/932-2?showapi_appid=52539&showapi_sign=945a109f09f7414998727820aa2cab49&length=4&specials=false&";
			$.get(url,function(data){
				//生成验证码
				$(".duanxin #img").attr("src" , data.showapi_res_body.image);
				$(".duanxin #img").data("sid", data.showapi_res_body.sid);
			});
		}
		$("#img").click(function(){
			verificationCode();
			$("#valid").css({
				visibility : "hidden"
			})
		});
		$(".duanxin #yanzheng").blur(function(){
			//获取输入的内容,和验证码
			var _value = $("#yanzheng").val(),
				_sid = $("#img").data("sid");
			//校验地址
			var url = `http://route.showapi.com/932-1?showapi_appid=52539&showapi_sign=945a109f09f7414998727820aa2cab49&checkcode=${_value}&sid=${_sid}&`
			$.getJSON(url,function(data){
				if(data.showapi_res_body.valid){
					$("#valid").css({
						visibility : "visible"
					}).text("验证成功")
				}else{
					$("#valid").css({
						visibility : "visible"
					}).text("输入有误")
				}		
			})
			
		})
		
		//表单提交事件
		$("form").submit(function(e){
			$.cookie.json = true;
			e.preventDefault()?e.preventDefault():e.returnValue = false;
			var _usertel = $("#tele").val(),
			_password = $("#psw").val();
			var strURL = `http://10.7.187.111/cici/register.php?name=${_usertel}&password=${_password}`;
			$.ajax({
				url: strURL,
				type: "GET",
				dataType:"json",
				success:function(data){
					$.cookie("_usertel",_usertel, { path: '/' } );
					//console.log("register正确....")
					location.href="/html/login.html";
					//console.log($.cookie("_usertel"))
				},
				error:function(msg){
           			console.log("login错误")       
				}
			})
		})
	});
});