var relative = null;
if (location.protocol==='file:') {
	relative = Array($('link[rel="canonical"]').attr('href').match(/\//g).length-2).join('../');
	if (relative == '') relative = './';
}
function to_relative(link, index) {
	if (!relative) return link;
	var hash = link ? link.match(/(#.*)$/) : null;
	if (hash) link = link.replace(/#.*$/, '');
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
    if (relative) {
		$('a').attr('href', function(a,b){return to_relative(b, true);});
		$('img').attr('src', function(a,b){return to_relative(b, false);});
	}
});
