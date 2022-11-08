const numbers = [1, 2, 4, 2, 6, 9, 5, 77, 34, 35, 57, 3114, 56]

//1. вывести все четные числа
function evenNumbersFunction(list) {
    let evenNumbers = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 == 0) {
            evenNumbers.push(list[i]);
        }
    }
    return evenNumbers;
}
//2. вывести сумму всех нечетных чисел
function functionSummOfOddNumbers(list) {
    let summOfOddNumbers = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 != 0) {
            summOfOddNumbers = summOfOddNumbers + list[i];
        }
    }
    return summOfOddNumbers;
}
//3. все числа 9 < N < 100
function numberFindFunction(list) {
    let number = [];
    for (let i = 0; i < list.length; i++) {
        if (9 < list[i] && list[i] < 100 ) {
            number.push(list[i]);
        }
    }
    return number;
}
//console.log(numberFindFunction(numbers));

const people = ['Bob', 'Adam', 'Sergay', 'Peter', 'Zoro']

function peopleFindFunction(list) {
    let longName = [];
    for (let person of people) {
        longName.push(person)
    }
    return longName;
}

console.log(peopleFindFunction(people));
//4. вывести всех людей буквы > 4