// // var text = "gooye";

// if (text == "hello") {
//     console.log("hello!");
// } else if (text == "goodbye") {
//     console.log("see you soon!");
// } else {
//     console.log("I coudn't understand you message!")
// }


// var age = 16

// var drink = (age >= 18) ? "beer" : "juise"

// console.log(drink);


// for (let i = 0; i <= 1000; i++) {
//     value = (i % 2 == 0) ? i + " is even" : i + " is odd"

//     console.log(value)
// }

// console.log("the loop is over")
//////////////////////////////////////////////////////////////

// var isTrunedOn = true;
// var energyConsumed = 0 ;

// while (isTrunedOn && energyConsumed < 3) {

//     console.log("Producing light!")
//     ++energyConsumed
//     console.log("energyConsumed = "+ energyConsumed)
// }
////////////////////////////////////////////////////////////////
// var isTrunedOn = true;
// var energyConsumed = 0 ;

// while (isTrunedOn && energyConsumed < 10) {

//     console.log("Producing light!")
//     ++energyConsumed

//     if (energyConsumed == 5) {
//         console.log(" Power OUTING " )
//         break
//     }
//     console.log("energyConsumed = "+ energyConsumed)
// }
////////////////////////////////////////////////////////////////

// var energyConsumed = 0;
// do {
//     energyConsumed++
//     console.log("energyConsumed = "+ energyConsumed)
// } while(energyConsumed<5) 

////////////////////////////////////////////////////////////////

// var energyConsumed = 0;
// while (energyConsumed<5) {
//     energyConsumed++

//     if (energyConsumed==3) {
//         console.log("Power OUTING")
//         continue
//     }

//     console.log("energyConsumed = "+ energyConsumed)
// }

////////////////////////////////////////////////////////////////

// function doSomething() {
//     var option = prompt("Enter a colour name: ")
//     var text = ""

//     switch (option) {
//         case "red":
//             text = " you chose red"
//             break
//         case "blue":
//             text = " you chose blue"
//             break
//         case "something green":
//         case "green":
//             text = " you chose green"
//             break

//         default: 
//         text= "unknown option"
//         break  
//     }

//     document.getElementById('header-text').innerHTML = text
// }
////////////////////////////////////////////////////////////////

// var number = 0;

// function doSomething() {
//     ++number;

//     document.getElementById('header-text').innerHTML = number
// }



// function addHello(text) {
//     return "Hello " + text
// }

// console.log(addHello("Code Palace"));



// function addNumber(first , second) {
//     console.log(first+ second)
// }

// addNumber(10,10)

////////////////////////////////////////////////////////////////


// var example = " Hello";

// function doSomething() {
//     var example2 = "World" 
// }
// ////////////////////////////////////////////////////////////////

// var example = " Hello";

// function doSomething() {
//     var example2 = "World"

//     if( 1 > 0 ) {

//         let example2 =  "Hello World    djsdkdsjkds"
//         console.log(example2)
//     }
//     console.log(example2)
// }

// doSomething( )

////////////////////////////////////////////////////////////////

// var connection = false;

// var connectionAttempt = 0;


// function connectToInternet() {
//     if (connectionAttempt >= 5) {
//         connection = true
//         console.log("you are connected");
//         document.getElementById("header-text").innerHTML = "Connected"
//     } else {
//         connectionAttempt++
//         console.log("Connection attempts: " + connectionAttempt);
//         connectToInternet()
//     }
// }
////////////////////////////////////////////////////////////////
// function doSomething () {
//     connectToInternet()
// }

// var user = {
//     username: "Ammar",
//     uniqueId: 12345,
//     password: "Hello",
//     other: {
//         info: "like cheese",
//         hobbies: ['one', 'two', 'three'],
//         skills: "coding"
//     }
// }

// console.log(user);
////////////////////////////////////////////////////////////////

// var password = prompt("please insert your password")

// if (password == "hello") {

//     console.log(`WElcome back ${user.username}`)
//     console.log(`Your UserID is ${user.uniqueId}`)
//     console.log(user.other.info)


//     document.getElementById('header-text').innerHTML = user.username + " is now login"
// } else {
//     document.getElementById('header-text').innerHTML = "Bad creadintionls"
// }
////////////////////////////////////////////////////////////////
// let user = {
//     name: "Ammar",
//     userID: 123456,
//     password: "Hello",

//     get getName() {
//         return " Your name is: " + this.name
//     },

//     set setPassword(newPassword) {
//         console.log(`Your password is: ${newPassword}`)
//         this.password = newPassword
//     }
// }

// console.log(user.getName);
// console.log(user.password);
// user.setPassword= 'HELLOOOOO'
// console.log(user.password)

////////////////////////////////////////////////////////////////


// function User(name, age) {
//     this.name = name;
//     this.age = age

//     this.introduction = function () {
//         console.log(this.name + " | " + this.age)
//     }
// };


// let ivan = new User("Ammar", "23")
// let samo = new User("samo", "233")

// ivan.introduction()
// samo.introduction()

// ivan.ability = 'visabilty'
// console.log(ivan);
// console.log(samo);

////////////////////////////////////////////////////////////////

// function User(name, age) {
//     this.name = name;
//     this.age = age

//     this.introduction = function () {
//         console.log(this.name + " | " + this.age)
//     }
// };

// User.prototype.hello = function () {
//     console.log(this.name + " say hello")
// }
// let ivan = new User("Ammar", "23")
// let samo = new User("samo", "233")

// ivan.hello()

////////////////////////////////////////////////////////////////


// let people = ['one', 'two', 'three', 'four', 'five', 'six'];

// console.log(people);


// people.push('a7a')
// console.log(people);

// people.unshift('a7a')
// console.log(people);

// console.log(people[0]);

// people[1] = "sasha"

// console.log(people)


// people.shift()
// console.log(people)

// people.pop()
// console.log(people)


// console.log(people.indexOf('two'));

// console.log(people.includes('two'));

// console.log(people.sort());


// let randomItems = [20, "hello", false , ["hello", 50]]

// console.log(randomItems);

////////////////////////////////////////////////////////////////

//let groups = [['Mario', 'Luigi'],["Nick", "Potato"], ["Max","samu"]]

// console.log(groups[0][1]);
// console.log(groups[1][1]);
// console.log(groups[2][0]);


// for (let group in groups) {
    
//     console.log(groups[group] + " " + group);

//     for( let person in groups[group]){
//         console.log(groups[group][person] + " " + person);
//     }
    
// }


// let employees = {
//     Fedrico: "Programmer",
//     Nick: "Milkman",
//     Jens:"Bitcon",
// }


// for (let employee in employees) {
//     console.log(employee + " | " + employees[employee])
// }

////////////////////////////////////////////////////////////////

// let result = 0;

// try {
//     result = 10 - 20;
//     console.log(result);
// } catch (error) {
//     console.log(error);
//     console.log('checkkk ');
// } finally {

//     console.log(" <3 ");
// }
    
