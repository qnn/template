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
	var chkLine = function(){
		$('.pro2cols').each(function(){
			var a = $('.pro2col_l', this), b = $('.pro2col_r', this);
			var c = b.find('.maincontent');
			if (c.length > 0 && c.height() > b.height()) {
				b.removeAttr('style');
			} else if (a.height() > b.height()) {
				b.attr('style','height: '+a.height()+'px !important;');
			}
		});
	};
	$(".tabbtn").bind("click", function () {
		var a = $(this).parent().index();
		$(".tabbtn").removeClass("sel");
		$(this).addClass("sel");
		$(".maincontent div.mc").hide();
		$(".maincontent div").eq(a).show()
		chkLine();
	});
	chkLine();
	if ($("img.lazy").length > 0) {
		$("img.lazy").lazyload({ threshold : 400 });
	}
	$().UItoTop({ easingType: 'easeOutQuart' });
});
/* totop */
jQuery.extend(jQuery.easing,{easeOutQuart:function(e,a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b}});
(function(a){a.fn.UItoTop=function(e){var b=a.extend({text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1200,easingType:"linear"},e),d="#"+b.containerID,c="#"+b.containerHoverID;a("body").append($('<a href="javascript:;" id="'+b.containerID+'">'+b.text+'</a>').click(function(){window.scrollTo(0, 0);}));a(d).hide().on("click.UItoTop",function(){a("html, body").animate({scrollTop:0},b.scrollSpeed,b.easingType);a("#"+b.containerHoverID,this).stop().animate({opacity:0},b.inDelay,b.easingType);return!1}).prepend('<span id="'+
b.containerHoverID+'"></span>').hover(function(){a(c,this).stop().animate({opacity:1},600,"linear")},function(){a(c,this).stop().animate({opacity:0},700,"linear")});a(window).scroll(function(){var c=a(window).scrollTop();"undefined"===typeof document.body.style.maxHeight&&a(d).css({position:"absolute",top:c+a(window).height()-50});c>b.min?a(d).fadeIn(b.inDelay):a(d).fadeOut(b.Outdelay)})}})(jQuery);
