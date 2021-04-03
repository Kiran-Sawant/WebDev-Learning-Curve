//   In error handeling a code block that can generate an error is put in a try block
//and if an exception is thrown, the control shifts to the catch block that catches
//the error, and does some job (logging, exiting, etc).
//   throw keyword is used to define an error string/Number.
//   code block in finally is executed regardless of error or not.

var myMonth = 23

function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    if (months[mo]) {
      return months[mo];
    } else {
      throw 'InvalidMonthNo';           // throw keyword sends an error message
    }
  }
  
  try { // statements to try
    monthName = getMonthName(myMonth); // function could throw exception
  }
  catch (e) {                          // here, e is string @ line 17
    monthName = 'unknown';
    //logMyErrors(e);                    // pass exception object to error Logger
  }
  finally{
      console.log("Month is " + monthName)
  }
  