export default function getSpecialAttacks(character) {
    // 1. Деструктуризация объекта: вытаскиваем только массив 'special' из персонажа.
    const { special } = character;

    // 2. Метод .map() перебирает каждую атаку и создает на её основе новый объект.
    return special.map((attack) => {
        // 3. Деструктуризация конкретной атаки:
        // Мы достаем id, name, icon.
        // А для description задаем значение по умолчанию через '='.
        // Если в объекте 'attack' поля description нет, запишется наша фраза.
        const {
            id,
            name,
            icon,
            description = 'Описание недоступно'
        } = attack;

        // 4. Возвращаем новый объект, в котором гарантированно есть все 4 поля.
        return {
            id,
            name,
            icon,
            description
        };
    });
}