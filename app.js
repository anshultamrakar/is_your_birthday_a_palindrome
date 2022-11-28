var birthDate = document.querySelector("#birth-date")
var checkButton = document.querySelector("#check-btn")
var outputEl = document.querySelector("#output")



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
    var dateStr = {day : "", month : "", year : ""}
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



function getAllDateFormats(dateStr){
      var dateStr = convertDateToStr(date)
      var DDMMYYYY = dateStr.day + dateStr.month + dateStr.year
      var MMDDYYYY = dateStr.month + dateStr.day + dateStr.year
      var YYYYMMDD = dateStr.year + dateStr.month + dateStr.day
      var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2)
      var mmddyy = dateStr.month + date.day + dateStr.year.slice(-2)
      var yymmdd = dateStr.year.slice(-2) + date.day + dateStr.day
      return [DDMMYYYY , MMDDYYYY , YYYYMMDD , ddmmyy , mmddyy , yymmdd]
}



function checkPalindromeForAllDateFormats(date){
    var lenghtOfPalindromes = getAllDateFormats(date)
    var palindromeList = [];
    for(let i = 0 ; i < lenghtOfPalindromes.length ; i++){
        var result = checkIsPalindrome(lenghtOfPalindromes[i])
        palindromeList.push(result)
       
    }
    return palindromeList;
}


function isLeapYear(year){
  if(year % 400 === 0){
    return true;
  }
  if(year % 100 === 0){
    return false;
  }
  if(year % 4 === 0){
    return true
  }
  return false;
}



function getNextDate(date){
  var day = date.day + 1 ;
  var month  = date.month;
  var year = date.year;
  var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]
 
  if(month === 2){
    if(isLeapYear(year)){
      if(day > 29){
        day = 1 ;
        month = 3
      }
    }else{
       if(day > 28){
        day = 1 ;
        month = 3;
       }
    }
  }else{
    if(day > daysInMonth[month - 1]){
      day = 1 
      month++
    }
  }
  if(month > 12){
    month = 1 
    year++
  }
  return{
    day : day,
    month : month,
    year : year
  }
}



function getNextPalindromeDate(date){
  var nextDate = getNextDate(date);
  var ctr = 0;

  while (1) {
    ctr++;
    var dateStr = convertDateToStr(nextDate);
    var resultList = checkPalindromeForAllDateFormats(dateStr);
    for (let i = 0; i < resultList.length; i++) {
      if (resultList[i]) {
        return [ctr, nextDate];
      }
    }
    nextDate = getNextDate(nextDate);
  }
}

var date = {
  day: 5,
  month: 1,
  year: 2020
}

console.log(getNextPalindromeDate(date));




// function clickHandler(){
//  var bdayStr = birthDate.value
//  if(bdayStr !== ""){
//   var listOfDate = bdayStr.split("-")
//    var date = {
//     day : Number(listOfDate[2]),
//     month : Number(listOfDate[1]),
//     year :  Number(listOfDate[0])
//    }

//    var isPalindrome = checkPalindromeForAllDateFormats(date)
//    if(isPalindrome){
//     outputEl.innerHTML = "Yay , your birthday is Palindrome"
//    }else{
//     var [ctr , nextDate] = getNextPalindrome(date)
//     outputEl.innerHTML = "Yay , your birthday is Palindrome"
//    }
//  }

// }


// checkButton.addEventListener("click", clickHandler)





