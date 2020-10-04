const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
    message.split(" ").length * pricePerWord; // Write code in this line

console.log(
    calculateEngravingPrice(
        "Proin sociis natoque et magnis parturient montes mus",
        10
    )
); // 80

console.log(
    calculateEngravingPrice(
        "Proin sociis natoque et magnis parturient montes mus",
        20
    )
); // 160

console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120

console.log(calculateEngravingPrice("Uno", 100)); // 100

//Код должен содержать функцию calculateEngravingPrice
//Результатом вызова функции должно быть число, если message - пустая строка
//Результатом вызова функции должно быть число 0, если message - пустая строка, а pricePerWord не задан
//Для строки 'Proin sociis natoque et magnis parturient montes mus'
//и цене за слово 10 ожидаемая цена равна 80
//Для строки 'Proin sociis natoque et magnis parturient montes mus'
//и цене за слово 20 ожидаемая цена равна 160
//Для строки 'Donec orci lectus aliquam est magnis'
//и цене за слово 40 ожидаемая цена равна 240
//Для строки 'Donec orci lectus aliquam est magnis'
//и цене за слово 20 ожидаемая цена равна 120
//Для строки 'Uno'
//и цене за слово 100 ожидаемая цена равна 100
//Ожидается использование метода 'split'
//Ожидается использование метода 'length'
//Запрещается использовать циклы 'for'
//или 'forEach'
//внутри функции
//Запрещается использовать 'push'
//внутри функции
//Запрещается метод 'splice'
//внутри функции