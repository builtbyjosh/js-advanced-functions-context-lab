/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(arrEl){
    return{
        firstName: arrEl[0],
        familyName: arrEl[1],
        title: arrEl[2],
        payPerHour: arrEl[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    
}

function createEmployeeRecords(arrEl){
    return arrEl.map((row)=>{ return createEmployeeRecord(row)})
}

function createTimeInEvent(dateTime){
    let [date, hour] = dateTime.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10), date
    })
    return this
}

function createTimeOutEvent(dateTime){
    let [date, hour] = dateTime.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10), date
    })
    return this
}

function hoursWorkedOnDate(workDay){
    let clockIn = this.timeInEvents.find((e)=>{return e.date === workDay})
    let clockOut = this.timeOutEvents.find((e)=>{return e.date === workDay})
    return (clockOut.hour - clockIn.hour) / 100
}

function wagesEarnedOnDate(workDay){
    let gross = hoursWorkedOnDate.call(this, workDay) * this.payPerHour
    return parseFloat(gross.toString())
}

function calculatePayroll(arr){
    return arr.reduce((memo, rec)=>{return memo + allWagesFor.call(rec)},0)
}

function findEmployeeByFirstName(arr, firstName){
    return arr.find((rec)=>{return rec.firstName === firstName})
}