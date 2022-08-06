import StopWatch from "./components/stopwatch.js";

const rootContainer =  document.getElementById("root")!;
var stopwatch =  new StopWatch();
stopwatch.mount(rootContainer)