class BankAccount {
    constructor (name, age, accType, image, balance) {
        this.name = name;
        this.age = age;
        this.accType = accType;
        this.avatar = image ;
        this.balance = balance
    }

    withdraw (amount) {
        if (amount > this.balance){
            alert('Insufficient Funds');
        }       
     else {
        this.balance -= amount
        alert(`You have been debited by ${amount}. Your balance is now ${this.balance}`)
    }
    }


    deposit (amount) {
        if (amount > 5e6 && this.accType === 'savings') {
            console.log('You cannot deposit this amount this amount into this savings account. You might need an upgrade')
        } else {
            this.balance += amount 
            console.log(`Your account hasbeen credited with a sum of ${amount}. Your account balance is now ${this.balance}`)
        }
    }


    checkBalance () {
        console.log(`Your balance at ${new Date()} is ${this.balance}`);
    }
}

let acct1 = new BankAccount(
    'Rocky',
    '20',
    'savings',
    'https.//randomuser.me/api',
    50000000
    
)

const accounts = []
const cardList = document.querySelector('#card-list')

const generateCards = () => {
    let cards = accounts.map(acc => {
        return `
        <div class= "card">
            <figure>
                <img src="${acc.avatar}">
            </figure>
            <h1>${acc.name}</h1>
            <p>${acc.accType}</p>
            <h4>${acc.balance}</h4>
        </div>
        `
    })
    return cards.join('')
}

document.createAccForm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    let username = document.createAccForm.username.value
    let age = document.createAccForm.age.value
    let accType = document.createAccForm.accType.value
    let balance = document.createAccForm.balance.value
    let avatar = document.createAccForm.avatar.value
    let avatarData = '';

    let file = new FileReader()
    file.readAsDataURL(document.createAccForm.avatar.files[0])
    file.onload = function (data) {
        avatarData = data.target.result
        // let img = document.createElement('img')
        // img.src = data.target.result
        // document.body.append(img)
        
    }
    
    console.log(
        {
            username,
            age,
            accType,
            balance,
            avatar
        }
    )

    let account = new BankAccount(username, age, accType, avatarData, parseFloat(balance))
    accounts.push(account)
})