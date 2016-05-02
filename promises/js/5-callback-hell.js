var addImg = function(src){
    var imgElement = document.createElement('img');
    imgElement.src = src;
    document.body.appendChild(imgElement);
}

loadImageAsCallback('http://lorempixel.com/400/200/sports/', function(error1, img1){
    if(error1) throw error1;
    addImg(img1.src);
    loadImageAsCallback('http://tests.lorempi3xel.com/400/400/sports/', function(error2, img2){
        if(error2) throw error2;
        addImg(img2.src);
        loadImageAsCallback('http://lorempixel.com/600/400/sports/', function(error3, img3){
            if(error3) throw error3;
            addImg(img3.src);
        });
    });
});