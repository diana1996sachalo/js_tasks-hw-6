//  task 1

function printTimeout(str, n) {
	const timer = setTimeout(function() {
  	console.log(str);
    clearTimeout(timer);
  }, n);
}
console.log( printTimeout('hello', 1000) ); // hello will appear after 10secs in console)

 // task 2

function sumAll(n) { 
	if (n === 0) return 0;
	return n + sumAll(n - 1);
}
console.log( sumAll(2) , sumAll(4) ); // 3 , 10
 
 // task 3

function bombTimer(str, time) { 
	for(let i = time; i >= 0; i--) {
  	const timer = setTimeout(() => {
    	console.log(i === 0 ? str : i);
      clearTimeout(timer)
    }, (time - i) * 1000);
  }
}
// console.log( bombTimer('Boom', 3) );

// task 4

function factorial(x){
	return x == 0 ? 1 : x * factorial (x - 1);
}
console.log(factorial(3), factorial(5)); // 6 , 120

 // task 5

function bombTimerRec(str, time) {
  setTimeout(() => {
    console.log(time ? time : str);
  
   time && bombTimerRec(str, time - 1);
  }, 1000);
}
// bombTimerRec("Mom I'm programmer", 4);


// task 6

const filterNumbers = (arr, maxNumber)  => arr.filter(el => el <= maxNumber)
console.log(filterNumbers([1, 4, 8, 1, 20], 5)) // [1, 4, 1]

 // task 7

const minMax = arr => ({
	min: Math.min(...arr),
  max: Math.max(...arr)
});
 console.log(minMax([1, 4, 8, 2, 20]))  // {  min: 1, max: 20}

// task 8

 const average = (arr) => {
  let sum = 0;
  
 for(let i = 0; i < arr.length; i++) sum += arr[i];
 
 return sum / arr.length;
} 
console.log(average([1,4,2])) // 2.3333333333333335

// task 9

const concatFirstNestedArrays = arr => arr.reduce((fullArr, currArr) => [...fullArr, ...currArr], [])
 console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]])); // [0, 1, 2, 3, 4, 5] 


 // task 10

const users = [
  { id: 1, name: 'John', birthday: '1999-2-12' },
  { id: 2, name: 'Bill', birthday: '1999-1-19' },
  { id: 3, name: 'Carol', birthday: '1999-3-11' },
  { id: 4, name: 'Luce', birthday: '1999-2-22' }
];

function usersToObject(users) { 
	const result = {};
	 for(let i = 0; i < users.length; i++) {
  	result[i + 1] = users[i] ;
  }
  
  return result;
}
 console.log(usersToObject(users)) ;

// task 11

const users1 = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-4-11' },
  { name: 'Luce', birthday: '1999-2-22' },
  { name: 'Luce', birthday: '2005-2-22' }
];
	
function filterUsersByMonth(users, month) {
	return users.filter(user => {
  	const { birthday } = user;
    const birthMonth = +birthday.split('-')[1];
    
    return (birthMonth - 1) === month;
  })
}
 console.log(filterUsersByMonth(users1, 0)) 

// task 12

function getAdultNames(users) {

   function calculateAge(birthday) { // birthday is a date
     var ageDifMs = Date.now() - birthday.getTime();
     var ageDate = new Date(ageDifMs); // miliseconds from epoch
     return Math.abs(ageDate.getUTCFullYear() - 1970);
   }
	return users.map(user => {
  	const birthday = new Date(user.birthday);
    const age = calculateAge(birthday);
   	
    return {
    	...user,
      age
    }
  })
  .filter(user => user.age >= 18)
  .map(user => `${user.name} ${user.age}`)
  .join(', ');
}
console.log(getAdultNames([
	 { name: 'John', birthday: '1999-6-12' },
	 { name: 'Bill', birthday: '2005-5-19' },
	 { name: 'Carol', birthday: '2003-10-11' },
	 { name: 'Luce', birthday: '2000-11-22' }
]));






