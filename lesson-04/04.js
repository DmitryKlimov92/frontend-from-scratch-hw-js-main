/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    return str.split('').map(char => char + char).join('');
}

// Примеры использования:
console.log(doubleEachCharacter('hello')); // 'hheelllloo'
console.log(doubleEachCharacter('JS'));    // 'JJSS'
console.log(doubleEachCharacter(''));      // ''
console.log(doubleEachCharacter('a b'));   // 'aa  bb'
