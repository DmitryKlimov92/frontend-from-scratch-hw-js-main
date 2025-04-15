/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
    let result = '';
    let capitalizeNext = true; // Флаг: нужно ли делать следующий символ заглавным

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (capitalizeNext && char !== ' ') {
            result += char.toUpperCase();
            capitalizeNext = false;
        } else {
            result += char.toLowerCase();
        }

        // Если текущий символ — пробел, следующий нужно сделать заглавным
        if (char === ' ') {
            capitalizeNext = true;
        }
    }

    return result;
}

console.log(capitalizeWords("hello world from javascript")); // "Hello World From JavaScript"
