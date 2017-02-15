
var WRAP_WIDTH;
var WRAP_HEIGHT;
var mouseX = 0;
var mouseY = 0;

//Events
$(document).ready(function () {

	//extrudedText(element_id, depth, rgb, stretch, shadow)
	extrudedText("name", 45, [242, 240, 32], .35, 1);

	//Load Model
	updateWrapWidthHeight();
	initModel();
	animateModel();

	//ADD EVENT LISTENERS
	initRayPolyHover()
	//window.addEventListener("scroll", onScroll, false);
	window.addEventListener('resize', onWindowResize, false);
	window.addEventListener('mousemove', onMouseMove, false);

});



//Add custom codes to Javascript Events
function onMouseMove(event)
{
	MouseMoveModel(event);
};
function onWindowResize()
{
	WindowResizeModel();
}



//Not used currently

//function onScroll()
//{
//	headerFade();
//}
//function headerFade()
//{
//	var pos = $(window).scrollTop();
//	if (pos < WRAP_HEIGHT)
//	{
//		var grayPercent = Math.ceil((pos / WRAP_HEIGHT) * 100);
//		var gray = "grayscale(" + grayPercent.toString() + "%)";
//		var opacity = 1 - ((pos*.8) / (WRAP_HEIGHT));
//		$("header").css("filter", gray);
//		$("header").css("opacity", opacity);
//	}
//	else if (pos >= WRAP_HEIGHT)
//	{
//		$("header").css("filter", "grayscale(100%)");
//		$("header").css("opacity", ".2");
//	}
//}