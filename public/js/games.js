var image = new Image();
image.src = 'public/assets/wheel/20210816_233159.gif';
var image2 = new Image();
image2.src = 'public/assets/centerwheel.gif';
var add_amt = 2;
var globar_round_count = 0;
var joker_count = 0;
var joker_found = 0;
var check_autobit = parseInt(1);
var bet_accept_checker = 1;
var key_active = 1;
var take_counter = 1;
var tabIndexKey1 = 1;
var enter_accept = 1;
var keyevent = parseInt(0);
var ppp = parseInt('0');
var print_arr = [];
print_arr['zero'] = 0;
print_arr['one'] = 0;
print_arr['two'] = 0;
print_arr['three'] = 0;
print_arr['four'] = 0;
print_arr['five'] = 0;
print_arr['six'] = 0;
print_arr['seven'] = 0;
print_arr['eight'] = 0;
print_arr['nine'] = 0;

function store_print(amt, no) {
    print_arr[no] = print_arr[no] + amt;
    console.log('data', print_arr);
}

if (ppp > 0) {
    var take_done_status = 0;
} else {
    var take_done_status = 1;
}
var color = ['#f65d0a', '#ffffff', '#f65d0a', '#ffffff', '#f65d0a', '#ffffff', '#f65d0a', '#ffffff', '#f65d0a', '#ffffff', '#f65d0a', '#ffffff', '#f65d0a', '#ffffff', '#f65d0a', '#ffffff', '#f65d0a', '#ffffff', '#f65d0a', '#ffffff'];
var label = ['0', '♈︎', '1', '♉︎', '2', '♊︎', '3', '♋︎', '4', '♌︎', '5', '♍︎', '6', '♎︎', '7', '♏︎', '8', ' ♐︎', '9', '♒︎'];
var stopAngel = [];
var slices = color.length;
//console.log(slices)
var sliceDeg = 360 / slices;
var num = document.getElementById("results").value;
if (num == '') {
    num = Math.floor(Math.random() * 10);
}
if (num == 'a') {
    var deg = 260;
}
if (num == 0) {//var deg = 290;
    var deg = 290;
}
if (num == 1) {
    var deg = 260;
}
if (num == 2) {
    var deg = 252;
}
if (num == 3) {
    var deg = 224;
}
if (num == 4) {
    var deg = 218;
}
if (num == 5) {
    var deg = 190;
}
if (num == 6) {
    var deg = 180;
}
if (num == 7) {
    var deg = 153;
}
if (num == 8) {
    var deg = 504;
}
if (num == 9) {
    var deg = 477;
}
var speed = 2;
var slowDownRand = 0;
var ctx = document.getElementById('canvas').getContext('2d');
var width = document.getElementById('canvas').width;
var center = width / 2;
// var center = 150;
var isStopped = false;
var lock = false;

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

function oddEven(num) {
    return num % 2 ? true : false;
}

function deg2rad(deg) {
    return deg * Math.PI / 180;
}

function drawSlice(index, deg, color) {
    var sAngel;
    var current = (index <= 0) ? deg : stopAngel[index - 1];
    if (oddEven(index)) {
        if (current <= 0) {
            sAngel = Math.abs(Math.floor(260 + sliceDeg + 10));
        } else {
            sAngel = Math.abs(Math.floor(current - sliceDeg + 10));
        }
        current = sAngel;
        stopAngel.push(current);
    } else {
        if (current <= 0) {
            sAngel = Math.abs(Math.floor(260 + sliceDeg - 10));
        } else {
            sAngel = Math.abs(Math.floor(current - sliceDeg - 10));
        }
        current = sAngel;
        stopAngel.push(current);
    }
    stopAngel.push
    ctx.beginPath();
    ctx.lineWidth = "3";
// console.log(ctx);
    ctx.fillStyle = color;
    ctx.moveTo(center, center);
    ctx.arc(center, center, center, deg2rad(deg), deg2rad(deg + sliceDeg), false);
    ctx.lineTo(center, center);
    ctx.fill();
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.arc(center, center, center - 40, 0, 2 * Math.PI);
    ctx.strokeStyle = "#fcdd42";
    ctx.stroke();
    ctx.beginPath();

    if (color == "#ffffff") {
        ctx.fillStyle = "red";
    } else {
        ctx.fillStyle = "#FFA500";
    }
    ctx.moveTo(center, center);
    ctx.arc(center, center, center - 40, deg2rad(deg), deg2rad(deg + sliceDeg), false);
    ctx.strokeStyle = 'yellow';
    ctx.fill();

}

function drawSliceOut(index, deg, color) {
    ctx.beginPath();
// console.log(ctx);
    ctx.fillStyle = '#000';
    ctx.moveTo(160, 160);
    ctx.arc(100, 150, 150, 0, 360, false);
    ctx.lineTo(150, 150);
    ctx.fill();
}

