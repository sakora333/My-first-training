$(document).ready(function(){
  "use strict";
 $(".carousel").carousel({
     interval:4000
 });
 //nice scroll
 $("html").niceScroll();
 //show color option div when click the gear
 $(".gear-check").click(function(){
    $(".color-option").toggle();
 });
});
 var colorLi=$(".color-option ul li");
 colorLi
 .eq(0).css("backgroundColor","#e41b17").end()
 .eq(1).css("backgroundColor","#c723bf").end()
 .eq(2).css("backgroundColor","#29b385").end()
 .eq(3).css("backgroundColor","#0895d1").end()
 .eq(4).css("backgroundColor","#eeb766");
 $(colorLi).click(function(){
  $("link[href*='theme']").attr("href",$(this).attr("data-value"));
 });
 //cashing the scroll top button
var scrollButton=$("#scroll-top");
$(window).scroll(function(){
 // console.log($(this).scrollTop());
  $(this).scrollTop()>=710?scrollButton.show():scrollButton.hide();
});
  //click to scroll top
    scrollButton.click(function(){
   $("html,body").animate({scrollTop:0},700);
  });


////Start loading 
$(window).on("load",function(){
     $(".loading-overlay .spinner").fadeOut(5000,function(){
      $("body").css("overflow","auto");
       $(".loading-overlay").fadeOut(3000,function(){
        $(this).remove();   
       });

     });
}); 
