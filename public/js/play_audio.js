var x = document.getElementById("myAudio");
var y = document.getElementById("myAudio2");
var z = document.getElementById("myAudio3");

function playAudio() {
    x.play();
}

function playAudioTimer() {
    z.play();
}

function play(amt) {

    if (amt == null || amt == '') {
        console.log('not set data');
    } else {
        if ((typeof amt) == 'number' && amt != NaN) {

            $("#temp_bidAmt").val(amt);

        }
    }
    y.play();
}