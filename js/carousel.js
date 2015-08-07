
$(document).on('click', ".carousel-button-right",function(){ 
	var carusel = $(this).parents('.carousel-tovar');
	right_carusel(carusel);
	return false;
});

$(document).on('click',".carousel-button-left",function(){ 
	var carusel = $(this).parents('.carousel-tovar');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}





$(document).on('click', ".carousel-button-right2",function(){ 
   var carusel2 = $(this).parents('.tovar-item-car');
   right_carusel2(carusel2);
   return false;
});

$(document).on('click',".carousel-button-left2",function(){ 
   var carusel2 = $(this).parents('.tovar-item-car');
   left_carusel2(carusel2);
   return false;
});
function left_carusel2(carusel2){
   var block_width2 = $(carusel2).find('.car-t-block').outerWidth();
   $(carusel2).find(".car-t-items .car-t-block").eq(-1).clone().prependTo($(carusel2).find(".car-t-items")); 
   $(carusel2).find(".car-t-items").css({"left":"-"+block_width2+"px"});
   $(carusel2).find(".car-t-items .car-t-block").eq(-1).remove();    
   $(carusel2).find(".car-t-items").animate({left: "0px"}, 200); 
   
}
function right_carusel2(carusel2){
   var block_width2 = $(carusel2).find('.car-t-block').outerWidth();
   $(carusel2).find(".car-t-items").animate({left: "-"+ block_width2 +"px"}, 200, function(){
     $(carusel2).find(".car-t-items .car-t-block").eq(0).clone().appendTo($(carusel2).find(".car-t-items")); 
      $(carusel2).find(".car-t-items .car-t-block").eq(0).remove(); 
      $(carusel2).find(".car-t-items").css({"left":"0px"}); 
   }); 
}