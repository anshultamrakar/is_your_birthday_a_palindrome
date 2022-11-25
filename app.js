
function reverseStr(str){
   var listOfchar = str.split("")
   var reverseStr = listOfchar.reverse()
   var joinStr = reverseStr.join("") 
   return joinStr;
}

function isPalindrome(str){
    var reverse = reverseStr(str)
   return str === reverse;
}


var date = {
    day : 5 ,
    month : 12,
    year : 2020
}

function convertDateToStr(dateStr){
    var dateStr = {day : "" , month : "", year : ""}
    if(dateStr.day < 10){
        dateStr.day = "0" + date.day
    }else{
        dateStr.day = date.day.toString()
    }

    if(dateStr.month < 10){
        dateStr.month = "0" + date.month
    }else{
        dateStr.month = date.month.toString()
    }
    dateStr.year = date.year.toString()
    return dateStr;
}


function getAllFormates(date){
    var dateStr = convertDateToStr(date);

   var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
   var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
   var yyyymmdd = dateStr.year + dateStr.month + dateStr.day
   var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2)
   var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2)
   var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day

   return [ ddmmyyyy , mmddyyyy , yyyymmdd , ddmmyy , mmddyy , yymmdd  ]
} 
 

function checkIsPalindrome(){
    var listOfPalindromes = getAllFormates(date)
    var flag = false
    for(let i = 0 ; i < listOfPalindromes.length ; i++ ){
     flag = true;
     break;
    }
    return flag
}


console.log(getAllFormates(date))