class StopWatch {
    constructor() {
        this.displayTimer = () => {
            //its work is to increment the seconds.
            this.totalSeconds += 1;
            //convert the total seconds in HH MM SS
            // console.log(this);     
            const convertedTime = this.convertDisplayTime(this.totalSeconds);
            // console.log(convertedTime);
            //display on DOM
            let timerText = document.getElementById("hoursText");
            timerText.innerText = convertedTime;
        };
        this.totalSeconds = 0;
    }
    displayTime() {
        //its work is to increment the seconds.
        this.totalSeconds += 1;
        //convert the total seconds in HH MM SS
        console.log(this); /** ES5 o/p: Window {window: Window, self: Window, document: document, name: '', location: Location, … */
        /**
         * Converted to ES6 function :  bcoz of this --> giving error as function stopwatch ka h but was finding in window.
         * in ES6 :console.log(this); : o/p
         * StopWatch {totalSeconds: 1, intervalId: 1, displayTimer: ƒ}
            displayTimer: () => {…}
            intervalId: 1
            totalSeconds: 1
            [[Prototype]]: Object
         *
         */
        const convertedTime = this.convertDisplayTime(this.totalSeconds);
        // console.log(convertedTime);
        //display on DOM
        let timerText = document.getElementById("hoursText");
        timerText.innerText = convertedTime;
    }
    startTimer() {
        this.intervalId = setInterval(this.displayTimer, 1000);
        let pauseBtn = document.getElementById("pauseResume");
        pauseBtn.disabled = false;
        let startBtn = document.getElementById("startButton");
        startBtn.disabled = true;
        let stopButton = document.getElementById("stopButton");
        stopButton.disabled = false;
        // console.log("clicked strt",this.intervalId);
    }
    pauseTimer() {
        //pause if running & resume if paused.
        //if running
        if (this.intervalId) {
            // stop the this.interval
            clearInterval(this.intervalId);
            //make it null 
            this.intervalId = null;
            console.log("PASUED");
            let pauseBtn = document.getElementById("pauseResume");
            pauseBtn.innerText = "Resume";
        }
        else {
            this.intervalId = setInterval(this.displayTimer, 1000);
            console.log("RESUMED");
            let resumeBtn = document.getElementById("pauseResume");
            resumeBtn.innerText = "Pause";
        }
    }
    stopTimer() {
        if (this.intervalId) {
            // stop the this.interval
            clearInterval(this.intervalId);
            //make it null 
            this.intervalId = null;
            console.log("STOPPED");
        }
        this.totalSeconds = -1;
        this.displayTimer();
        let startBtn = document.getElementById("startButton");
        startBtn.disabled = false;
        let resumeBtn = document.getElementById("pauseResume");
        resumeBtn.disabled = true;
        let stopButton = document.getElementById("stopButton");
        stopButton.disabled = true;
    }
    convertDisplayTime(seconds) {
        let hours = 0;
        let mins = 0;
        let secs = 0;
        hours = Math.floor(seconds / 3600);
        mins = Math.floor((seconds - hours * 3600) / 60);
        secs = seconds - hours * 3600 - mins * 60;
        const time = hours + " : " + mins + " : " + secs;
        // console.log(time);
        return time;
    }
    render() {
        const stopWatchContainer = document.createElement("div");
        const header = document.createElement("h1");
        const container = document.createElement("div");
        const displayUnitContainer = document.createElement("div");
        const hoursPara = document.createElement("p");
        const buttonsContainer = document.createElement("div");
        const startBtn = document.createElement("button");
        const pauseBtn = document.createElement("button");
        const stopBtn = document.createElement("button");
        //id
        startBtn.id = "startButton";
        hoursPara.id = "hoursText";
        pauseBtn.id = "pauseResume";
        stopBtn.id = "stopButton";
        //pause btn disabled
        pauseBtn.disabled = true;
        stopBtn.disabled = true;
        //class
        stopWatchContainer.classList.add("timerContainer");
        header.classList.add("heading");
        container.classList.add("timer");
        displayUnitContainer.classList.add("displayUnit");
        buttonsContainer.classList.add("buttonsContainer");
        hoursPara.classList.add("hours");
        startBtn.classList.add("startBtn");
        pauseBtn.classList.add("pauseBtn");
        stopBtn.classList.add("stopBtn");
        //innertext
        header.innerText = "Stop Watch";
        hoursPara.innerText = "0 : 0 : 0";
        startBtn.innerText = "Start";
        pauseBtn.innerText = "Pause";
        stopBtn.innerText = "Stop";
        //onclick
        startBtn.onclick = this.startTimer.bind(this);
        pauseBtn.onclick = this.pauseTimer.bind(this);
        stopBtn.onclick = this.stopTimer.bind(this);
        //appendchild
        buttonsContainer.appendChild(startBtn);
        buttonsContainer.appendChild(pauseBtn);
        buttonsContainer.appendChild(stopBtn);
        displayUnitContainer.appendChild(hoursPara);
        container.appendChild(displayUnitContainer);
        container.appendChild(buttonsContainer);
        // stopWatchContainer.appendChild(header)
        stopWatchContainer.appendChild(container);
        return stopWatchContainer;
    }
    mount(el) {
        el.appendChild(this.render());
    }
}
export default StopWatch;
