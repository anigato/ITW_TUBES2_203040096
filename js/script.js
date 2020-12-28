// tombol search
$(function(){
   $(".nav-search").click(function(){
      var icon_text = $(this).html();
      $(".btn-search").html(icon_text)
   })
})

// tombol lainnya
$(function(){
   $(".nav-other").click(function(){
      var icon_text = $(this).html();
      $(".btn-other").html(icon_text)
   })
})

// tombol product
$(function(){
   $(".nav-product").click(function(){
      var icon_text = $(this).html();
      $(".btn-product").html(icon_text)
   })
})

// slidder
$('.carousel').carousel({
   interval: 7000,
   pause: false,
   touch: false
})