time = document.getElementById('time');
year = document.getElementById('year');
beginBtn = document.getElementById("beginBtn");
events = document.getElementsByClassName("event");
circle = document.getElementById("circle");
newYear = document.getElementById("newYear")
quote = document.getElementById("quote");
themebtn = document.getElementById("themeBtn");
themeDiv = document.getElementsByClassName("themeDiv")["0"];
themeopt = document.getElementsByClassName(("themeOpt"));
body = document.getElementById("body");
var audio = new Audio('assets/mountains.mp3');
var firework = new Audio('assets/new-years.mp3');


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
            quote.classList.add("DropInQuote");
        }
    }, 10);

}

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
    themeDiv.classList.add("moveRight")

};



i = 1;
themebtn.onclick = function () {
    if(i%2 == 1) {
        for(j=0;j<3;j++) {
            themeopt[j].classList.remove("invisible");
        }
        themeopt[0].classList.add("popUp");
        themeopt[1].classList.add("popLeft");
        themeopt[2].classList.add("popDiag");
    } else {
        for(j=0;j<3;j++) {
            themeopt[j].classList.add("invisible")
        }
        themeopt[0].classList.remove("popUp");
        themeopt[1].classList.remove("popLeft");
        themeopt[2].classList.remove("popDiag");
    }

    i++;
};

themeopt[0].onclick = function () {
   body.classList.add("selectedKlev");
   body.classList.remove("selectedBeach");
   body.classList.remove("selectedDawn");
   beginBtn.classList.add("klev");
   beginBtn.classList.remove("beach");
   beginBtn.classList.remove("dawn");
   themebtn.classList.add("klev");
   themebtn.classList.remove("beach");
   themebtn.classList.remove("dawn");
   themeopt[0].classList.add("addBorder");
   themeopt[1].classList.remove("addBorder");
   themeopt[2].classList.remove("addBorder");
};

themeopt[1].onclick = function () {
    body.classList.add("selectedBeach");
    body.classList.remove("selectedKlev");
    body.classList.remove("selectedDawn");
    beginBtn.classList.remove("klev");
    beginBtn.classList.add("beach");
    beginBtn.classList.remove("dawn");
    themebtn.classList.remove("klev");
    themebtn.classList.add("beach");
    themebtn.classList.remove("dawn");
    themeopt[1].classList.add("addBorder");
    themeopt[0].classList.remove("addBorder");
    themeopt[2].classList.remove("addBorder");
 };

 themeopt[2].onclick = function () {
    body.classList.add("selectedDawn");
    body.classList.remove("selectedBeach");
    body.classList.remove("selectedKlev");
    beginBtn.classList.remove("klev");
    beginBtn.classList.remove("beach");
    beginBtn.classList.add("dawn");
    themebtn.classList.remove("klev");
    themebtn.classList.remove("beach");
    themebtn.classList.add("dawn");
    themeopt[2].classList.add("addBorder");
    themeopt[1].classList.remove("addBorder");
    themeopt[0].classList.remove("addBorder");
 };
 