function drawText(deg, text) {
    console.log("text", text);
    ctx.save();
    ctx.translate(160, 160);
    ctx.rotate(deg2rad(deg));
//ctx.rotate(deg2rad(200));
//ctx.rotate(20 * Math.PI / 45);
    ctx.textAlign = "center";
    ctx.font = 'bold 37px digital-dismay';
    ctx.textBaseline = 'middle';
// deg.setTransform(1,0,0,1,0,0);
    ctx.fillText(text, 140, 5);
    ctx.restore();
}

function drawImg1() {
    ctx.clearRect(0, 0, width, width);
    for (let i = 0; i < slices; i++) {//drawInnerSlice(i, deg, color[i]);
        drawSlice(i, deg, color[i]);
        if (color[i] == '#ffffff') {
            ctx.fillStyle = "#FFD700";
            drawText(deg + sliceDeg / 2, label[i]);
            ctx.fillStyle = "red";
        } else {
            ctx.fillStyle = "#FFFFFF";
            drawText(deg + sliceDeg / 2, label[i]);
        }
        deg += sliceDeg;
    }// console.log("Stop Angel " + stopAngel);
}

function drawImg(type = null) {

    if (type == 3) {
        var img_last = $("#last_round").val();

        if (img_last == '') {
            var img_name = Math.floor(Math.random() * 9);

        } else {
            var img_name = parseInt(img_last);
        }


        if (img_name != 0) {
            img_name = (10 - img_name) * 4;
        }

        $("#wheel-image").attr("src", "public/assets/wheel/" + img_name + ".png");
    } else {
        var img_name = Math.floor(Math.random() * 19);

        img_name = img_name % 3;
        if (img_name == 0) {
            img_name = 3;
        }
        if (num == 0) {
            $("#wheel-image").attr("src", "public/assets/wheel/0.png");
        } else {
            $("#wheel-image").attr("src", "public/assets/wheel/" + ((10 - num) * 4) + ".png");
        }
        $(".center-img").attr("src", "public/assets/Logom" + img_name + ".jpg");
    }
}

function anim() {
    isStopped = true;
    deg += speed;
    deg %= 360;
    if (!isStopped && speed < 3) {
        speed = speed + 1 * 0.1;
    }
    if (isStopped) {
        if (!lock) {
            lock = true;
            slowDownRand = rand(0.994, 0.998);
        }
        speed = speed > 0.2 ? speed *= slowDownRand : 0;
    }
    if (lock && !speed) {
        console.log("calc " + Math.floor(((360 - 208 - 90) % 360) / sliceDeg))
        var ai = Math.floor(((360 - deg - 90) % 360) / sliceDeg);

        ai = (slices + ai) % slices;
        return alert("You got:\n" + label[ai]);
        ctx.arc(150, 150, 150, 8.85131263511415, 9.748910536139757);
        ctx.fill();
        deg = 208;
        drawImg(1);
    }
    drawImg(2);
    window.requestAnimationFrame(anim);
}

drawImg(3);

function calculateResult() {
    $(".balls-2").removeClass('active');
    $.ajax({
        url: "winsitest/1",
        method: 'get',
        data: $('#winners').serialize(), success: function (response) {
            response2 = JSON.parse(response);
            num = parseInt(response2.number);
            joker_found = response2.joker;
        }
    });
}

function setAutoBet(obj) {
    if ($(obj).is(":checked")) {
        check_autobit = 1;
    } else {
        check_autobit = 0;
    }
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name=csrf-token]').attr('content')
        }
    });
    $.ajax({
        url: "update-check",
        method: 'post',
        data: {'check_autobit': check_autobit},
        success: function (response) {
        }
    });
}

function setkeyenter(obj) {
    var check_key_enter = 0;
    if ($(obj).is(":checked")) {
        check_key_enter = 1;
        keyevent = 0;
        $(".qty0").attr("readonly", false);
        $(".qty1").attr("readonly", false);
        $(".qty2").attr("readonly", false);
        $(".qty3").attr("readonly", false);
        $(".qty4").attr("readonly", false);
        $(".qty5").attr("readonly", false);
        $(".qty6").attr("readonly", false);
        $(".qty7").attr("readonly", false);
        $(".qty8").attr("readonly", false);
        $(".qty9").attr("readonly", false);
    } else {
        check_key_enter = 0;
        keyevent = 1;
        $(".qty0").attr("readonly", true);
        $(".qty1").attr("readonly", true);
        $(".qty2").attr("readonly", true);
        $(".qty3").attr("readonly", true);
        $(".qty4").attr("readonly", true);
        $(".qty5").attr("readonly", true);
        $(".qty6").attr("readonly", true);
        $(".qty7").attr("readonly", true);
        $(".qty8").attr("readonly", true);
        $(".qty9").attr("readonly", true);
    }
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name=csrf-token]').attr('content')
        }
    });
    $.ajax({
        url: "update-key-enter",
        method: 'post',
        data: {'key_enter': check_key_enter},
        success: function (response) {
        }
    });
}





