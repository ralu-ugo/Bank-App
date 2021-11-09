// let person1 = {
//     name: 'Micheal',
//     age: '17',
//     occupation: 'Soft guy',

//     eat() {
//         console.log(`${this.name} is eating`);
//     },
//     walK() {
//         console.log(`${this.name} is walking`);
//     }
// }

// let person2 = {
//     name: 'Klaus',
//     age: '127',
//     occupation: 'Designer',

//     eat() {
//         console.log(`Micheal is eating`);
//     },
//     walK() {
//         console.log('Micheal is walking');
//     }
// }

class Person {
    constructor(name, age, occuptatoion, height) {
        this.name = name;
        this.age = age;
        this.work = occuptatoion;
        this.height = height;

 
    }
}


class BankAccount {
    constructor(name, num, balance) {
        this.acctName = name;
        this.acctNum = num;
        this.acctBalance = balance;
    

    }

} 



let account1 = new BankAccount("Yé", '5694303' , 5000)
console.log(account1);

let account2 = new BankAccount("Kylie", '3875838', 4000)
console.log(account2);

let person = new Person('Ralu', '18', 'Soft nigg', '6,2ft')




class Vehicle {
    constructor (brand, year, color) {
        this.brand = brand;
        this.year =year;
        this.color = color;

    }
}

let vehicle1 = new Vehicle('Mercedes Benz', '2018', 'Matte Black' )
console.log(vehicle1);