//console.log("Hello World");

//document.write("Hello");

//console.warn("This is a warning");
//console.error("This is an error");

//console.assert(4 == 6);

//console.assert(5 == 5);

//Number
/*var num1 = 35;
var num2 = 37;

console.log(num1 + num2);
//String
var str1 = "String";
var str2 = "String2";
//Objects
var marks = {
    ravi: 75,
    aditya: 99.9,

}

console.log(marks);


//Booleans

var a = true;
var b = false;

console.log(a, b);



var a = prompt("User please enter the number greater than 100 ");
myfunction(a);

function myfunction(b) {
    if (a == '' || a == null) {
        return alert("No number entered exiting");
    } else if (a! < 100) {
        prompt("Number less than 100 please enter again");
        if (a < 100) {
            console.log("Your Entered number is again less than 100 again so printing :", a);

        }
    } else {
        console.log("Your Entered number is :", a);
    }

}


var a = prompt("User please enter the number");
myfunction(a);

function myfunction() {
    if (a > 0) {
        alert(1);
    } else if (a < 0) {
        alert(-1);
    } else if (a == 0) {
        alert(0);
    }
}
*/
;
/*let a = Number(prompt("Enter number1"));
let b = Number(prompt("Enter number2"));

min(a, b);

function min(a, b) {
    if (a < b) {
        alert(a);
    } else {
        alert(b);
    }

}


let a = Math.min(num1, num2);
alert(a);
*/















/*
console.log(typeof 42);

console.log(typeof 'adi');

console.log(typeof true);

console.log(typeof undeclaredVariable);

const cars = ["haha", "Volvo", "BMW"];
console.log(typeof cars);

typeof(mycar)

console.log(5 > 4)
console.log("apple" > "pineapple")
console.log(undefined == null)
console.log(undefined === null)
console.log(null == "\n0\n")
console.log(null === +"\n0\n")

str1 = prompt("Enter the Username");
alert(str1);
console.log("Username is ", str1);

*/


/*if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }



let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    brake;

  case 1:
    alert( 1 );
    brake;

  case 2:
  case 3:
    alert( '2,3' );
    brake;
}
*/
/*let x = prompt("Enter x", '');
let n = prompt("Enter n", '');
function pow(x, n) {
    let final = x;
    for (let i = 1; i < n; i++) {
        final *= x;
    }
    return final;
}
if (n < 1) {
    alert(`Provide a positive(+) integer`);
} else {
    alert(pow(x, n));
}
*/


//creating js objects with object literal


/*let car = {
    brand: 'Ford',
    brand2: 'Ferrari',
    speed: 0,
    speed2: 0,
    status: function() {
        console.log(this.brand + " is running at " + this.speed + "km/h");
    },
    status2: function() {
        console.log(this.brand2 + " is running at " + this.speed2 + "km/h");
    },
    accelerate: function(x) {
        this.speed = this.speed + x;
    },

    brake: function(x) {
        this.speed = this.speed - x;
    },
    accelerate2: function(y) {
        this.speed2 = this.speed2 + y;
    },

    brake2: function(y) {
        this.speed2 = this.speed2 - y;
    }
}
car.status()
car.accelerate(50);
car.status()
car.accelerate(100);
car.status()
car.brake(25)
car.status()
car.accelerate2(200)
car.status2()
car.brake2(100)
car.status2()

*/


/*class Car {

    constructor(brand, speed, motion) {
        this.brand = brand;
        this.speed = speed;
        this.motion = motion;
    }
    accelerate(a) {
        this.speed = this.speed + a;

    }
    brake(val) {
        this.speed = this.speed - val;
    }

    status() {
        if (this.speed == 0) {
            console.log(this.brand + "running at " + this.speed + " km/h ");
            console.log("The Car is not moving..");
        } else if (this.speed < 0) {
            console.log(this.brand + "running at 0 km/hr ");
            console.log("The car has stopped");
            //emergency_brake();
        } else {
            console.log(this.brand + " running at " + this.speed + " km/hr ");
            console.log("The car is moving.......");
        }
    }
}

let ob = new Car("Ford", 0, 0)
ob.status();
ob.accelerate(50);
ob.status();
ob.accelerate(100);
ob.status();
ob.brake(20);
ob.status();
ob.brake(200);
ob.status();
*/




/*let str = prompt("Enter string")
let arr = str.split("-");
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1);
}
let re = arr.join("");
console.log(re);
*/


/*function filterrange(arr, a, b) {
    let re = arr.filter((num) => num >= a && num <= b);
    return re;
}

let array = [5, 3, 8, 1]
let fill = filterrange(array, 1, 4);
alert(fill);
alert(array);
*/



/*stra = prompt("Enter the string")
max = prompt("Enter the max lenght of the array")
truncate(stra, max)

function truncate(str, maxlength) {
    var ab = (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
    alert(ab);
}
*/



/*stra = prompt("Enter the string")
extractCurrencyValue(stra)

function extractCurrencyValue(str) {
    var ab = +str.slice(1);
    alert(ab);
}
*/




//practice slice,read array,truncate,filter/filterrange,substring,split,DOM mainly,timeout, settime


/*let strings = ["React Js", "JavaScript", "React Js", "JavaScript",
    "JavaScript", "JavaScript", "React Js", "React Js"
];
unique(strings);

function unique(arr) {
    let stra = Array.from(new Set(arr));
    alert(stra);
}

*/