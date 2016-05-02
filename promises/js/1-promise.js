loadImageAsPromise('http://lorempixel.com/400/200/sports/').then(function(img){
	var imgElement = document.createElement('img');
	imgElement.src = img.src;
	document.body.appendChild(imgElement);
});