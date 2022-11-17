$(window).on('load resize', function () {
    if (window.innerHeight > window.innerWidth) {
        $('body').hide()
        if ($('body').siblings().length < 2) {
            $('body').after("<span>please use landscape</span>")
        }
    } else {
        $('body').show();
        $('body').next().remove();
    }
})
window.addEventListener("orientationchange", function () {// Announce the new orientation number
    if (window.innerHeight < window.innerWidth) {
        location.reload();
    }
}, false);