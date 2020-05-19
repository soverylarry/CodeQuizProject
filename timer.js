
document.getElementById("startButton").addEventListener("click", function(){
    var fiveMinutes = 60 * .1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < -1) {
         alert("time's up");
        
        }
    }, 1000);
}

