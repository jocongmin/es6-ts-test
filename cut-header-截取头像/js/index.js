$(document).ready(function(){
	/* 
	 * banner滚动
	 */
	TouchSlide({ 
		slideCell:"#slider",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell:".bd ul", 
		effect:"leftLoop", 
		autoPlay:true,//自动播放
		autoPage:true //自动分页
	});

	/*
	 * 菜单展开
	 */
	$(".menu-click").bind("touchend", function(){
		if($(".menu-con").hasClass("menu-show")){
			$(".menu-con, .menu-con-bg").removeClass("menu-show");
		}else{
			$(".menu-con, .menu-con-bg").addClass("menu-show");
		}
	});
});