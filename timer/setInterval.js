var Math = require('mathjs');

// This function simulates us checking the length
// of a McDonald's drive-through queue
var getQueueLength =   10;

console.log(getQueueLength);
// We would like to retrieve the queue length at regular intervals
// this way, we can decide when to make a quick dash over
// at the optimal time
setInterval(function() {
    var queueLength = getQueueLength--;

    while(queueLength>0){
    console.log("The queue at the McDonald's drive-through is now " +queueLength+ " cars long.");

    if (queueLength === 0) {
        console.log("Quick, grab your coat!");
    }

    if (queueLength > 8) {
        return console.log("This is beginning to look impossible!");
    }
    }  
}, 3000);
