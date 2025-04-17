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

// Объявляем функцию includesElement (как в условии)
function includesElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}

// Основная функция findCommonElements
function findCommonElements(array1, array2) {
    const common = [];
    for (const el of array1) {
        if (includesElement(array2, el) && !includesElement(common, el)) {
            common.push(el);
        }
    }
    return common;
}

// Экспортируем функцию для тестов (если требуется)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { findCommonElements, includesElement };
}