const deadline = new Date("01-01-2021");

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
    return {
        total,
        seconds,
        minutes,
        hours,
        days
    };
}

function initializeCountDown(endtime) {
    const days = document.querySelector(".days");
    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");
    function updateClock(){
        const t = getTimeRemaining(endtime);
        days.innerHTML=("0"+t.days).slice(-2);
        hours.innerHTML=("0"+t.hours).slice(-2);
        minutes.innerHTML=("0"+t.minutes).slice(-2);
        seconds.innerHTML=("0"+t.seconds).slice(-2);
        for(var i=0;i<document.querySelectorAll(".box").length;i++){
            document.querySelectorAll(".box")[i].classList.add("numbers");
        }
    
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
      
      updateClock(); // run function once at first to avoid delay
      var timeinterval = setInterval(updateClock,1000);
  }

  initializeCountDown(deadline);