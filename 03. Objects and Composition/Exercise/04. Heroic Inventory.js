function solve(heroes) {
    function createHero(name, level, items) {
        items = items ? items.split(', ') : [];
        return {name, level: Number(level), items};
    }

    const heroesRegister = [];

    for (const heroData of heroes) {
        heroesRegister.push(createHero(...heroData.split(' / ')));
    }

    return JSON.stringify(heroesRegister);
}

console.log(solve(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));