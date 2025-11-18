var red= $('#red');
var yellow= $('#yellow');
var blue= $('#blue');
var green= $('#green');

var layer= $('#overlay');

layer.mousemove(function(e){
  var rvalueX= (e.pageX * -1 / 5);
  var rvalueY= (e.pageY * -1 / 5);
  var bvalueX= (e.pageX * -1 / 5);
  var bvalueY= (e.pageY * -1 / 5);
  var yvalueX= (e.pageX * -1 / 5);
  var yvalueY= (e.pageY * -1 / 5);
  var gvalueX= (e.pageX * -1 / 5);
  var gvalueY= (e.pageY * -1 / 5);
  console.log('ok');
  red.css('transform', 'translate3d('+rvalueX+'px,'+rvalueY+'px, 0)');
  yellow.css('transform', 'translate3d('+yvalueX+'px,'+yvalueY+'px, 0)');
  blue.css('transform', 'translate3d('+bvalueX+'px,'+bvalueY+'px, 0)');
  green.css('transform', 'translate3d('+gvalueX+'px,'+gvalueY+'px, 0)');
});


$(function() {
  $('.hoverControl').hover(function() {
    $('.hoverBomb').css('display', 'block');
  }, function() {
    // on mouseout, reset the background colour
    $('.hoverBomb').css('display', 'none');
  });
});
