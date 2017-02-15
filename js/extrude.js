
//Extrudes with some concern for vanishing point and with shading
//Places text shadow on each individual character within container element.
function extrudedText(element_id, depth, rgb, stretch, shadow) {
	var element = "#" + element_id;
	var originalText = $(element).html().trim();
	var textSplit = originalText.split("");
	var textSplitCenter = Math.floor(textSplit.length / 2);

	//Clears container
	$(element).empty();

	//Replaces each individual character with a span object with text-shadow styling
	$.each(textSplit, function (charCount, char) {
		var textShadow = 'text-shadow:';
		var zIndex = 'z-index:' + (100 - Math.abs(textSplitCenter - charCount)).toString() + "; ";
		for (i = 1; i <= depth; i++) {
			var punctuation = ", ";
			if (i == depth) punctuation = '" ';
			var horizontalStretch = ((textSplitCenter - charCount) * stretch * i).toString() + "px ";
			var newTextShadowLine = horizontalStretch + i.toString() + "px 0 " + rgbDarkened(rgb, i, shadow) + punctuation;
			textShadow = textShadow + newTextShadowLine;
		}

		$(element).append('<span style="position:relative; ' + zIndex + textShadow + ">" + char + "</span>");
	});
}

//Extrudes directly vertical without shading. 
//Places text shadow on container element.
function extrudedTextLite(element_id, depth, color) {
	var element = "#" + element_id;
	var textShadow = "";

	for (i = 1; i <= depth; i++) {
		var punctuation = ", ";
		if (i == depth) punctuation = "";
		var newTextShadowLine = "0 " + i.toString() + "px 0 " + color + punctuation;
		textShadow = textShadow + newTextShadowLine;
	}

	$(element).css("text-shadow", textShadow);
}

//Gradually darken rgb values
function rgbDarkened(rgb, point, rate) {
	var darkenRate = point * rate;
	var rgbString = "rgb(" + (rgb[0] - darkenRate).toString() + ", " + (rgb[1] - darkenRate).toString() + ", " + (rgb[2] - darkenRate).toString() + ")"
	return rgbString;
}
