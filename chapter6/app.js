//「マウスクリック」イベントを設定
$(function(){
   $('.box1').on('click', function(){
   	$('.box1').addClass('box1-ext');
   });

   $('.box1').mouseout(function(){
   	$('.box1').removeClass('box1-ext');
   });
});

// 「マウスオーバー」「マウスアウト」イベントを追加　書き換え
// $(function(){
//    $('.box1').mouseover(function(){
//    	$('.box1').addClass('box1-ext');
//    });

//    $('.box1').mouseout(function(){
//    	$('.box1').removeClass('box1-ext');
//    });
// });


// 「マウスオーバー」「マウスアウト」イベントを追加
// $(function(){
//    $('.box1').mouseover(function(){
//    	$('.box1').css({'background-color':'#0000FF'});
//    });

//    $('.box1').mouseout(function(){
//    	$('.box1').css({'background-color':'#FF0000'});
//    });
// });