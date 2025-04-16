/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
    // Проверяем, что строка не пустая и не состоит из пробелов
    if (typeof str !== 'string' || str.trim() === '') {
        return false;
    }

    // Пробуем преобразовать строку в число
    // Учитываем, что Number('') вернет 0, поэтому нужна проверка выше
    return !isNaN(str) && !isNaN(parseFloat(str));
}

// Тесты
console.log(isNumeric("123"));     // true
console.log(isNumeric("12.3"));    // true
console.log(isNumeric("-12.3"));   // true
console.log(isNumeric("123abc"));  // false
console.log(isNumeric("abc"));     // false
console.log(isNumeric(" "));       // false
console.log(isNumeric(""));        // false
console.log(isNumeric("1.23e5"));  // true (экспоненциальная запись)
console.log(isNumeric("0xFF"));    // true (шестнадцатеричное число)
