//1. Write a JavaScript function that reverse a number. 
var one = 32243

function reverseNum(num) {
    num = num + '';
   return num.split("").reverse().join('')
}

console.log(reverseNum(one))

// --------------------------------------------------------

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
var two = "a123321a"
function palindrome(x){
    x.split("");
    let y = x.length-1, z=0, count = 0, total=x.length/2;
    while (z<y) {
        if (x[y]===x[z]){
            count++
        }
        y--;
        z++;
    }
    return count===total
}

console.log(palindrome(two))

// --------------------------------------------------------

// 3. Write a JavaScript function that generates all combinations of a string. 
function allcombinations(str) {
    let result = [];
    for (const e of str) {
        let temp = [e];
        for (const i in result) temp.push("" + result[i] + e);
        result = result.concat(temp);
    }
    return result;
}
console.log(allcombinations("good"));


// --------------------------------------------------------

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
let four = "webmaster";
function orders(str){
  str.split('');
  let arr = [];
  for (let i =0; i<str.length;i++){
    arr.push(str[i])
  }
  return arr.sort().join('').toString();
}

console.log(orders(four))

// --------------------------------------------------------

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
let five = 'the quick brown fox';
function fives(str){
    var strs = str.split(' ');
    let arr = []
    for (let i = 0; i<strs.length; i++){
        arr.push(strs[i].charAt(0).toUpperCase()+strs[i].slice(1))
    }
    return arr.join(' ')
}

console.log(fives(five))

// --------------------------------------------------------

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
let six = 'Web Development Tutorial';
function sixs (str) {
    var strs = str.split(' ');
    var result='';
    for (let i =1; i<strs.length; i++){
        if (strs[i].length < strs[i-1].length){
            result = strs[i-1]
        }
    }
    return result;
}

console.log(sixs(six))

// --------------------------------------------------------

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
let seven = 'The quick brown fox';
function sevens (str) {
    var strs = str.split('');
    var count = 0;
    var vowel = ['a','e','i','o','u']
    for (let i =0; i<strs.length; i++){
        for (let j =0; j<vowel.length; j++){
            if (strs[i]===vowel[j]){
                count++
            }
        }
    }
    return count
}

console.log(sevens(seven))

// --------------------------------------------------------

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
let eight = 29;
function prime (num){
    let prime = true
    for (var i = 2; i<num; i++){
        if (num%i===0){
            prime = false;
            break
        }
    }
    if (prime === true){
        return 'This is prime number'
    }else {
        return 'This is not prime number'
    }
}

console.log(prime(eight))

// --------------------------------------------------------

// 9. Write a JavaScript function which accepts an argument and returns the type. 
let nine = 6;
function type_of (type){
    return typeof(type)
}

console.log(type_of(nine))

// --------------------------------------------------------

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
let ten = 4;
function matrix (n){
    var j;
    var i;
    for(var i = 0; i<n; i++){
        for(var j =0; j<n; j++){
            if(i === j){
                console.log('1')
            }else {
                console.log('0')
            }
        }console.log("-----------")
    }
}

console.log(matrix(ten))

// --------------------------------------------------------

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
let eleven = [1,2,3,4,5];
function elevens (arr){
    arr.sort((a, b) => a - b);
    new_arr = [];
    new_arr.push(arr[1]);
    new_arr.push(arr[arr.length-2])
    return new_arr
}

console.log(elevens(eleven))

// --------------------------------------------------------

// 12. Write a JavaScript function which says whether a number is perfect. 
function perfect_number (num){
    var temp = 0;
    for (var i = 1; i<=num/2; i++){
        if(num%i===0){
            temp += i
        }
    }
    if (num === temp && temp!==0){
        return 'This is perfect number'
    }else {
        return 'This is not perfect number'
    }
}

console.log(perfect_number(6))

// --------------------------------------------------------

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function factor (num){
    var result = [];
    for (var i = 1; i<=num; i++){
        if (num%i==0){
            result.push(i)
        }
    }
    return result
}

console.log(factor(16))

// --------------------------------------------------------

// 14. Write a JavaScript function to convert an amount to coins. 
function coins (num,arr){
    var result = []
    for (var i = 0; i<arr.length; i++){
        while (num >= arr[i]){
            num -= arr[i];
            result.push(arr[i])
        }
    }
    return result
}

console.log(coins(46, [25, 10, 5, 2, 1]))

// --------------------------------------------------------

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function  exponent (b,n) {
    var result = 1;
    for (var i =1; i<=n; i++){
        result *= b
    }
    return result
}

console.log(exponent(2,4))

// --------------------------------------------------------

