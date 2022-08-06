class StopWatch {
    constructor() {
        this.startTimer = () => {
            console.log("in start Timer Function");
            this.isRunning = true;
            if (this.isRunning == true) {
                this.isRunning = false;
                console.log(this);
                this.displayTimer();
                console.log("in start Timer Function @ end");
            }
        };
        this.hours = 0;
        this.min = 0;
        this.sec = 0;
    }
    pauseTimer() {
        console.log("in pause Timer Function");
        this.isRunning = false;
    }
    stopTimer() {
        console.log("in stop Timer Function");
        this.hours = 0;
        this.min = 0;
        this.sec = 0;
        if (this.isRunning = false) {
            this.isRunning = true;
        }
        ;
    }
    displayTimer() {
        //here this function should manipulate the DOM : ie. Change the hr , min , sec on screen
        let timerP = document.getElementById("hoursPara");
        console.log(timerP);
        console.log("in Display Timer Function");
        if (this.isRunning == false) {
            // let second = this.sec;
            // let minute = this.min;
            // let hour = this.hours;
            this.sec = this.sec + 1;
            if (this.sec == 60) {
                this.min = this.min + 1;
                this.sec = 0;
            }
            if (this.min == 60) {
                this.hours = this.hours + 1;
                this.min = 0;
            }
        }
        //here this function should manipulate the DOM : ie. Change the hr , min , sec on screen -----some ERROR
        timerP.innerText = `${this.hours} : ${this.min} : ${this.sec}`;
        setTimeout(this.displayTimer, 1000);
        console.log("in Display Timer Function");
    }
    resetTimer() {
        let timerP = document.getElementById("hoursPara");
        timerP.innerText = `00 : 00 : 00`;
    }
    render() {
        const stopWatchContainer = document.createElement("div");
        const displayUnitContainer = document.createElement("div");
        const hoursPara = document.createElement("p");
        // const minsPara  = document.createElement("p");
        // const secondsPara  = document.createElement("p");
        // const colon = document.createElement("p");
        // const colon2 = document.createElement("p");
        const buttonsContainer = document.createElement("div");
        const startBtn = document.createElement("button");
        const pauseBtn = document.createElement("button");
        const stopBtn = document.createElement("button");
        //id
        hoursPara.id = "hoursText";
        // minsPara.id = "minutesText"
        // secondsPara.id = "secondsText"
        //class
        stopWatchContainer.classList.add("timerContainer");
        displayUnitContainer.classList.add("displayUnit");
        buttonsContainer.classList.add("buttonsContainer");
        hoursPara.classList.add("hours");
        // minsPara.classList.add("mins");
        // secondsPara.classList.add("secs");
        startBtn.classList.add("startBtn");
        pauseBtn.classList.add("pauseBtn");
        stopBtn.classList.add("stopBtn");
        //innertext
        hoursPara.innerText = "00 : 00 : 00";
        // minsPara.innerText = "00";
        // secondsPara.innerText = "00";
        // colon.innerText = ":";
        // colon2.innerText = ":";
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
        // displayUnitContainer.appendChild(colon)
        // displayUnitContainer.appendChild(minsPara)
        // displayUnitContainer.appendChild(colon2)
        // displayUnitContainer.appendChild(secondsPara)
        stopWatchContainer.appendChild(displayUnitContainer);
        stopWatchContainer.appendChild(buttonsContainer);
        return stopWatchContainer;
    }
    mount(el) {
        el.appendChild(this.render());
    }
}
export default StopWatch;
