class Level{
    
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2000;
    coins;
    salsa;

    constructor(enemies, clouds, backgroundObjects, coins, salsa){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.salsa = salsa;
    }
}