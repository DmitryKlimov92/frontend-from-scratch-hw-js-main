/*
Реализовать метод `addResource`, который будет добавлять указанное количество
ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`,
метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount`
к текущему количеству этого ресурса в объекте.
*/


const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },

  // Исправлено: заменяем 'gold' на правильные параметры
  addResource(resource, amount) {
    // 1. Проверяем существование ресурса
    if (!(resource in this.resources)) {
      console.log("Invalid resource");
      return;
    }

    // 2. Проверяем, что amount - число
    if (typeof amount !== 'number') {
      console.log("Amount must be a number");
      return;
    }

    // 3. Добавляем ресурс
    this.resources[resource] += amount;
  }
};

// Добавляем 50 к золоту
game.addResource('gold', 50);
console.log(game.resources.gold); // 300 (250 + 50)

// Пытаемся добавить несуществующий ресурс
game.addResource('stone', 30); // В консоли: "Invalid resource"

// Добавляем 20 к дереву
game.addResource('lumber', 20);
console.log(game.resources.lumber); // 120 (100 + 20)



/*const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(gold) {}
}

 */