$(function(evt) {
	$("a:has(img.gallery)").click(function() {
		var largePath = $(this).attr("href");
		$("#photo_large").attr({ src: largePath });
		return false;
	});
});