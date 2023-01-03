module.exports = function toReadable (number) {
  arr1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  arr2 =['ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  arr3 = ['', 'ten ', 'twenty ', 'thirty ','forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
  arr4 = ['', 'one hundred ', 'two hundred ', 'three hundred ', 'four hundred ', 'five hundred ', 'six hundred ', 'seven hundred ', 'eight hundred ', 'nine hundred '];
  if(number === 0) {
    return 'zero'
  }
  if(number > 0 && number <= 9) {
    return arr1[number]
}
if (number > 9 && number < 20) {
return arr2[number - 10]
}
number += ''

let numb = number + '';
let result = '';
  if (numb.length === 2 && +numb[0] > 1) {
    if (+numb[0] === 2) {
        result += arr3[2]
}
    if (+numb[0] === 3) {
      result += arr3[3]
}
    if (+numb[0] === 4) {
      result += arr3[4]
}
    if (+numb[0] === 5) {
      result += arr3[5]
}
    if (+numb[0] === 6) {
      result += arr3[6]
}
    if (+numb[0] === 7) {
      result += arr3[7]
}
    if (+numb[0] === 8) {
      result += arr3[8]
}
    if (+numb[0] === 9) {
      result += arr3[9]
}
    if (+numb[1] === 1) {
  result += arr1[1]
}   if (+numb[1] === 2) {
  result += arr1[2]
}   if (+numb[1] === 3) {
  result += arr1[3]
}   if (+numb[1] === 4) {
  result += arr1[4]
}   if (+numb[1] === 5) {
  result += arr1[5]
}   if (+numb[1] === 6) {
  result += arr1[6]
}   if (+numb[1] === 7) {
  result += arr1[7]
}   if (+numb[1] === 8) {
  result += arr1[8]
}   if (+numb[1] === 9) {
  result += arr1[9]
}
}
else if  (numb.length === 3) {

if (+numb[0] === 1) {
 result += arr4[1]
}
if (+numb[0] === 2) {
 result += arr4[2]
}
if (+numb[0] === 3) {
 result += arr4[3]
}
if (+numb[0] === 4) {
 result += arr4[4]
}
if (+numb[0] === 5) {
 result += arr4[5]
}
if (+numb[0] === 6) {
 result += arr4[6]
}
if (+numb[0] === 7) {
 result += arr4[7]
}
if (+numb[0] === 8) {
 result += arr4[8]
}
if (+numb[0] === 9) {
 result += arr4[9]
}
// if (+numb[1] === 1 && ) {
//  result += arr3[1]
// }
if (+numb[1] === 2 ) {
result += arr3[2]
}
if (+numb[1] === 3) {
result += arr3[3]
}
if (+numb[1] === 4) {
result += arr3[4]
}
if (+numb[1] === 5) {
result += arr3[5]
}
if (+numb[1] === 6) {
result += arr3[6]
}
if (+numb[1] === 7) {
result += arr3[7]
}
if (+numb[1] === 8) {
result += arr3[8]
}
if (+numb[1] === 9) {
result += arr3[9]
}   if ((+numb[2] === 1 && +numb[1] > 1) || +numb[2] === 1 && +numb[1] === 0 ) {
result += arr1[1]
}   if ((+numb[2] === 2 && +numb[1] > 1)  || +numb[2] === 2 && +numb[1] === 0 ) {
result += arr1[2]
}   if ((+numb[2] === 3 && +numb[1] > 1) || +numb[2] === 3 && +numb[1] === 0 ) {
result += arr1[3]
}   if ((+numb[2] === 4 && +numb[1] > 1) ||  +numb[2] === 4 && +numb[1] === 0 )  {
result += arr1[4]
}   if ((+numb[2] === 5 && +numb[1] > 1) || +numb[2] === 5 && +numb[1] === 0 )  {
result += arr1[5]
}   if ((+numb[2] === 6 && +numb[1] > 1) || +numb[2] === 6 && +numb[1] === 0 ) {
result += arr1[6]
}   if ((+numb[2] === 7 && +numb[1] > 1) || +numb[2] === 7 && +numb[1] === 0 )  {
result += arr1[7]
}   if ((+numb[2] === 8 && +numb[1] > 1) || +numb[2] === 8 && +numb[1] === 0 ) {
result += arr1[8]
}if ((+numb[2] === 9 && +numb[1] > 1) || +numb[2] === 9 && +numb[1] === 0 ) {
 result += arr1[9]
 }if (+numb[2] === 0 && +numb[1] === 1 ) {
  result += arr2[0]}
 if (+numb[2] === 1 && +numb[1] === 1 ) {
  result += arr2[1]
  }   if (+numb[2] === 2 && +numb[1] === 1) {
  result += arr2[2]
  }   if (+numb[2] === 3 && +numb[1] === 1) {
  result += arr2[3]
  }   if (+numb[2] === 4 && +numb[1] === 1) {
  result += arr2[4]
  }   if (+numb[2] === 5 && +numb[1] === 1) {
  result += arr2[5]
  }   if (+numb[2] === 6 && +numb[1] === 1) {
  result += arr2[6]
  }   if (+numb[2] === 7 && +numb[1] === 1) {
  result += arr2[7]
  }   if (+numb[2] === 8 && +numb[1] === 1) {
  result += arr2[8]
  }if (+numb[2] === 9 && +numb[1] === 1) {
   result += arr2[9]
   }

}
return result.trim()
}
