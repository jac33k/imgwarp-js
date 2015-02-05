var ImgWarper = ImgWarper || {};

ImgWarper.PointDefiner = function(canvas, image, imgData, oriPoints, dstPoints) {
  this.oriPoints = oriPoints;
  this.dstPoints = dstPoints;

  //set up points for change;
  var c = canvas;
  this.canvas = canvas;
  var that = this;

  this.currentPointIndex = -1;
  this.imgWarper = new ImgWarper.Warper(c, image, imgData);
};

ImgWarper.PointDefiner.prototype.redraw = function () {
  this.imgWarper.warp(this.oriPoints, this.dstPoints);
};

ImgWarper.PointDefiner.prototype.getCurrentPointIndex = function(q) {
  var currentPoint = -1;

  for (var i = 0 ; i< this.dstPoints.length; i++){
    if (this.dstPoints[i].InfintyNormDistanceTo(q) <= 20) {
      currentPoint = i;
      return i;
    }
  }
  return currentPoint;
};
