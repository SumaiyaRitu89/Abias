// =============================== Navbar Part JS =================================

$(window).scroll(function(){
  if ($(window).scrollTop() > 300){
    $(".menu").addClass("menufixed")
  }
  else{
    $(".menu").removeClass("menufixed")
  }
})



// =================================== Counter Part Js ==========================

$('.counter').counterUp({
    delay: 10,
    time: 1000
});


// ========================= About Part Js =====================================

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});



// =========================== Portfolio Part JS ============================

$('.top-slider').slick({
  arrows:false,
});

$('.bottom-slider').slick({
  slidesToShow:3,
  arrows:false,
  centerMode:true,
  centerPadding:"0",
});

// ============================ Process Part Js =============================

$("#process-part .item1").mouseenter(function(){
  $("#process-part .item1 .round").css("background","#cfbbfa"),
  $("#process-part .item1 .round-1").css("background-image","linear-gradient(to right, #5639eb , #18a7e3)"),
  $("#process-part .item1 .number").css("color","#cabcf9"),
  $("#process-part .line").css("width","11%")
});

$("#process-part .item1").mouseleave(function(){
  $("#process-part .item1 .round").css("background","transparent"),
  $("#process-part .item1 .round-1").css("background","transparent"),
  $("#process-part .item1 .number").css("color","#000"),
  $("#process-part .line").css("width","0%")
})



$("#process-part .item2").mouseenter(function(){
  $("#process-part .item1 .round").css("background","#cfbbfa"),
  $("#process-part .item1 .round-1").css("background-image","linear-gradient(to right, #5639eb , #18a7e3)"),
  $("#process-part .item2 .round").css("background","#cfbbfa"),
  $("#process-part .item2 .round-1").css("background-image","linear-gradient(to right, #5639eb , #18a7e3)"),
  $("#process-part .item1 .number").css("color","#cabcf9"),
  $("#process-part .item2 .number").css("color","#cabcf9"),
  $("#process-part .line").css("width","38%")
});

$("#process-part .item2").mouseleave(function(){
  $("#process-part .item1 .round").css("background","transparent"),
  $("#process-part .item1 .round-1").css("background","transparent"),
  $("#process-part .item2 .round").css("background","transparent"),
  $("#process-part .item2 .round-1").css("background","transparent"),
  $("#process-part .item1 .number").css("color","#000"),
  $("#process-part .item2 .number").css("color","#000"),
  $("#process-part .line").css("width","0%")
})



$("#process-part .item3").mouseenter(function(){
  $("#process-part .item1 .round").css("background","#cfbbfa"),
  $("#process-part .item1 .round-1").css("background-image","linear-gradient(to right, #5639eb , #18a7e3)"),
  $("#process-part .item2 .round").css("background","#cfbbfa"),
  $("#process-part .item2 .round-1").css("background-image","linear-gradient(to right, #5639eb , #18a7e3)"),
  $("#process-part .item3 .round").css("background","#cfbbfa"),
  $("#process-part .item3 .round-1").css("background-image","linear-gradient(to right, #5639eb , #18a7e3)"),
  $("#process-part .item1 .number").css("color","#cabcf9"),
  $("#process-part .item2 .number").css("color","#cabcf9"),
  $("#process-part .item3 .number").css("color","#cabcf9"),
  $("#process-part .line").css("width","62%")
});

$("#process-part .item3").mouseleave(function(){
  $("#process-part .item1 .round").css("background","transparent"),
  $("#process-part .item1 .round-1").css("background","transparent"),
  $("#process-part .item2 .round").css("background","transparent"),
  $("#process-part .item2 .round-1").css("background","transparent"),
  $("#process-part .item3 .round").css("background","transparent"),
  $("#process-part .item3 .round-1").css("background","transparent"),
  $("#process-part .item1 .number").css("color","#000"),
  $("#process-part .item2 .number").css("color","#000"),
  $("#process-part .item3 .number").css("color","#000"),
  $("#process-part .line").css("width","0%")
})



$("#process-part .item4").mouseenter(function(){
  $("#process-part .item1 .round").css("background","#cfbbfa"),
  $("#process-part .item1 .round-1").css("background-image","linear-gradient(to right, #5639eb , #18a7e3)"),
  $("#process-part .item2 .round").css("background","#cfbbfa"),
  $("#process-part .item2 .round-1").css("background-image","linear-gradient(to right, #5639eb , #18a7e3)"),
  $("#process-part .item3 .round").css("background","#cfbbfa"),
  $("#process-part .item3 .round-1").css("background-image","linear-gradient(to right, #5639eb , #18a7e3)"),
  $("#process-part .item4 .round").css("background","#cfbbfa"),
  $("#process-part .item4 .round-1").css("background-image","linear-gradient(to right, #5639eb , #18a7e3)"),
  $("#process-part .item1 .number").css("color","#cabcf9"),
  $("#process-part .item2 .number").css("color","#cabcf9"),
  $("#process-part .item3 .number").css("color","#cabcf9"),
  $("#process-part .item4 .number").css("color","#cabcf9"),
  $("#process-part .line").css("width","100%")
});

$("#process-part .item4").mouseleave(function(){
  $("#process-part .item1 .round").css("background","transparent"),
  $("#process-part .item1 .round-1").css("background","transparent"),
  $("#process-part .item2 .round").css("background","transparent"),
  $("#process-part .item2 .round-1").css("background","transparent"),
  $("#process-part .item3 .round").css("background","transparent"),
  $("#process-part .item3 .round-1").css("background","transparent"),
  $("#process-part .item4 .round").css("background","transparent"),
  $("#process-part .item4 .round-1").css("background","transparent"),
  $("#process-part .item1 .number").css("color","#000"),
  $("#process-part .item2 .number").css("color","#000"),
  $("#process-part .item3 .number").css("color","#000"),
  $("#process-part .item4 .number").css("color","#000"),
  $("#process-part .line").css("width","0%")
})



//=========================== Testimonial-Skills js ============================

$("#mix-part .left .mix-top-slider").slick({
  fade:true,
  arrows:false,
  asNavFor: ".mix-bottom-slider"
})

$("#mix-part .left .mix-bottom-slider").slick({
  arrows: false,
  slidesToShow: 5,
  centerMode: true,
  centerPadding: 0,
  asNavFor: ".mix-top-slider"
})



// ============================= Top Arrow ============================
$(".top-arrow").click(function(){
  $("html,body").animate({
    scrollTop:0
  },1000)
})

$(window).scroll(function(){
  if ($(window).scrollTop() > 700){
    $(".top-arrow").fadeIn()
  }
  else{
    $(".top-arrow").fadeOut()
  }
})





AOS.init();