// 「this」はイベントが発生した要素のみ変化させたいときに使う。「this」は「クリックされた要素」を指している。
$(function(){
	$('.box1').on('click',function(){
		$(this).slideUp();
	});
});

// 1つ1つ記述した場合
// $(function(){
// 	$('.bg1').on('click',function(){
// 	   $('.bg1').slideUp();
// 	});

// 	$('.bg2').on('click',function(){
// 	   $('.bg2').slideUp();
// 	});

// 	$('.bg3').on('click',function(){
// 	   $('.bg3').slideUp();
// 	});

// 	$('.bg4').on('click',function(){
// 	   $('.bg4').slideUp();
// 	});
// });