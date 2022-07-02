function showTime() {
    let currentTime = new Date().toLocaleTimeString("en-US").split(/:| /);
    let hour = currentTime[0];
    let minute = currentTime[1];
    let second = currentTime[2];
    let sesion = "AM";

    if(hour == 0) {
        hour = 12;
    }
    
    if(hour > 12) {
        hour = hour - 12;
        session = "PM";
    }
    

    hour = (hour < 10) ? "0" + hour : hour;
    // minute = (minute < 10) ? "0" + minute: minute;
    // second = (second < 10) ? "0" + second : second;
    
    var time = hour + ":" + minute + ":" + second + " " + sesion;

    document.getElementById("Clock").innerText = time;
    document.getElementById("Clock").textContent = time;
    
    setTimeout(showTime, 1000);
}

showTime();