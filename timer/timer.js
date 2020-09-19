console.log("Timers");

var interval= setInterval(function(){
    console.log("Set Interval: 5000ms");
}, 5000);

var immediate= setImmediate(()=>{
    console.log("I'm Immediate");
});

clearInterval(interval);
clearImmediate(immediate);