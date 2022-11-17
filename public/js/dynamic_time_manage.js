function dynamicTimemanage() {
    doUpdates();
    setInterval(function start() {
        doUpdates();

        $(".center-img").attr('src', image2.src);
        $("#wheel-image").attr("src", image.src);
        drawImg(1);
        calculateResult();
        $("#innerLargeWheel").addClass("animatingimage");
        var ele = document.getElementById("canvas");
        ele.classList.add("spin-wheel");
        setTimeout(function () {
            ele.classList.remove("spin-wheel");
            deg = stopAngel[num];
            drawImg();

            $('#winnernumber').append("<input type='hidden' name='num' value=" + num + ">");
            $('#third' + num).removeClass('activeted');
            $('#third' + num).addClass('active');
            $('#winner').click();

        }, 5000);
    }, 61100);
}