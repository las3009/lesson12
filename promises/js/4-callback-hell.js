var addImg = function(src){
    var imgElement = document.createElement('img');
    imgElement.src = src;
    document.body.appendChild(imgElement);
}

loadImageAsCallback('http://lorempixel.com/400/200/sports/', function(error1, img1){
    addImg(img1.src);
    loadImageAsCallback('http://lorempixel.com/400/400/sports/', function(error2, img2){
        addImg(img2.src);
        loadImageAsCallback('http://lorempixel.com/600/400/sports/', function(error3, img3){
            addImg(img3.src);
        });
    });
});