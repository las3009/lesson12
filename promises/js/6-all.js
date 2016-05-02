var addImg = function(src){
	var imgElement = document.createElement('img');
	imgElement.src = src;
	document.body.appendChild(imgElement);
};

Promise.all([
	loadImageAsPromise('http://lorempixel.com/400/200/sports/'),
	loadImageAsPromise('http://lorempixel.com/400/400/sports/'),
	loadImageAsPromise('http://lorempixel.com/600/600/sports/')
]).then(function(images){
	images.forEach(function(img){
		addImg(img.src);
	});
}).catch(function(error) {
	console.log(error);
});