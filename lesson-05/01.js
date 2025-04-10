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
    lumber: 100
  },
  addResource: function(resource, amount) {
    // 1. Проверяем, есть ли ресурс в game.resources
    if (this.resources.hasOwnProperty(resource)) {
      // 2. Если есть — добавляем amount
      this.resources[resource] += amount;
    } else {
      // 3. Если нет — выводим ошибку
      console.log("Invalid resource");
    }
  }
};

game.addResource("gold", 50);    // gold станет 250 + 50 = 300
game.addResource("lumber", 20);  // lumber станет 100 + 20 = 120
game.addResource("stone", 30);   // Выведет "Invalid resource" (нет такого ресурса)

console.log(game.resources); // { gold: 300, lumber: 120 }


/*
const game = {
  resources: {
    gold: 250,
    lumber: 100
  },
  addResource(gold) {}
}

*/