function startTimer(duration, display) {
    var spinn_count = 0;
    setInterval(function () {

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

        var timer = distance, minutes, seconds;

        display.textContent = "00:"+ seconds;
        if (seconds == 15) {

            $(".time-image").addClass('blinking');
        }
        if (seconds == 12) {
            console.log('call desable');
            desabled();
        }
        if (seconds == 52 && spinn_count != 0) {
        }
        if (seconds == 48) {
            var winning_amount_take = parseInt($(".winner-img").html());

            if (winning_amount_take == 0) {
                take_done_status = 1;
            }
        }

        if (timer == 60) {

            timer = distance;

            $(".time-image").removeClass('blinking');

            if (spinn_count == 0) {
                spinn_count++;

                dynamicTimemanage1();
                dynamicTimemanage();
            }
        }
    }, 1000);
}


function refresh() {
    window.location.reload();
}

function doUpdates() {
    $("#btn").trigger('click');

}

function desabled() {
    $(".balls-2").addClass('disabled', true);
    $(".balls").addClass('disabled', true);
    console.log('call desable', check_autobit);
    console.log('call desable', take_done_status)
    if (check_autobit == 1 && take_done_status == 1) {
        $("#send_bets").trigger("click");
    } else {
        key_active = 0;
        $("#cancel_bets").addClass('disabled', true);
        $("#send_bets").addClass('disabled', true);
        $(".btn-speak").addClass('disabled', true);
        $(".btn-take").addClass('disabled', true);
    }
    $(".qty0").attr("readonly", true);
    $(".qty1").attr("readonly", true);
    $(".qty2").attr("readonly", true);
    $(".qty3").attr("readonly", true);
    $(".qty4").attr("readonly", true);
    $(".qty5").attr("readonly", true);
    $(".qty6").attr("readonly", true);
    $(".qty7").attr("readonly", true);
    $(".qty8").attr("readonly", true);
    $(".qty9").attr("readonly", true);
    enter_accept = 0;
}

function valid_numbers(e) {
    var key = e.which || e.KeyCode;
    if (key >= 48 && key <= 57)

        return true;
    else return false;
}


$('#a,#b,#c,#d,#e,#f,#g,#h,#i,#j').on('focusin', function () {
    console.log('focus', $(this).val());
    if ($(this).val() == '') {
        $(this).data('val', 0);
    } else {
        $(this).data('val', $(this).val());
    }
});

