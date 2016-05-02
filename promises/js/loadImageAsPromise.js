function loadImageAsPromise(url, callback){
	return new Promise(
		function(resolve, reject){

			var image = new Image();

			image.src = url;

			image.onload = function(){
				resolve(image);
			}

			image.onerror = function(){
				var message = 'Could not load image at ' + url;
				reject(message);
			}
		}
	);
}