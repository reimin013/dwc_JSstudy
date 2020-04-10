$(function(){

 $('.menu-trigger').on('click', function(){
   $(this).toggleClass('active');
   // .fadeToggle( )は、要素のフェードイン・フェードアウトを切り替えるメソッド
   // ハンバーガーメニューがクリックされたときに、フェードインとフェードアウトが交互に実行される
   $('#sp-menu').fadeToggle();
   return false;
 });

});