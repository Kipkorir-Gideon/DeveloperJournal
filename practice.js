// const age = 18

// function test(message="Hello World!") {
//     const name = "Gideon"
//     function innerFunction(msg) {
//         console.log(msg);
//     }
    
//     innerFunction(msg="It is awesome learning JavaScript.")
//     console.log(message);
//     console.log(name);
//     console.log(age);
// }

// test();

// console.log(name);
// console.log(age);




// const meeting = function(members) {

// }

// function googleMeet(members) {
    
// }



const drivers = ["Bobby", "Sammy", "Chris", "Ben", "John", "Charles"]

function findMatching(name) {
  if (name == "Bobby" || name == "Sammy") {
    return name;
  }
}

const matchingDriver = drivers.filter(findMatching);

console.log(matchingDriver);