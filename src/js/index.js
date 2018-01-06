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
			
			$(".luntu-b").eq(0).carousel({
				imgs : [
					[{src:"https://img11.static.yhbimg.com/yhb-img01/2018/01/01/21/01aa7f739f27a9190a054a19b4d3889b4a.jpg?imageView2/2/w/320/h/430", href:"#"},{src:"https://img11.static.yhbimg.com/yhb-img01/2018/01/01/21/01e7c9e0ab0e26da8dd1041b50c42bda62.jpg?imageView2/2/w/320/h/430", href:"#"},{src:"https://img11.static.yhbimg.com/yhb-img01/2018/01/01/21/01832c92dc6021f2b22c5aadd3936f0ab9.jpg?imageView2/2/w/320/h/430", href:"#"}],
					[{src:"https://img11.static.yhbimg.com/yhb-img01/2018/01/01/21/01835829eb72eca9c9e2b9a908ea53687e.jpg?imageView2/2/w/320/h/430", href:"#"},{src:"https://img11.static.yhbimg.com/yhb-img01/2018/01/01/21/01fe12228e2bcdcee0b2efb97c10c63cc0.jpg?imageView2/2/w/320/h/430", href:"#"},{src:"https://img10.static.yhbimg.com/yhb-img01/2018/01/01/21/012492c3434b829da1747aae3f180f4acb.jpg?imageView2/2/w/320/h/430", href:"#"}]
				],
				width:1000,
				height:	450,
				type:"fade",
				duration:3000,
			});

			
			$(".luntu-s").eq(0).carousel({
				imgs : [
					[{src:"https://img10.static.yhbimg.com/yhb-img01/2017/12/14/15/010aabda3f0e0bf9dbff0ec9d119a03c76.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img11.static.yhbimg.com/yhb-img01/2017/12/14/15/011cdc22419acbe3eadec0539c24c60215.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img11.static.yhbimg.com/yhb-img01/2017/12/14/15/01076981ae37e2d30c19f838d5fa5206c6.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img10.static.yhbimg.com/yhb-img01/2017/12/14/15/01099d6b89e7d59cc9166995404744f118.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img10.static.yhbimg.com/yhb-img01/2017/12/14/15/0166716ad422b8a1ba7ebd1efe07a94bae.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img11.static.yhbimg.com/yhb-img01/2017/12/14/15/01343ec4363996ba2156e08ef909d6cb39.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img10.static.yhbimg.com/yhb-img01/2017/12/14/15/01f1f0ef4300512ac5a9b6c372986f6fb5.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img11.static.yhbimg.com/yhb-img01/2017/12/14/15/01d1bcca9051930c042b7556d64f2a2d86.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img10.static.yhbimg.com/yhb-img01/2017/12/14/15/018c9112b150961ae725e8b64234b6cc9c.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img11.static.yhbimg.com/yhb-img01/2017/12/14/15/0114870b62ec5f4a127aea19718ec76551.jpg?imageView2/2/w/185/h/86/q/90", href:"#"}],
					[{src:"https://img11.static.yhbimg.com/yhb-img01/2017/12/14/14/01866cdfb6be4ffcc067179340e2812850.png?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img11.static.yhbimg.com/yhb-img01/2017/12/14/14/01d3cd87c4c1b9bc54c67322b4a72d0263.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img10.static.yhbimg.com/yhb-img01/2017/12/14/14/0159960a5951ed5cb93dfdeb8ebac857e3.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img10.static.yhbimg.com/yhb-img01/2017/12/14/14/01f661945af8834e8a9bdc28437279fcf1.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img10.static.yhbimg.com/yhb-img01/2017/12/14/14/01e37956dd589b6f6bc01ae6176cd67ce8.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img11.static.yhbimg.com/yhb-img01/2017/12/14/14/01e7a29fe30c3b99af0187f1771416816d.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img11.static.yhbimg.com/yhb-img01/2017/12/14/14/01c9b4e8131b86fe0b0885571d43a794b4.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img11.static.yhbimg.com/yhb-img01/2017/12/14/15/01e40c02ec1e1996ef431683923df5248a.png?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img10.static.yhbimg.com/yhb-img01/2017/12/14/15/011189b4ce110c8312dac1bef5f62d8c05.jpg?imageView2/2/w/185/h/86/q/90", href:"#"},{src:"https://img11.static.yhbimg.com/yhb-img01/2017/12/14/15/0114e759313f6248109ce6f190c97f9ade.jpg?imageView2/2/w/185/h/86/q/90", href:"#"}]
				],
				width:970, //ul宽高
				height: 200,
				type: "fade",
				duration: 2000,
				cancelAutoPlay : true,
			});	
			
			var b_more = document.createElement("div");
			$(".luntu-s").append(b_more);
			$(b_more).css({
                width: 100,
                height: 64,
                position: "absolute",
                bottom: 0,
                right: 0,
            }).html("<a href='#'> MORE > </a>")
		});
	});
});