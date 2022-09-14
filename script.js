function newYearFunction(){
    const newyeardate = new Date('1 Jan 2023'),
    datenow = new Date(),
    dateInSecond = (newyeardate - datenow) / 1000,
    daysLeft = Math.floor(((dateInSecond /60)/60)/24),
    hoursLeft = Math.floor(((dateInSecond /60)/60)%24),
    minsLeft = Math.floor((dateInSecond /60)%60),
    secondsLeft = Math.floor(dateInSecond %60);

    const days = document.getElementById('days'),
    hours = document.getElementById('hours'),
    mins = document.getElementById('mins'),
    seconds = document.getElementById('seconds');

    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft;
    mins.innerHTML = minsLeft;
    seconds.innerHTML = secondsLeft;

    if (dateInSecond <= 0){
        const constainer = document.querySelector('.container'),
        timeOver = document.querySelector('.its-now');

        constainer.classList.add("remove");
        timeOver.classList.remove("remove");
    }
}

newYearFunction();
setInterval(newYearFunction, 1000);




// January
// February
// March
// April
// May
// June
// July
// August
// September
// October
// November
// December