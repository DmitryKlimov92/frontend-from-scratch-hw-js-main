/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив,
содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее.
Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function includesElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}

function findCommonElements(array1, array2) {
    const result = [];
    for (const element of array1) {
        if (includesElement(array2, element) && !includesElement(result, element)) {
            result.push(element);
        }
    }
    return result;
}

// Тестовые случаи
console.log(findCommonElements([1, 2, 3], [2, 3, 4]));  // [2, 3]
console.log(findCommonElements([1, 2, 2, 3], [2, 3, 3, 4]));  // [2, 3] (без дубликатов)
console.log(findCommonElements([1, 2, 3], [4, 5, 6]));  // []
console.log(findCommonElements([1, 2, 3, 4], [3, 4]));  // [3, 4] (разная длина)
console.log(findCommonElements(['a', 'b'], ['b', 'c']));  // ['b']