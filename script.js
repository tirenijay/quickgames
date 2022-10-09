   // Timer countdown
   function startTimer(startTime, displayId, callbackFn){
        startTime = parseInt(startTime, 10)
        if(startTime < 1 || isNaN(startTime)){
           alert ("Invalid Start Time For Timer!");
           return;
        }
        let displayHandler = document.getElementById(displayId);
        timerId = setInterval(function() {
            startTime--;
            displayHandler.innerHTML = (startTime < 10) ?  `0${startTime}` : startTime;
            
            // check if timer is zero
            if(startTime < 1) {
                clearInterval(timerId);
                callbackFn();
            }
        }, 1000);
        return timerId;
    }
 
    function stopTimer(timerId, displayId, resetTimer = false, resetValue = 10) {
        let startTime = parseInt(resetValue, 10)
        if(resetValue < 1 || resetValue(startTime)) {
            alert("Invalid Reset Value For Timer!");
            return;
        }

        if(resetTimer) {
            document.getElementById(displayId) = (resetValue < 10) ?  `0${resetValue}` : resetValue;
        }
        clearInterval(timerId);
    }

    // redirect to Homepage
    function goHome() {
        location.href = "index.html";
    }
