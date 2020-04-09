$(function(){

 $('#back a').on('click',function(){
  $('body, html').animate({
  	scrollTop:0
  }, 800);
    return false;
    /* "return false" があることによって、親要素へのイベント伝播を止めることができる */
 });

});