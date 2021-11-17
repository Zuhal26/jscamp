function isPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let counter = 0;
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                counter++;
            }
        }
        if (counter == 0) {
            console.log(`${numbers[i]} sayısı asal bir sayıdır.`);
        } else {
            console.log(`${numbers[i]} sayısı asal bir sayı değildir.`);
        }
    }
}

isPrime(50, 40, 60, 70, 15, 100, 11, 5, 3, 9, 8);

function isFriendly(number1, number2) {
    let total1 = 0;
    let total2 = 0;

    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) {
            total1 += i;
        }
    }

    for (let j = 0; j < number2; j++) {
        if (number2 % j == 0) {
            total2 += j;
        }
    }

    return total1 === number2 && total2 == number1 ?
        console.log(`${number1} ve ${number2} sayıları arkadaş sayılardır.`) :
        console.log(
            `${number1} ve ${number2} sayıları arkadaş sayı değillerdir.`
        );
}

isFriendly(220, 284);


function isPerfect(number) {
    let total = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            total += i;
        }
    }
    if (number == total) {
        console.log(`Bu sayı mükemmel bir sayıdır : ${number}`);
    }
}

for (let i = 1; i < 1000; i++) {
    isPerfect(i)
}
let divisors = (number) => {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0)
            sum += i
    }
    return sum;
}

let isPerfectNumber = (number) => {
    let sum = divisors(number)
    if (sum == number)
        console.log(number)
}

function isPerfect(number) {
    let total = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            total += i;
        }
    }
    if (number == total) {
        console.log(`Bu sayı mükemmel bir sayıdır : ${number}`);
    }
}

for (let i = 1; i < 1000; i++) {
    isPerfect(i);
}