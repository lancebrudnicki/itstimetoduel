


class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name,cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        target.resilience -= this.power
    }

}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name,cost);
        this.text = text
        this.stat = stat;
        this.magnitude = magnitude;
    }


    play(target){
        if (this.stat === 'resilience'){
            target.resilience += this.magnitude;
        }
        else if( this.stat === "power"){
            target.power += this.magnitude;
        }
    }
}










const RedBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);

const HardAlgorithum = new Effect('Hard Algorithm', 2, "increase target's resilience by 3" ,'resilience', 3);
HardAlgorithum.play(RedBeltNinja)

const BlackBeltNinja = new Unit('Black Belt Ninja', 3, 3, 4);
const UnhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1 ,"reduce target's resilience by 2", 'resilience', -2 );
UnhandledPromiseRejection.play(RedBeltNinja)

const PairProgramming = new Effect('Pair Programming', 3, "increase target's power by 2", 'power', 2);
PairProgramming.play(RedBeltNinja)
console.log(RedBeltNinja)

RedBeltNinja.attack(BlackBeltNinja)
console.log(BlackBeltNinja)















