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
	$().UItoTop({ scrollSpeed:100 });
	if ($('.schild').length > 0) {
		$('.schild').hoverIntent(function(){
			if ($(this).hasClass('open')) return;
			$('.schild.open').find('.sinfo, .simg').hide();
			$(this).animate({width: '430px'}, 200, function(){		
				$('.schild').removeClass('open');
				$(this).addClass('open').find('.sinfo, .simg').show();
			});
			$('.schild').not(this).animate({width: '94px'}, 200);
		}, function(){});
	}
	$('.enterprise_qq').click(function(e){
		e.preventDefault();
		window.open('http://b.qq.com/webc.htm?new=0&sid=4008304555&eid=218808P8z8p8Q8z8K8x8P&o=http://www.qnn.com.cn&q=7&ref='+document.location, '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
	});
	$('.individual_qq').click(function(e){
		e.preventDefault();
		window.open('http://wpa.qq.com/msgrd?v=3&uin='+$(this).data('qq')+'&site=qq&menu=yes', '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
	});
	if ($('#galslide').length==1) {
		$("#galslide").sliderkit({
			shownavitems:4,
			scroll:1,
			circular:true,
			start:2
		});
	}
});
/* hoverIntent */
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);
/* service sidebar */
function f_filterResults(a,b,c){a=a?a:0;if(b&&(!a||a>b))a=b;return c&&(!a||a>c)?c:a}function f_scrollTop(){return f_filterResults(window.pageYOffset?window.pageYOffset:0,document.documentElement?document.documentElement.scrollTop:0,document.body?document.body.scrollTop:0)};
function stick() {$('.zxkf').clearQueue().animate({top:f_scrollTop()+100});}
$(window).scroll(function(){stick();});
$(document).ready(function(){$('.zxkf').hoverIntent({over: function(){$('.zxkf').animate({width:133, left:$(window).width()-133}, 200);
}, out: function(){$('.zxkf').animate({width:33, left:$(window).width()-33}, 200);}, timeout: 500});$('.zxkf').show().css({'top':100, 'left':$(window).width()-33, 'width':33, 'position':'absolute', 'z-index':9999});stick();});
$(window).load(function(){$('.zxkf').show().css({'left':$(window).width()-33});});
$(window).resize(function(){$('.zxkf').show().css({'left':$(window).width()-33, 'width':33, 'position':'absolute', 'z-index':9999});stick();});
/* totop */
(function(a){a.fn.UItoTop=function(e){var b=a.extend({text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1200,easingType:"linear"},e),d="#"+b.containerID,c="#"+b.containerHoverID;a("body").append($('<a href="javascript:;" id="'+b.containerID+'">'+b.text+'</a>').click(function(){window.scrollTo(0, 0);}));a(d).hide().on("click.UItoTop",function(){a("html, body").animate({scrollTop:0},b.scrollSpeed,b.easingType);a("#"+b.containerHoverID,this).stop().animate({opacity:0},b.inDelay,b.easingType);return!1}).prepend('<span id="'+
b.containerHoverID+'"></span>').hover(function(){a(c,this).stop().animate({opacity:1},600,"linear")},function(){a(c,this).stop().animate({opacity:0},700,"linear")});a(window).scroll(function(){var c=a(window).scrollTop();"undefined"===typeof document.body.style.maxHeight&&a(d).css({position:"absolute",top:c+a(window).height()-50});c>b.min?a(d).fadeIn(b.inDelay):a(d).fadeOut(b.Outdelay)})}})(jQuery);
