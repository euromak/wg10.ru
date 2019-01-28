/*==================================================================================
    Custom JS (Any custom js code you want to apply should be defined here).
====================================================================================*/


window.onscroll = function() {
	var scrolledHeaderMemu = 0;	
	scrolledHeaderMemu = window.pageYOffset || document.documentElement.scrollTop;

/*появление тени при скроле*/	
	if(scrolledHeaderMemu>=81)		
		document.getElementsByClassName('main-header')[0].style = "box-shadow: 0px 0px 5px black;";
	else			
		document.getElementsByClassName('main-header')[0].style = "box-shadow: none";
		
		
	if(screen.width>768){ // На экране менее 768 пикселей шириной скрипт действовать не будет
		if(scrolledHeaderMemu>=81){			
			document.getElementsByClassName('tel-and-mail')[0].style.display = "block";						
		}
		else{			
			document.getElementsByClassName('tel-and-mail')[0].style.display = "none";						
		}	
	}	
}

/*МЕНЮ*/
$(function() {
	$('a[href^="#product"]').on('click', function(event) {
		event.preventDefault();
		var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 2000);
    });
    $('a[href^="#catalog"]').on('click', function(event) {
		event.preventDefault();
		var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 2000);
    });
    $('a[href^="#contact"]').on('click', function(event) {
		event.preventDefault();
		var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 2000);
    });
});


/*Страница товара, последний уровень*/
if(document.getElementsByClassName('product-variations-for-js1')[0]){
	var productForJs1 = document.getElementsByClassName('product-variations-for-js1');
	var productSForJs1 = document.getElementsByClassName('product-span-for-js1');
	var productTForJs1 = document.getElementsByClassName('product-table-for-js1');
	var productIForJs1 = document.getElementsByClassName('product-img-for-js1');

	var productForJs1Index = 3;
	productForJs1[0].onclick = function (){
		productForJs1Index = 0;
		productForJsClick();
		productForJsClickImg();
	}
	productForJs1[1].onclick = function (){
		productForJs1Index = 1;
		productForJsClick();
		productForJsClickImg();
	}
	productForJs1[2].onclick = function (){
		productForJs1Index = 2;
		productForJsClick();
		productForJsClickImg();
	}
	function productForJsClick (){
		for (var i = 0; i < productForJs1.length; i++) {
			productForJs1[i].style.cssText = "color:#474747; font-weight:nor;";
			productSForJs1[i].style.display = "none";
			productTForJs1[i].style.display = "none";    			
			productForJs1[productForJs1Index].style.cssText = "color:black; font-weight:bold;";
			productSForJs1[productForJs1Index].style.display = "inline";
			productTForJs1[productForJs1Index].style.display = "block";    			
		}
	}
	function productForJsClickImg (){
		for (var im = 0; im < productIForJs1.length; im++) {    			
			productIForJs1[im].style.display = "none";    			
		}
		if (productForJs1Index == 0)
			productIForJs1[0].style.display = "block";
		else
			productIForJs1[1].style.display = "block";	
	}
}  
