var ImgWarper = ImgWarper || {};


$(document).ready(function(){
  var canvas = $("#main-canvas")[0];
  var warper = null;

  var holder = document.getElementById('drop-area');

  var url = "images/gmail.png";

  this.className = '';

  var img = render(url, function (imageData) {
    if (warper) {
      delete warper;
    }

    var oriPoints = [
      new ImgWarper.Point(0, 0),
      new ImgWarper.Point(0, 256),
      new ImgWarper.Point(256, 0),
      new ImgWarper.Point(256, 256)
    ];

    var dstPoints = [
      new ImgWarper.Point(50,50),
      new ImgWarper.Point(10,300),
      new ImgWarper.Point(200,10),
      new ImgWarper.Point(300,300)
    ];

    warper = new ImgWarper.PointDefiner(canvas, img, imageData, oriPoints, dstPoints);

    warper.redraw();
  });
});

var MAX_HEIGHT = 500;
function render(src, callback){
  var image = new Image();
  image.onload = function(){
    var canvas = document.getElementById("myCanvas");
    if(image.height > MAX_HEIGHT) {
      image.width *= MAX_HEIGHT / image.height;
      image.height = MAX_HEIGHT;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, image.width, image.height);
    callback(ctx.getImageData(0, 0, image.width, image.height));
  };
  image.src = src;
  return image;
}
