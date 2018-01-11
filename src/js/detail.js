require(["config"], function(){
	require(["jquery","load"], function($,template){
		//异步加载列表数据，使用模板引擎渲染
//		$.getJSON("/mock/detail.json",function(data){
//			//渲染数据
//			var html = template("list_template",{
//				products : data.res_body.data
//			})
//			console.log(data.res_body.data);
//			$(".detail-s").html(html);
//		})
	})
});

function timer(){
	$("#zoom-img").elevateZoom({
		lensColour : '#f3ebc7',//放大镜背景颜色
		lensFadeIn : '500',
		lensFadeOut : '500',
		lensWindowHeight : '200',
		cursor : 'move',
		borderSize : '0.5',
		borderColour : 'black',
		zoomWindowHeight : '400',
		zoomWindowWidth : '400',
		zoomWindowFadeIn : '500',
		zoomWindowfadeOut : '500'
	});
}

timer();