$('#a,#b,#c,#d,#e,#f,#g,#h,#i,#j').on('keydown', function (e) {
    if (e.which == 37) {
        var tabIndexKey = document.activeElement.tabIndex - 1;
        var num_fuc = $('[tabindex=' + tabIndexKey + ']').val();
        $('[tabindex=' + tabIndexKey + ']').focus().val("").val(num_fuc);
        if (tabIndexKey == 1) {
            tabIndexKey1 = 1;
        } else {
            tabIndexKey1 = 0;
        }
    }
    if (e.which == 39) {
        var tabIndexKey = document.activeElement.tabIndex + 1;
        var num_fuc = $('[tabindex=' + tabIndexKey + ']').val();
        $('[tabindex=' + tabIndexKey + ']').focus().val("").val(num_fuc);
        if (tabIndexKey == 1) {
            tabIndexKey1 = 1;
        } else {
            tabIndexKey1 = 0;
        }
    }
    console.log('tabIndexKey1', tabIndexKey1);
});
$('#a,#b,#c,#d,#e,#f,#g,#h,#i,#j').change(function (e) {
    var wallet = parseInt($("#wallet_balance").text());
    var prev_val = parseInt($(this).data('val'));
    var bal_name = ($(this).data('id'));
    var bal_name2 = ($(this).data('ref'));
    var current_val = parseInt($(this).val());
    var total_this = parseInt($("#" + bal_name2).val());
    console.log('total_this', total_this);
    if (isNaN(parseFloat(total_this))) {
        total_this = 0;
    }
    console.log('total_this', total_this);
    if (isNaN(parseFloat(current_val))) {
        current_val = 0;
    }

    var diff = current_val - prev_val;
    console.log('current_val', current_val);
    console.log('prev_val', prev_val);
    console.log('diff', diff);
    store_print(diff, bal_name);
    $("#" + bal_name2).val(parseInt(total_this) + parseInt(diff));
    if (wallet >= diff) {
        var a = parseInt($("#a").val());
        if (a >= 5000) {
            $("#a").val(5000);
            $("#a1").val(5000);
            a = 5000;
        }
        var b = parseInt($("#b").val());
        if (b >= 5000) {
            $("#b").val(5000);
            $("#b1").val(5000);
            b = 5000;
        }
        var c = parseInt($("#c").val());
        if (c >= 5000) {
            $("#c").val(5000);
            $("#c1").val(5000);
            c = 5000;
        }
        var d = parseInt($("#d").val());
        if (d >= 5000) {
            $("#d").val(5000);
            $("#d1").val(5000);
            d = 5000;
        }
        var e = parseInt($("#e").val());
        if (e >= 5000) {
            $("#e").val(5000);
            $("#e1").val(5000);
            e = 5000;
        }
        var f = parseInt($("#f").val());
        if (f >= 5000) {
            $("#f").val(5000);
            $("#f1").val(5000);
            f = 5000;
        }
        var g = parseInt($("#g").val());
        if (g >= 5000) {
            $("#g").val(5000);
            $("#g1").val(5000);
            g = 5000;
        }
        var h = parseInt($("#h").val());
        if (h >= 5000) {
            $("#h").val(5000);
            $("#h1").val(5000);
            h = 5000;
        }
        var i = parseInt($("#i").val());
        if (i >= 5000) {
            $("#i").val(5000);
            $("#i1").val(5000);
            i = 5000;
        }
        var j = parseInt($("#j").val());
        if (j >= 5000) {
            $("#j").val(5000);
            $("#j1").val(5000);
            j = 5000;
        }
        if (isNaN(parseFloat(a))) {
            a = 0;
        }
        if (isNaN(parseFloat(b))) {
            b = 0;
        }
        if (isNaN(parseFloat(c))) {
            c = 0;
        }
        if (isNaN(parseFloat(d))) {
            d = 0;
        }
        if (isNaN(parseFloat(e))) {
            e = 0;
        }
        if (isNaN(parseFloat(f))) {
            f = 0;
        }
        if (isNaN(parseFloat(g))) {
            g = 0;
        }
        if (isNaN(parseFloat(h))) {
            h = 0;
        }
        if (isNaN(parseFloat(i))) {
            i = 0;
        }
        if (isNaN(parseFloat(j))) {
            j = 0;
        }
        total = a + b + c + d + e + f + g + h + i + j;
        $("#btn-count").html(total);
    } else {
        console.log('prev_val', prev_val);
        $(this).val(prev_val);
    }
});
$('#btn-take').click(function (e) {
    if (take_counter == 0) {
        take_counter = 1;
        e.preventDefault();
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name=csrf-token]').attr('content')
            }
        });
        var winning_amount_take = parseInt($(".winner-img").html());
        $.ajax({
            url: "https://funtargetgame.in/shops/games/btn-take",
            method: 'post',
            data: {'winning_amount_take': winning_amount_take, 'winning_amount_take_type': 'a'},
            success: function (response) {
                $('#third0').removeClass('activeted');
                $('#third1').removeClass('activeted');
                $('#third2').removeClass('activeted');
                $('#third3').removeClass('activeted');
                $('#third4').removeClass('activeted');
                $('#third5').removeClass('activeted');
                $('#third6').removeClass('activeted');
                $('#third7').removeClass('activeted');
                $('#third8').removeClass('activeted');
                $('#third9').removeClass('activeted');
                $('#third0').removeClass('active');
                $('#third1').removeClass('active');
                $('#third2').removeClass('active');
                $('#third3').removeClass('active');
                $('#third4').removeClass('active');
                $('#third5').removeClass('active');
                $('#third6').removeClass('active');
                $('#third7').removeClass('active');
                $('#third8').removeClass('active');
                $('#third9').removeClass('active');

                var wallet_balance = parseInt($('#wallet_balance').html());
                wallet_balance = wallet_balance + winning_amount_take;
                $('#wallet_balance').html(wallet_balance);
                take_done_status = 1;
                $(".qty0").val(0);
                $("#a").val(0);
                $(".qty1").val(0);
                $("#b").val(0);
                $(".qty2").val(0);
                $("#c").val(0);
                $(".qty3").val(0);
                $("#d").val(0);
                $(".qty4").val(0);
                $("#e").val(0);
                $(".qty5").val(0);
                $("#f").val(0);
                $(".qty6").val(0);
                $("#g").val(0);
                $(".qty7").val(0);
                $("#h").val(0);
                $(".qty8").val(0);
                $("#i").val(0);
                $(".qty9").val(0);
                $("#j").val(0);
                $("#btn-count").html(0);
                $(".winner-img").html(0);
            }
        });
    }
})
$('#send_bets').click(function (e) {

    if (take_done_status == 1) {
        e.preventDefault();

        $('#send_bets').html('Sending..');

        $("#cancel_bets").addClass('disabled', true);
        $("#send_bets").addClass('disabled', true);
        $(".btn-speak").addClass('disabled', true);
        $(".btn-take").addClass('disabled', true);
        key_active = 0;
        var a1 = parseInt($("#a1").val());
        if (isNaN(parseFloat(a1))) {
            a1 = 0;
        }
        var b1 = parseInt($("#b1").val());
        if (isNaN(parseFloat(b1))) {
            b1 = 0;
        }
        var c1 = parseInt($("#c1").val());
        if (isNaN(parseFloat(c1))) {
            c1 = 0;
        }
        var d1 = parseInt($("#d1").val());
        if (isNaN(parseFloat(d1))) {
            d1 = 0;
        }
        var e1 = parseInt($("#e1").val());
        if (isNaN(parseFloat(e1))) {
            e1 = 0;
        }
        var f1 = parseInt($("#f1").val());
        if (isNaN(parseFloat(f1))) {
            f1 = 0;
        }
        var g1 = parseInt($("#g1").val());
        if (isNaN(parseFloat(g1))) {
            g1 = 0;
        }
        var h1 = parseInt($("#h1").val());
        if (isNaN(parseFloat(h1))) {
            h1 = 0;
        }
        var i1 = parseInt($("#i1").val());
        if (isNaN(parseFloat(i1))) {
            i1 = 0;
        }
        var j1 = parseInt($("#j1").val());
        if (isNaN(parseFloat(j1))) {
            j1 = 0;
        }

        $(".btn-count").html(parseInt(a1 + b1 + c1 + d1 + e1 + f1 + g1 + h1 + i1 + j1));

        console.log($('#contact_us').serialize());

//                 $.ajax({
//                     url: "https://funtargetgame.in/shops/games/bets",
//                     method: 'post',
//                     data: $('#contact_us').serialize(), success: function (response) {// joker_found=0;
//                         $("#joker_found").val(0);
//                         console.log(response.data.zero);
//                         $('#zero').val(response.data.zero);
//                         $('#one').val(response.data.one);
//                         $('#two').val(response.data.two);
//                         $('#three').val(response.data.three);
//                         $('#foure').val(response.data.foure);
//                         $('#five').val(response.data.five);
//                         $('#six').val(response.data.six);
//                         $('#saven').val(response.data.saven);
//                         $('#eight').val(response.data.eight);
//                         $('#nine').val(response.data.nine);
//                         $('#wallet_balance').html(response.data.wallet);
//                         console.log('avl', response.data.wallet);
// // $('#wallet').html('<p class=results>'+response.data.wallet+'</p>');
//                         bet_accept_checker = 1;
// //------------------------
//                         $('#send_bets').html('Bet accepted');
//                         $('#res_message').show();
//                         $('#res_losers').val('Bet accepted');
//                         $('#res_losers').css("color", "green");
//                         $('#res_message').html(response.msg);
//                         setTimeout(function () {
//                             $('#res_message').hide();
// // location.reload();
//                         }, 1000);
// //--------------------------
//                     }
//                 });
    }
});


