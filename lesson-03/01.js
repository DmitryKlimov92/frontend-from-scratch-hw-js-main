// Напишите функцию calculateAverage, которая принимает 2 числа
// и возвращает их среднее арифметическое



function calculateAverage(number1, number2) {
   if  (typeof number1 !== "number" || typeof number2 !== "number") {
      return Nan;
}
else
   {
      return (number1 + number2) / 2;
   }
}

   console.log(calculateAverage);
