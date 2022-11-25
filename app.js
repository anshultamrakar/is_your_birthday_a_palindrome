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

var date = {
    day : 5,
    month : 12,
    year : 2020
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











