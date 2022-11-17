function start_count_down() {
    $(".showload").hide();
    $(".none").show();

    var countDownDate = Date.parse(new Date) / 1e3;
    var now = new Date().getTime();
    var distance = 60 - countDownDate % 60;
    //alert(distance);
    var i = distance / 60,
        n = distance % 60,
        o = n / 10,
        s = n % 10;
    var minutes = Math.floor(i);
    var seconds = ('0' + Math.floor(n)).slice(-2);
    document.getElementById('#time').innerHTML = "<span class='timer'>0" + Math.floor(minutes) + "</span>" + "<span>:</span>" + "<span class='timer'>" + seconds + "</span>";
    if (distance == 60 || distance == 55 || distance == 50 || distance == 45 || distance == 40) {
        generateGameid();
        getLastTenResult();

    }
    if (distance <= 15) {
        $(".gbutton").prop('disabled', true);
    } else {
        $(".gbutton").prop('disabled', false);
    }
}

$(document).ready(function () {

    var x = setInterval(function () {
        start_count_down();
    }, 1e3);

    getLastTenResult();
    playAudioTimer();
    var sum = 0;
    $('.balls-2').one('click', function () {
    });

});

spinn_count++;

dynamicTimemanage1();
dynamicTimemanage();

$(".time-image").removeClass('blinking');

$(".time-image").addClass('blinking');