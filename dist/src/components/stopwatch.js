class StopWatch {
    constructor() {
        this.totalSeconds = 0;
    }
    displayTimer() {
        //its work is to increment the seconds.
        this.totalSeconds += 1;
        //convert the total seconds in HH MM SS
        const convertedTime = this.convertDisplayTime(this.totalSeconds);
        //display on DOM
        let timerText = document.getElementById("hoursText");
        timerText.innerText = convertedTime;
    }
    startTimer() {
        this.intervalId = setInterval(this.displayTimer, 1000);
        console.log("clicked strt", this.intervalId);
    }
    pauseTimer() {
        //pause if running & resume if paused.
        //if running
        if (this.intervalId) {
            // stop the this.interval
            clearInterval(this.intervalId);
            //make it null 
            this.intervalId = null;
            console.log("PAUSED");
        }
        else {
            this.intervalId = setInterval(this.displayTimer, 1000);
            console.log("RESUMED");
        }
    }
    stopTimer() {
        if (this.intervalId) {
            // stop the this.interval
            clearInterval(this.intervalId);
            //make it null 
            this.intervalId = null;
            console.log("PAUSED");
        }
        this.totalSeconds = -1;
        this.displayTimer();
    }
    convertDisplayTime(seconds) {
        let hours = 0;
        let mins = 0;
        let secs = 0;
        hours = Math.floor(seconds / 3600);
        mins = Math.floor((seconds - hours * 3600) / 60);
        secs = seconds - hours * 3600 - mins * 60;
        const time = hours + ":" + mins + ":" + secs;
        console.log(time);
        return time;
    }
    render() {
        const stopWatchContainer = document.createElement("div");
        const displayUnitContainer = document.createElement("div");
        const hoursPara = document.createElement("p");
        const buttonsContainer = document.createElement("div");
        const startBtn = document.createElement("button");
        const pauseBtn = document.createElement("button");
        const stopBtn = document.createElement("button");
        //id
        hoursPara.id = "hoursText";
        //class
        stopWatchContainer.classList.add("timerContainer");
        displayUnitContainer.classList.add("displayUnit");
        buttonsContainer.classList.add("buttonsContainer");
        hoursPara.classList.add("hours");
        startBtn.classList.add("startBtn");
        pauseBtn.classList.add("pauseBtn");
        stopBtn.classList.add("stopBtn");
        //innertext
        hoursPara.innerText = "00 : 00 : 00";
        startBtn.innerText = "Start";
        pauseBtn.innerText = "Pause";
        stopBtn.innerText = "Stop";
        //onclick
        startBtn.onclick = this.startTimer.bind(this);
        pauseBtn.onclick = this.pauseTimer;
        stopBtn.onclick = this.stopTimer;
        //appendchild
        buttonsContainer.appendChild(startBtn);
        buttonsContainer.appendChild(pauseBtn);
        buttonsContainer.appendChild(stopBtn);
        displayUnitContainer.appendChild(hoursPara);
        stopWatchContainer.appendChild(displayUnitContainer);
        stopWatchContainer.appendChild(buttonsContainer);
        return stopWatchContainer;
    }
    mount(el) {
        el.appendChild(this.render());
    }
}
export default StopWatch;
