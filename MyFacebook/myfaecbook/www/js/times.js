function checkTimeLiesBetween(startTime, endTime, givenTime) {
    if (moment(givenTime, "hh:mm a").isAfter(startTime, "hh:mm a") && moment(givenTime, "hh:mm a").isBefore(endTime, "hh:mm a")) {
        console.log(true);
        //return true;
    } else {
        //return false;
        console.log(false);
    }
    givenTime = "2010-10-20 " + changeTimeTo24(givenTime);
    startTime = "2010-10-20 " + changeTimeTo24(startTime);
    endTime = "2010-10-20 " + changeTimeTo24(endTime);
    //    console.log(givenTime);
    //    console.log(startTime);
    //    console.log(endTime);
    if (moment(givenTime, "YYYY-MM-DD hh:mm").isAfter(startTime, "YYYY-MM-DD hh:mm") && moment(givenTime, "YYYY-MM-DD hh:mm").isBefore(endTime, "YYYY-MM-DD hh:mm")) {
        return true;
    } else {
        return false;
    }



}

function changeTimeTo24(time) {
    time = time.trim();
    var isPM = time.substr(time.length - 2, time.length);
    var hoursMinuts = time.split(':');
    var hours = hoursMinuts[0];
    var minutes = hoursMinuts[1].substring(0, 2);
    //    console.log(isPM);
    //    console.log(hoursMinuts[0]);
    //    console.log(minutes);

    if (isPM === 'PM' || isPM === 'pm') {
        hours = Number(hoursMinuts[0]) + 12;
    }

    return hours + ":" + minutes;

}

//console.log(checkTimeLiesBetween("05:30am", "23:30pm", "11:30am"));