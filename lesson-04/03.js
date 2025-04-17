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

function findCommonElements(array1, array2) {
    const commonElements = [];

    for (let i = 0; i < array1.length; i++) {
        const currentElement = array1[i];

        // Проверяем, есть ли текущий элемент первого массива во втором массиве
        if (includesElement(array2, currentElement)) {
            // Проверяем, нет ли уже этого элемента в результирующем массиве
            if (!includesElement(commonElements, currentElement)) {
                commonElements.push(currentElement);
            }
        }
    }

    return commonElements;
}

// Примеры использования:
console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd'])); // ['b', 'c']
console.log(findCommonElements([1, 2, 3], [4, 5, 6])); // []