$('#winner').click(function (e) {
    e.preventDefault();
    /*Ajax Request Header setup*/
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name=csrf-token]').attr('content')
        }
    });
    $('#winner').html('Sending..');

    $("#cancel_bets").removeClass('disabled');
    $("#send_bets").removeClass('disabled');
    $(".btn-take").addClass('disabled', false);
    $(".btn-take").removeClass('disabled');
    $(".btn-speak").removeClass('disabled');
    key_active = 1;

    $.ajax({
        url: "https://funtargetgame.in/shops/games/wins",
        method: 'post',
        data: $('#winners').serialize(), success: function (response) {

            $('#winner').html('Submit');
            if (bet_accept_checker == 1 && take_done_status == 1) {
                $('#res_message').show();
                if (response.status == true) {
                    $('#res_losers').val(response.msg);

                    var wallet_balance = parseInt($('#wallet_balance').html());
                    console.log('joker_found', joker_found);
                    if (joker_found == 1) {//joker_found=0;
                        console.log('joker_found2', joker_found);
                        $(".winner-img").html(parseInt($('.qtyn' + num).val()) * 18);
                        wallet_balance = wallet_balance + (parseInt($('.qtyn' + num).val()) * 18);

                        var last_winner_amount = parseInt($('.qtyn' + num).val()) * 18;
                        $.ajaxSetup({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name=csrf-token]').attr('content')
                            }
                        });
                        $.ajax({
                            url: "https://funtargetgame.in/shops/games/update-last-winner",
                            method: 'post',
                            data: {'amt': last_winner_amount, 'num': num},
                            success: function (response) {// location.reload();
                            }
                        });
                    } else {
                        console.log('joker_found3', joker_found);
                        $(".winner-img").html(parseInt($('.qtyn' + num).val()) * 9);
                        wallet_balance = wallet_balance + (parseInt($('.qtyn' + num).val()) * 9);
// $('#wallet_balance').html(wallet_balance);
                        var last_winner_amount = parseInt($('.qtyn' + num).val()) * 9;
                        $.ajaxSetup({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name=csrf-token]').attr('content')
                            }
                        });
                        $.ajax({
                            url: "https://funtargetgame.in/shops/games/update-last-winner",
                            method: 'post',
                            data: {'amt': last_winner_amount, 'num': num},
                            success: function (response) {// location.reload();
                            }
                        });
                    }// $('#res_winner').hide();
                } else {
                }
                if (1) {
                    $('#res_losers').css("color", "red");
                    $('#res_losers').val(response.msg);

                }
            }
            var last_prev_ten = $(".ten-dta-img").html();
            console.log(last_prev_ten);
            $(".ten-dta-img").html("");
            var myArr = last_prev_ten.split(" ");

            var str_winnrt_num = ""
            var j = 0;
            for (let i = 0; i < myArr.length; i++) {
                if (myArr[i] != '' && myArr[i] != " ") {
                    str_winnrt_num = str_winnrt_num + ' ' + myArr[i];
                    j++;
                    if (j == 9) {
                        break;
                    }
                }
            }
            str_winnrt_num = num + ' ' + str_winnrt_num;
            $(".ten-dta-img").html(str_winnrt_num);
            setTimeout(function () {
                $('#res_message').hide();
                $('#msg_div').hide();
                location.reload();
            }, 4000);

        }
    });
});

