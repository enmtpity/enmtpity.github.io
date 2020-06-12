function scrollToTop() {
  var x1 = x2 = x3 = 0;
  var y1 = y2 = y3 = 0;
  if (document.documentElement) {
    x1 = document.documentElement.scrollLeft || 0;
    y1 = document.documentElement.scrollTop || 0;
  }
  if (document.body) {
    x2 = document.body.scrollLeft || 0;
    y2 = document.body.scrollTop || 0;
  }
  x3 = window.scrollX || 0;
  y3 = window.scrollY || 0;
  var x = Math.max(x1, Math.max(x2, x3));
  var y = Math.max(y1, Math.max(y2, y3));
  window.scrollTo(Math.floor(x / 2), Math.floor(y / 2));
  if (x > 0 || y > 0) {
    window.setTimeout("scrollToTop()", 30);
  }
}

var element = null;
window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (element == null) {
      element = document.getElementById('scroll-to-top');
    }
    if (scrollTop / scrollHeight > 0.1) {
      element.classList.remove('scroll-to-top-not-display');
    } else {
      element.classList.add('scroll-to-top-not-display');
    }
}


 pics_src = new Array("image/e-typing.PNG","image/susida.PNG","image/yorunomori.jpg");
            var num = -1;

            slideshow_timer();

            function slideshow_timer(){
                if (num == 2){
                    num = 0;
                }
                else {
                    num ++;
                }
                document.getElementById("mypic").src=pics_src[num];

                setTimeout("slideshow_timer()",3500);
            }
