loadImageAsCallback('http://lorempixel.com/400/200/sports/', function(error, img){
    var imgElement = document.createElement('img');
    imgElement.src = img.src;
    document.body.appendChild(imgElement);
});