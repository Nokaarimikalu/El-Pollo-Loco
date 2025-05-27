class Intervalhub {

    static allIntervals = [];
    static startInterval(func, timer){
        const newInterval = setInterval(func, timer);
        Intervalhub.allIntervals.push(newInterval);
    }
    static stopAllintervals(){
        Intervalhub.allIntervals.forEach(clearInterval)
    }
}