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
  addResource(resource, amount) {
    if (!(resource in this.resources)) {
      console.log("Invalid resource");
      return;
    }
    this.resources[resource] += amount;
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