$(document).ready(function () {
    $(".input").keyup(function () {
        var wallet = $("#wallet").text();
        var sum = 0;
        $('.input').each(function () {
            sum += Number($(this).val());
        });
        if (wallet >= sum) {
        } else {
            $(".ui-button").prop('disabled', true);
            $("#betAmountResult").text('Error, not enough balance');
        }
    })
});
$(document).ready(function () {
    var sum = 0;
    add_amt = 1;
    $('.balls').on('click', function () {
        $(".balls").each((key, element) => {
            $(element).css("opacity", "1");
        });
        $(this).css("opacity", "0.6");
        var wallet = $("#wallet").text();
        var ball = $(this).text();
        add_amt = 1;

    });

});


function play2(argument) {
    play();
    if (add_amt == 1) {
        $(argument).addClass('activeted');
        $('#res_losers').val('Press Bet OK and Bet cancel before 12 seconds');
        $('#res_losers').css("color", "green");
        var ball = $("#temp_bidAmt").val();

        var ballb = $(argument).text();

        var old_val_on_no = 0;
        ball = parseInt(ball);
        var total_load = parseInt($("#btn-count").html());
        total_load = total_load + ball;
        var wallet = $("#wallet_balance").text();
        if (ballb == 0) {
            console.log('ss', ball);
            if (parseInt(wallet) >= ball) {
                var prevamt = $("#a").val();
                var prevamt1 = parseInt($("#a1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + ball;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - ball);
                    $("#a").val(val);
                    var val1 = prevamt1 + ball;
                    $("#a1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'zero');
                } else {
                    $(".ui-button").prop('disabled', true);

                }
            } else {
                $(".ui-button").prop('disabled', true);
                $("#betAmountResult").text('Error, not enough balance');
            }
        } else if (ballb == 1) {
            tabIndexKey1 = 0;
            console.log('ss1', ball);
            if (parseInt(wallet) >= ball) {
                var prevamt = $("#b").val();
                var prevamt1 = parseInt($("#b1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                console.log('prevamtss1', prevamt);
                prevamt = parseInt(prevamt);
                var val = prevamt + ball;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - ball);
                    $("#b").val(val);
                    var val1 = prevamt1 + ball;
                    $("#b1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'one');
                } else {
                    $(".ui-button").prop('disabled', true);
// $("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            } else {
                $(".ui-button").prop('disabled', true);
                $("#betAmountResult").text('Error, not enough balance');
            }
        } else if (ballb == 2) {
            if (parseInt(wallet) >= ball) {
                var prevamt = $("#c").val();
                var prevamt1 = parseInt($("#c1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + ball;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - ball);
                    $("#c").val(val);
                    var val1 = prevamt1 + ball;
                    $("#c1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'two');
                } else {
                    $(".ui-button").prop('disabled', true);
//$("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            } else {
                $(".ui-button").prop('disabled', true);
                $("#betAmountResult").text('Error, not enough balance');
            }
        } else if (ballb == 3) {
            if (parseInt(wallet) >= ball) {
                var prevamt = $("#d").val();
                var prevamt1 = parseInt($("#d1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + ball;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - ball);
                    $("#d").val(val);
                    var val1 = prevamt1 + ball;
                    $("#d1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'three');
                } else {
                    $(".ui-button").prop('disabled', true);
// $("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            } else {
                $(".ui-button").prop('disabled', true);
                $("#betAmountResult").text('Error, not enough balance');
            }
        } else if (ballb == 4) {
            if (parseInt(wallet) >= ball) {
                var prevamt = $("#e").val();
                var prevamt1 = parseInt($("#e1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + ball;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - ball);
                    $("#e").val(val);
                    var val1 = prevamt1 + ball;
                    $("#e1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'four');
                } else {
                    $(".ui-button").prop('disabled', true);
// $("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            } else {
                $(".ui-button").prop('disabled', true);
                $("#betAmountResult").text('Error, not enough balance');
            }
        } else if (ballb == 5) {
            if (parseInt(wallet) >= ball) {
                var prevamt = $("#f").val();
                var prevamt1 = parseInt($("#f1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + ball;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - ball);
                    $("#f").val(val);
                    var val1 = prevamt1 + ball;
                    $("#f1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'five');
                } else {
                    $(".ui-button").prop('disabled', true);
// $("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            } else {
                $(".ui-button").prop('disabled', true);
                $("#betAmountResult").text('Error, not enough balance');
            }
        } else if (ballb == 6) {
            if (parseInt(wallet) >= ball) {
                var prevamt = $("#g").val();
                var prevamt1 = parseInt($("#g1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + ball;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - ball);
                    $("#g").val(val);
                    var val1 = prevamt1 + ball;
                    $("#g1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'six');
                } else {
                    $(".ui-button").prop('disabled', true);
// $("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            } else {
                $(".ui-button").prop('disabled', true);
                $("#betAmountResult").text('Error, not enough balance');
            }
        } else if (ballb == 7) {
            if (parseInt(wallet) >= ball) {
                var prevamt = $("#h").val();
                var prevamt1 = parseInt($("#h1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + ball;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - ball);
                    $("#h").val(val);
                    var val1 = prevamt1 + ball;
                    $("#h1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'seven');
                } else {
                    $(".ui-button").prop('disabled', true);
// $("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            } else {
                $(".ui-button").prop('disabled', true);
                $("#betAmountResult").text('Error, not enough balance');
            }
        } else if (ballb == 8) {
            if (parseInt(wallet) >= ball) {
                var prevamt = $("#i").val();
                var prevamt1 = parseInt($("#i1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + ball;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - ball);
                    $("#i").val(val);
                    var val1 = prevamt1 + ball;
                    $("#i1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'eight');
                } else {
                    $(".ui-button").prop('disabled', true);
// $("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            } else {
                $(".ui-button").prop('disabled', true);
                $("#betAmountResult").text('Error, not enough balance');
            }
        } else if (ballb == 9) {
            if (parseInt(wallet) >= ball) {
                var prevamt = $("#j").val();
                var prevamt1 = parseInt($("#j1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + ball;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - ball);
                    $("#j").val(val);
                    var val1 = prevamt1 + ball;
                    $("#j1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'nine');
                } else {
                    $(".ui-button").prop('disabled', true);
// $("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            } else {
                $(".ui-button").prop('disabled', true);
                $("#betAmountResult").text('Error, not enough balance');
            }
        }
    }
}

function work_on_enter() {

    var prev_val = parseInt($('#b').data('val'));
    var bal_name = ($('#b').data('id'));
    var current_val = parseInt($('#b').val());
    var total_this = parseInt($('#b1').val());
    if (isNaN(parseFloat(total_this))) {
        total_this = 0;
    }
    if (isNaN(parseFloat(current_val))) {
        current_val = 0;
    }
    var diff = current_val - prev_val;
    store_print(diff, bal_name);
    $('#b1').val(parseInt(total_this) + parseInt(diff));

    return true;
}

document.onkeypress = myKeyPressHandler;

function myKeyPressHandler(event) {//console.log(e);
    if (event.charCode == 32) {
        $(".btn-take").trigger("click");
    }
    if (event.charCode == 13 && enter_accept == 1) {
        if (tabIndexKey1 == 1) {
            console.log('13 no if section');
            if (work_on_enter()) {
                console.log('13 no if inner section');
                $("#save_bet").trigger("click");
                $("#b").data('val', "");
                $("#b").val("");
                $('[tabindex=1]').focus().val("");
            }
        } else {
            console.log('13 no else section');
            $("#save_bet").trigger("click");
            $("#b").data('val', "");
            $("#b").val("");
            $('[tabindex=1]').focus().val("");
        }
        tabIndexKey1 = 1;
    }
    if (event.charCode >= 48 && event.charCode <= 57 && key_active == 1 && keyevent == 1) {
        tabIndexKey1 = 0;
        var no = String.fromCharCode(event.charCode);
        var amt = $("#temp_bidAmt").val();

        amt = parseInt(amt);
        var total_load = parseInt($("#btn-count").html());
        total_load = total_load + amt;
        var wallet = $("#wallet_balance").text();
        if (parseInt(wallet) >= amt) {
            if (no == 1) {
                var prevamt = $("#b").val();
                var prevamt1 = parseInt($("#b1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + amt;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - amt);
                    $("#b").val(val);
                    var val1 = prevamt1 + amt;
                    $("#b1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'one');
                } else {
                    $(".ui-button").prop('disabled', true);

                }
            }
            if (no == 2) {
                var prevamt = $("#c").val();
                var prevamt1 = parseInt($("#c1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + amt;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - amt);
                    $("#c").val(val);
                    var val1 = prevamt1 + amt;
                    $("#c1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'two');
                } else {
                    $(".ui-button").prop('disabled', true);

                }
            }
            if (no == 3) {
                var prevamt = $("#d").val();
                var prevamt1 = parseInt($("#d1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + amt;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - amt);
                    $("#d").val(val);
                    var val1 = prevamt1 + amt;
                    $("#d1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'three');
                } else {
                    $(".ui-button").prop('disabled', true);
// $("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            }
            if (no == 4) {
                var prevamt = $("#e").val();
                var prevamt1 = parseInt($("#e1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + amt;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - amt);
                    $("#e").val(val);
                    var val1 = prevamt1 + amt;
                    $("#e1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'four');
                } else {
                    $(".ui-button").prop('disabled', true);
// $("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            }
            if (no == 5) {
                var prevamt = $("#f").val();
                var prevamt1 = parseInt($("#f1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + amt;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - amt);
                    $("#f").val(val);
                    var val1 = prevamt1 + amt;
                    $("#f1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'five');
                    console.log(val);
                } else {
                    $(".ui-button").prop('disabled', true);
//$("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            }
            if (no == 6) {
                var prevamt = $("#g").val();
                var prevamt1 = parseInt($("#g1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + amt;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - amt);
                    $("#g").val(val);
                    var val1 = prevamt1 + amt;
                    $("#g1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'six');
                    console.log(val);
                } else {
                    $(".ui-button").prop('disabled', true);
// $("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            }
            if (no == 7) {
                var prevamt = $("#h").val();
                var prevamt1 = parseInt($("#h1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + amt;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - amt);
                    $("#h").val(val);
                    var val1 = prevamt1 + amt;
                    $("#h1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'seven');
                    console.log(val);
                } else {
                    $(".ui-button").prop('disabled', true);
// $("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            }
            if (no == 8) {
                var prevamt = $("#i").val();
                var prevamt1 = parseInt($("#i1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + amt;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - amt);
                    $("#i").val(val);
                    var val1 = prevamt1 + amt;
                    $("#i1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'eight');
                    console.log(val);
                } else {
                    $(".ui-button").prop('disabled', true);
// $("#betAmountResult").text('Error, 5000 max limit Exceeded on the no.');
                }
            }
            if (no == 9) {
                var prevamt = $("#j").val();
                var prevamt1 = parseInt($("#j1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + amt;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - amt);
                    $("#j").val(val);
                    var val1 = prevamt1 + amt;
                    $("#j1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'nine');
                    console.log(val);
                } else {
                    $(".ui-button").prop('disabled', true);

                }
            }
            if (no == 0) {
                var prevamt = $("#a").val();
                var prevamt1 = parseInt($("#a1").val());
                if (isNaN(parseFloat(prevamt))) {
                    prevamt = 0;
                }
                if (isNaN(parseFloat(prevamt1))) {
                    prevamt1 = 0;
                }
                prevamt = parseInt(prevamt);
                var val = prevamt + amt;
                if (val <= 5000) {
                    $("#wallet_balance").text(wallet - amt);
                    $("#a").val(val);
                    var val1 = prevamt1 + amt;
                    $("#a1").val(val1);
                    $("#btn-count").html(total_load);
                    store_print(ball, 'zero');

                } else {
                    $(".ui-button").prop('disabled', true);

                }
            }
        } else {
            $(".ui-button").prop('disabled', true);
            $("#betAmountResult").text('Error, not enough balance');
        }
    }
}