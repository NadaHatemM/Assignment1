// QUESTION 1
let x = "123";
let result = Number(x) + 7;
console.log(result);


console.log("--------------------");

//Question 2 
let value = 0;
if (!value){      //or value ==0
    console.log("Invalid");
}
else{
    console.log("valid");
}


console.log("--------------------");

//QUESTION 3
for(let i=0 ; i <=10 ;i++){
    if( i % 2 == 0)
        continue;
    console.log(i);
}

console.log("--------------------");

//Question 4
let nums = [1,2,3,4,5]
let n = nums.filter((ele) => {
    return ele % 2 == 0
})
console.log(n)

console.log("--------------------");

//Question 5
let arr1= [1,2,3];
let arr2= [4,5,6];
let res= [...arr1,...arr2];
console.log(res);


console.log("--------------------");

//Question 6
let day = 2;
let dayName;
switch(day){
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName);

console.log("--------------------");

//QUESTION 7
let arrstr =["a","ab","abc"];
let z = arrstr.map((len) => {
    return len.length;
})
console.log(z);


console.log("--------------------");


// Question 8
function checkNumberDivisble(num){
    if(num%3 == 0 && num % 5 == 0){
        return "Divisible by both 3 and 5";
    }
    else if(num % 3 == 0 && num % 5 != 0){
        return "Divisible by 3 only";
    }
        else if(num % 3 != 0 && num % 5 == 0){
        return "Divisible by 5 only";
    }
    else{
        return "Not divisible by 3 and 5";
    }
}
console.log(checkNumberDivisble(9));
console.log(checkNumberDivisble(10));
console.log(checkNumberDivisble(8));
console.log(checkNumberDivisble(15));

console.log("--------------------");


//Question 9
const square = (Num) => Num * Num;
console.log(square(5));

console.log("--------------------");

//Question 10
const person = {
    name: "John",
    age: 25,    
};
function getPersonInfo(person){
    let {name, age} = person;
    return name + " " +"is" + " " + age + " " + "years old";
}
console.log(getPersonInfo(person));

console.log("--------------------");


//Question 11
function sum(...nums){
    return nums.reduce((total, ele) =>
        total + ele, 0);
}
console.log(sum(1,2,3,4,5));

console.log("--------------------");

//Question 12
function Message(){
    return new Promise(resolve =>{
        setTimeout(() => {
        resolve("Success");
        }, 3000);
    });
}

Message().then((message)=>{
    console.log(message);
})

console.log("--------------------");

//Question 13
function LargestNumber(Arr){
    let max=Arr[0];
    for(let i=1; i<Arr.length; i++){
        if(Arr[i] > max){
            max = Arr[i];
        }
    }
    return max; 
}
console.log(LargestNumber([1,3,7,2,4]));

console.log("--------------------");

//QUestion 14

function getKeys(stu){
return Object.keys(stu);
}
let Student = getKeys({ name: "John", age: 30 })
console.log(Student);

console.log("--------------------");

//Question 15
let str = "The quick brown fox";
let splitedArray = str.split(" ");
console.log(splitedArray);
