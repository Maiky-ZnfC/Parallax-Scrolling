var posicion=new Array();
$(document).ready(function(){
	console.log("");
	$(".parallax").each(function(index, element){
		$(document).scroll(function(){
			var imagen=$(element);
			var top=imagen.offset().top;
			var scrollTop = $(this).scrollTop();
			if (scrollTop>=top && scrollTop<=(top+imagen.height())) {
				var scrollTop = $(this).scrollTop()-top;
				var pixels=scrollTop/150;
				imagen.css({
					"-webkit-filter": "blur("+pixels+"px)",
					"background-position": "center -"+pixels*50+"px"
				});
			}else if (scrollTop<top) {
				imagen.css({
					"-webkit-filter": "",
					"background-position": ""
				});
			}
		});
	});
	$(document).keyup(function(e){
		var tecla=e.which;
		if (tecla==33 || tecla==34 || tecla==35 || tecla==36) {
			$(this).trigger("scroll");
		}
	});
});