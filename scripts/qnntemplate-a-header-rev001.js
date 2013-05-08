var relative = null;
if (location.protocol==='file:') {
	relative = Array($('link[rel="canonical"]').attr('href').match(/\//g).length-2).join('../');
	if (relative == '') relative = './';
}
function to_relative(link, index) {
	if (!relative) return link;
	var hash = link ? link.match(/(#.*)$/) : null;
	if (hash) {
		link = link.replace(/#.*$/, '');
		if (link == '') link = './';
	}
	return link?(link.replace(/^\//, relative)+(index?(link.substr(-1)=='/'?'index.html':''):'')+(hash?hash[1]:'')):null;
}
$(function(){
	$('#menu a').each(function(){
		$(this).append('<em>'+$(this).data('sub')+'</em>');
	});
	if ($("#slider").length == 1) {
		$("#slider").sliderkit({
	        auto: true,
	        circular: true,
	        panelfx: "sliding",
	        autospeed: 5000
	    });
    }
    if ($("#etalage").length == 1) {
		$("#etalage").etalage({
			thumb_image_width: 250,
			thumb_image_height: 250,
			source_image_width: 600,
			source_image_height: 600,
			zoom_area_width: 300,
			zoom_area_height: 300,
			zoom_area_distance: 5,
			small_thumbs: 4,
			smallthumb_inactive_opacity: 0.3,
			smallthumbs_position: "bottom",
			speed: 200,
			show_icon: false,
			autoplay: false,
			keyboard: false,
			zoom_easing: false
		});
		$('#etalage').bind('contextmenu', function(){return false;});
	}
	if (relative) {
		$('a').attr('href', function(a,b){return to_relative(b, true);});
		$('img').attr('src', function(a,b){return to_relative(b, false);});
	}
	$(".tabbtn").bind("click", function () {
		var a = $(this).parent().index();
		$(".tabbtn").removeClass("sel");
		$(this).addClass("sel");
		$(".maincontent div.mc").hide();
		$(".maincontent div").eq(a).show()
	});
});
