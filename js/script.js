var myImage = document.getElementById("picture");

var imageArray = ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg"];

var imageIndex = 1;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

setInterval(changeImage, 2000);