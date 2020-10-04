const getItemsString = function(array) {
    'use strict';
    // Write code under this line
    let result = "";
    for (let i = 0; i < array.length; i += 1) {
        result += `${i + 1} - ${array[i]}\n`;
    }
    return result;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/

/*Код должен содержать функцию getItemsString
Результатом вызова функции должна быть строка, если array массив
Результатом вызова функции должна быть пустая строка, если array - пустой массив
Для массива строк результат не совпадает с ожидаемым
Для массива чисел результат не совпадает с ожидаемым
Ожидается использование метода 'for'
Ожидается использование метода 'length'
*/