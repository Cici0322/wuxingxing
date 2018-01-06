require(["config"], function(){
	require(["load"], function(){
		require(["carousel"],function(){
			$(".bann").eq(0).carousel({
				imgs : [
					{src:"https://img10.static.yhbimg.com/yhb-img01/2018/01/03/11/01c666ad191f3a3b9a5b32c7fa5f69e9ed.jpg?imageView2/2/w/1150/h/450", href:"#"},
					{src:"https://img11.static.yhbimg.com/yhb-img01/2018/01/03/11/010bc9c133c5f372b141130cec991615e1.jpg?imageView2/2/w/1150/h/450", href:"#"},
					{src:"https://img10.static.yhbimg.com/yhb-img01/2018/01/03/11/015f8be1a62a8adac45a6b489955aebd1c.jpg?imageView2/2/w/1150/h/450",href:"#"},
					{src:"https://img10.static.yhbimg.com/yhb-img01/2018/01/03/11/0165c8719676a82c2677068e73e248af12.jpg?imageView2/2/w/1150/h/450",href:"#"}
				],
				width:1153,
				height: 450,
				type: "fade",
				duration: 2000
			});
			$(".pages").css({
				width:"110px",
			});

		})
	});
});