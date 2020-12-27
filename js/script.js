// tombol search
$(function(){
   $(".dropdown-item").click(function(){
      var icon_text = $(this).html();
      $(".dropdown-toggle").html(icon_text)
   })
})

// slidder
$('.carousel').carousel({
   interval: 7000
   pause: false,
   touch: false
})