// .get methods can be used for getting time information from Date objects.

var date = new Date()

// returns year as Number
var year = date.getFullYear()

// returns month as number, starting from 0, ie: January = 0
var month = date.getMonth()

// returns day of month, starting from 1
var day = date.getDate()

// returns weekday as number starting from 0, ie: Sunday = 0
var weekday = date.getDay()

// returns hour, starting from 0
var hour = date.getHours()

// returns minutes as Number
var minute = date.getMinutes()

// returns seconds as Number, 2 number precision
var second = date.getSeconds()

// returns milliseconds (0~999)
var  miliSecond = date.getMilliseconds()

// returns current UNIX timestamp
var unixTime = date.getTime()

// returns offset of browser time w.r.t UTC time in minutes
var utcOffset = date.getTimezoneOffset()