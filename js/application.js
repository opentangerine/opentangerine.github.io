$(function() {
	// cookies logic
	if(!$.cookie('cookie_policy')) {
		$('.js-cookies').show()
	}
	$('.js-cookies-agree-button').click(function() {
		$.cookie('cookie_policy', 'true', { expires: 10000 });
		$('.js-cookies').hide()
        $('#js-cookies-modal').foundation('reveal', 'close');
	})

	// init foundation
	try {
        $(document).foundation();
    } catch(err) {
        document.getElementById('js-out-of-date').style.display = 'block'
    }

    // paralax
    if(!(/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        var $window = $(window)
        $('[data-type="background"]').each(function(){
            var $scroll = $(this);
            $window.on('scroll', function() {
                var yPos = -($window.scrollTop() / $scroll.data('speed'));
                var coords = '0 ' + yPos + 'px';
                $scroll.css({ backgroundPosition: coords });
            })
        })
    }

})