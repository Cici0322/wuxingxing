// 定义模块，加载头部、尾部资源
define(["jquery", "cookie"], function($){
	// 将 header.html 加载显示，绑定交互效果
	$.ajax("/html/include/header.html").done(function(data){
		$(".header").html(data);
	}).done(function(){
		// 绑定查找的键盘按键事件
		$(".search .word").keyup(function(){
			var url = "https://suggest.taobao.com/sug?code=utf-8&q="+ $(this).val() +"&callback=?";
			$.getJSON(url, function(data){
				var html = "";
				data.result.forEach(function(curr){
					html += "<div>"+ curr[0] +"</div>"
				});

				$(".search .info").html(html).show();
				//输入框没内容。隐藏
				if(!$(".search .word").val()){
					$(".search .info").hide();
				}
			});
		});
		//失去焦点，隐藏
		$(".search .word").blur(function(){
			$(".search .info").hide();
		})
	}).done(function(){
		// 如果有用户登录成功，则显示欢迎信息
		var user = $.cookie("_usertel");
		console.log($.cookie("_usertel"))
		if (user)
			$("#logina").html("欢迎你：<a href='personal.html'>"+ user +"</a>")
	});

	// 将 footer.html 加载显示到 div.footer 中
	$(".footer").load("/html/include/footer.html");
});