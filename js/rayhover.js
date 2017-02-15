//Ray Hover causes polygons to "glow" when hovered over
//Ray Hover is very specific and directly Targets #ray_poly_controller and #ray_poly

//Quick function that initializes Ray Hover
function initRayPolyHover()
{
	$("#ray_poly_controller").children().on("mouseover", function () { rayPolyMouseOn(this); });
}

function rayPolyMouseOn(poly)
{
	//Get poly value from object
	var polyData = parseInt($(poly).data("poly"));

	//reset All
	$("#ray_poly").children().css("fill-opacity", "0.4");

	//Set direct hover to maximum glow
	$("#ray_poly").find('[data-poly="' + String(polyData) + '"]').css("fill-opacity", "1");

	//Gradually decrease glow on left
	if(polyData - 1 > 0)
	{
		$("#ray_poly").find('[data-poly="' + String(polyData - 1) + '"]').css("fill-opacity", "0.85");

		if (polyData - 2 > 0)
		{
			$("#ray_poly").find('[data-poly="' + String(polyData - 2) + '"]').css("fill-opacity", "0.75");

			if (polyData - 3 > 0) {
				$("#ray_poly").find('[data-poly="' + String(polyData - 2) + '"]').css("fill-opacity", "0.60");
			}
		}
	}

	//Gradually decrease glow on right
	if (polyData + 1 < 16) {
		$("#ray_poly").find('[data-poly="' + String(polyData + 1) + '"]').css("fill-opacity", "0.85");

		if (polyData + 2 < 16) {
			$("#ray_poly").find('[data-poly="' + String(polyData + 2) + '"]').css("fill-opacity", "0.75");

			if (polyData + 3 < 16) {
				$("#ray_poly").find('[data-poly="' + String(polyData + 2) + '"]').css("fill-opacity", "0.60");
			}
		}
	}

}




