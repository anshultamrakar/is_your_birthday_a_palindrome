const birthDate = document.querySelector("#birth-date")
const checkButton = document.querySelector("#check-btn")
const outputEl = document.querySelector("#output")



function reverseStr(str){
    var splitStr = str.split("")
    var reversed = splitStr.reverse()
    var joinStr = reversed.join("")
    return joinStr;
} 


function checkIsPalindrome(str){
   var newReverseStr = reverseStr(str)
   return str === newReverseStr
}



function convertDateToStr(dateStr){
    var dateStr = { day : "", month : "", year : ""}
    if(dateStr.day < 10 ){
        dateStr.day = "0" + date.day;
    }else{
        dateStr.day.toString()
    }
    if(dateStr.month < 10 ){
        dateStr.month = "0" + date.month;
    }else{
        dateStr.month.toString()
    }
    dateStr.year = date.year.toString();
    return dateStr;
}



function getAllDateFormats(date){
      var dateStr = convertDateToStr(date)
      var DDMMYYYY = dateStr.day + dateStr.month + dateStr.year
      var MMDDYYYY = dateStr.month + dateStr.day + dateStr.year
      var YYYYMMDD = dateStr.year + dateStr.month + dateStr.day
      var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2)
      var mmddyy = dateStr.month + date.day + dateStr.year.slice(-2)
      var yymmdd = dateStr.year.slice(-2) + date.day + dateStr.year
      return [DDMMYYYY , MMDDYYYY , YYYYMMDD , ddmmyy , mmddyy , yymmdd]
}


function checkPalindromeForAllDateFormats(date){
    var lenghtOfPalindromes = getAllDateFormats(date)
    var flag = false;

    for(let i = 0 ; i < lenghtOfPalindromes.length ; i++){
        console.log(checkIsPalindrome(lenghtOfPalindromes[i]))
        flag = true;
        break;
    }
    return flag;
}


function isLeapYear(year){
  if(year % 400 === 0 ){
    return true;
  }if(year % 100 === 0){
    return false;
  }
  if(year % 4=== 0){
    return true;
  }

}


console.log(isLeapYear(2021))

function getNextDate(date){
     var day = date.day + 1 
     var month = date.month 
     var year = date.year

     var dayInMonths = [31,28,31,30,31,30,31, 31,30,31,30 ,31]

     if(dayInMonths === 2){
        if(isLeapYear(year)){
           if(day > 29){
             day = 1 ;
             month++
           }else{
            if(day > 29){
                day = 1 
                month++
            }
           }
        }
     }
     else{
        if(day > dayInMonths[month - 1]){
            day = 1 ;
            month++
        }
     }
     if(month > 12){
        month =1 ;
        year++;
     }
     return{
        day : day,
        month : month,
        year : year
     };
}



function getNextPalindromeDate(date){
  var ctr = 0 ;
  var nextDate = getNextDate(date)
  while(1){
    ctr++;
    var checkIsPalindrome = checkPalindromeForAllDateFormats(nextDate)
    if(checkIsPalindrome){
        break;
    }
    nextDate = getNextDate(nextDate)
  }
  return [ctr , nextDate]
}


var date = {
    day : 11,
    month : 2,
    year : 2020
}



// console.log(getNextDate(date))
console.log(getNextPalindromeDate(date))







