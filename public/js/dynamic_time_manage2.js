function dynamicTimemanage1() {
    var spn = 0;
    console.log(num);
    if (spn == 0) {
        $(".center-img").attr('src', image2.src);
        $("#wheel-image").attr("src", image.src);
        calculateResult();
        $("#innerLargeWheel").addClass("animatingimage");
        var ele = document.getElementById("canvas");
        ele.classList.add("spin-wheel");
        setTimeout(function () {
            if (spn == 0) {
                console.log(spn);
                ele.classList.remove("spin-wheel");
                deg = stopAngel[num];
                drawImg();

                $('#winnernumber').append("<input type='hidden' name='num' value=" + num + ">");
                $('#third' + num).removeClass('activeted');
                $('#third' + num).addClass('active');
                $('#winner').click();

            }
            spn++;
        }, 5000);
    }// spn++;
}// Stops the audio player after 6 seconds