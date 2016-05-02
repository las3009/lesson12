function loadImageAsCallback(url, callback){
	var image = new Image();

	image.src = url;

	image.onload = function(){
		callback(null, image);
	}

	image.onerror = function(){
		var message = 'Could not load image at ' + url;
		callback(new Error(message), null);
	}
}