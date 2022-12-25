function startTimer(duration, display) {
    var timer = duration, seconds, milliseconds;
    setInterval(function () {
        seconds = parseInt(timer / 100, 10);
        milliseconds = parseInt(timer % 100, 10);
        milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
        display.innerHTML = seconds + "<small>" + "." + milliseconds + "</small>";

        if (--timer < 0) {
            // location.reload();
            audio.pause();
            
            firework.play()
            display.innerHTML = "0<small>.00</small>"
            time.classList.add("disappearText");
            circle.classList.add("disappearCircle");
            year.classList.add("biggerFont");
            year.innerHTML = 2023;
            startConfetti();
            circle.classList.add("appearCircle");
            newYear.classList.add("DropInNewYear");
            quote.classList.add("DropInQuote")
            body.classList.add("changeBackground")
        }
    }, 10);

}

time = document.getElementById('time');
year = document.getElementById('year');
beginBtn = document.getElementById("beginBtn");
events = document.getElementsByClassName("event");
circle = document.getElementById("circle");
newYear = document.getElementById("newYear")
quote = document.getElementById("quote");
body = document.getElementById("body");
var audio = new Audio('assets/mountains.mp3');
var firework = new Audio('assets/new-years.mp3');

beginBtn.onclick = function () {
    
    audio.play();

    let i = 1;
    events[0].classList.add('dropEvent');
    function loop() {       
        setTimeout(function () {
            events[i].classList.add('dropEvent');
            i++;
            if (i < 8) {           
                loop();             
            }                       
        }, 1000)
    }
    loop();
    beginBtn.classList.add('dropDown');
    time.classList.add("DropIn");
    year.classList.add("DropInYear");
    circle.classList.add("expand");
    const tenSeconds = 10 * 100 + 10;
    startTimer(tenSeconds, time);
    

};