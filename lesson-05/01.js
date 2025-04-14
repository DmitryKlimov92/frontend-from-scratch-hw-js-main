/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим
ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`,
метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
    resources: {
        gold: 250,
        lumber: 100,
    },
    addResource(resource, amount) {
        // 1. Проверяем существование ресурса
        if (!this.resources.hasOwnProperty(resource)) {
            console.log("Invalid resource");
            return false;
        }

        // 2. Проверяем, что amount - число
        if (typeof amount !== 'number' || isNaN(amount)) {
            console.log("Amount must be a valid number");
            return false;
        }

        // 3. Добавляем количество к ресурсу
        this.resources[resource] += amount;
        return true;
    }
};




/*

Это начальные данные, остальное можно удалять, кроме текста задания!

const game = {
    resources: {
        gold: 250,
        lumber: 100,
    },
    addResource() {}
}

 */