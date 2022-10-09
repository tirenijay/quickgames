// Callback Function
function sayHello(name = "Johnson") {
    console.log(`Hello ${name}`)
}

function greetUser(userName, callbackFn) {
    callbackFn(userName);
    console.log('Good morning')
    userEats("yam")
}
function userEats(food) {
    console.log('usr eats ' + food)
}


sayHello();
console.log('Trying out our callback function ');
greetUser("Tireni", sayHello);
console.log('Trying out our callback function');
greetUser("foluwa", userEats)