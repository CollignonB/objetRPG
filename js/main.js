class warior {
    constructor(name) {
        this._name = name;
        this._hp = 30;
        this._attackValue = 10;
        this._defenceValue = 20;
    }

    set name(name) {
        if(typeof(name) === "string"){
            this._name = name; 
        }
    }
    get name () {
        return this._name;
    }

    set hp (hp) {
        if (hp >= 0 && hp <= 50) {
            this._hp = hp
        }
    }
    get hp() {
        return this._hp;
    }

    set attackValue(attackValue) {
        if (attackValue > 0 && attackValue <= 15) {
            this._attackValue = attackValue;
        }
    }
    get attackValue() {
        return this._attackValue;
    }

    set defenceValue(defenceValue) {
        if (defenceValue > 0 && defenceValue <= 15) {
            this._defenceValue = defenceValue;
        }
    }
    get defenceValue() {
        return this._defenceValue;
    }
    attack (target) {
        console.log("Moi " + this.name + " je vais t'occir vile " + target.name);
        target.hp = target.hp - this.attackValue;
        console.log("HP de "+ target.name +" après l'attaque : " + target.hp);
    }
}

class wizard {
    constructor(name) {
        this._name = name;
        this._hp = 30;
        this.mp = 30;
        this._attackValue = 5;
        this._defenceValue = 15;
    }

    set name(name) {
        if(typeof(name) === "string"){
            this._name = name; 
        }
    }
    get name () {
        return this._name;
    }

    set hp (hp) {
        if (hp >= 0 && hp <= 50) {
            this._hp = hp
        }
    }
    get hp() {
        return this._hp;
    }

    set attackValue(attackValue) {
        if (attackValue > 0 && attackValue <= 15) {
            this._attackValue = attackValue;
        }
    }
    get attackValue() {
        return this._attackValue;
    }

    set defenceValue(defenceValue) {
        if (defenceValue > 0 && defenceValue <= 15) {
            this._defenceValue = defenceValue;
        }
    }
    get defenceValue() {
        return this._defenceValue;
    }
    attack (target) {
        console.log("Moi " + this.name + " je vais t'occir vile " + target.name);
        target.hp = target.hp - this.attackValue;
        console.log("HP de "+ target.name +" après l'attaque : " + target.hp);
    }
    soin (target) {
        console.log("J'essaye de soigner " + target.name)
        if(this.mp < 10){
            console.log("Je n'ai pas assez de mana !");
        }else{
            console.log("Je soigne !");
            this.hp += 10;
            console.log("HP de " + target.name + " après le soin : "+ target.hp);
        }
    }
}



let guerrier1 = new warior("Vusil");
let guerrier2 = new warior("Trahore");
let wizard1 = new wizard("Mazalera");


guerrier1.attack(wizard1);
guerrier2.attack(wizard1);

//wizard1.mp = 9;
wizard1.soin(wizard1);
wizard1.attack(guerrier1);