// 16. Write a JavaScript function to extract unique characters from a string. 
function unique (str){
    var result = [];
    str.split('');
    for (var i =0; i<str.length; i++){
        if (result.includes(str[i])!== true){
            result.push(str[i])
        }
    }
    return result.join('').toString()
}

console.log(unique('thequickbrownfoxjumpsoverthelazydog'))

// --------------------------------------------------------

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
function num_occurrences (str){
    var result = {};
    str.split('');
    for (var i =0; i<str.length; i++){
        if (result[str[i]]){
            result[str[i]] += 1
        }else {
            result[str[i]] = 1
        }
    }
    return result
}
console.log(num_occurrences("aabbc"))

// --------------------------------------------------------

// 18. Write a function for searching JavaScript arrays with a binary search. 
function search (num,arr){
    let x=0, y=arr.length-1
    while (y>x){
        let mid = Math.floor((y+x)/2)
        if (arr[mid] === num){
            return mid
        }else if (arr[mid]> num){
            y = mid
        }else if (arr[mid] < num){
            x = mid
        }
    }
}
myArr = [1,2,3,4,5,6,7,10,11]
console.log(search(6,myArr))

// --------------------------------------------------------

// 19. Write a JavaScript function that returns array elements larger than a number. 
function larger_number (num,arr){
    let result = [];
    for (const s of arr){
        if (s>num){
            result.push(s)
        }
    }
    return result
}

myArr2 = [1,2,3,4,5,6,7,10,11]
console.log(larger_number(6,myArr2))

// --------------------------------------------------------

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
function random (len) {
    let result = '', sample_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i<len;i++){
        result += sample_list.charAt(Math.floor(Math.random()*sample_list.length))
    }
    return result
}

console.log(random(9))

// --------------------------------------------------------

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
function subset(arr) {
    let result = []
      for (var i = 0; i<arr.length; i++){
        for (var j = i+1;j<arr.length;j++){
            let temp = []
            temp.push(arr[i],arr[j]);
            result.push(temp)
          }
      }
    return result
  }
  
  console.log(subset([1,2,3]))

// --------------------------------------------------------

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
function count(str,letter) {
    let counts = 0;
    str.split('');
    for (var i =0; i<str.length; i++){
        if (str[i]===letter){
            counts ++
        }
    }
    return counts 
}

myStr = 'microsoft.com'
console.log(count(myStr,'o'))

// --------------------------------------------------------

// 23. Write a JavaScript function to find the first not repeated character. 
function not_repeat (str){
    let arr = [];
    str.split('');
    for (var i = 0; i<str.length; i++){
        if (arr.includes(str[i]) === true){
            arr.splice(arr.indexOf(str[i]),1)
        }else {
            arr.push(str[i])
        }
    }
    return arr[0]
}

myStr1 = 'abacddbec';
console.log(not_repeat(myStr1))

// --------------------------------------------------------

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
function bubble_sort (arr){
    for (var i = 0; i<arr.length; i++){
        for(var j = 0; j<arr.length-1;j++){
            if(arr[j] < arr[j+1]){
                temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr
}

myArr4 = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
console.log(bubble_sort(myArr4))

// --------------------------------------------------------

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
function longest_country_name (arr) {
    let result = arr[0];
    for (const s of arr){
        if (arr[0].length < s.length){
            result = s
        }
    }
    return result
}

myArr3 = ["Australia", "Germany", "United States of America"]
console.log(longest_country_name(myArr3))

// --------------------------------------------------------

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestSubstring(str){
    let longest = '';
    let tmp = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if (tmp.indexOf(str[j]) !== -1) {
                i = str.indexOf(str[j],i) + 1;
                tmp = '';
            } else {
                tmp = str.slice(i, j+1);
                if (tmp.length > longest.length) {
                    longest = tmp;
                }
            }
        }
    }
    return longest;
}

console.log(longestSubstring('google.com'))


// --------------------------------------------------------

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
function longestPalindrome(str) {
    
        let palindrome_arr = [];
        let substr = "";
        for (let i = 0; i < str.length; i++) {
            for (let j = 1; j < str.length; j++) {
                substr = str.substring(i, j);
                if (isPalindrome(substr) && substr != "" && substr.length != 1) palindrome_arr.push(substr);
            }
        }
    
        return palindrome_arr.sort(function (a, b) {
            if (a.length > b.length) return -1;
            if (a.length < b.length) return 1;
            else return 0;
        })[0];
    }
console.log(longestPalindrome('banana'))

// --------------------------------------------------------

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function pass (cb){
    cb();
}
function func(){
    console.log('Hello World')
}

pass(func)

// --------------------------------------------------------

// 29. Write a JavaScript function to get the function name. 
function function_name (){}

console.log(function_name.name)










