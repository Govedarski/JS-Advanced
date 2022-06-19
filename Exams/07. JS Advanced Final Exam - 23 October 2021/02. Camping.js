class SummerCamp {
    priceForTheCamp = {'child': 150, 'student': 300, 'collegian': 500};
    listOfParticipants = [];

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
    }

    registerParticipant(name, condition, money) {
        const moneyNeeded = this.priceForTheCamp[condition];

        if (!moneyNeeded) {
            throw Error('Unsuccessful registration at the camp.');
        }
        if (this.listOfParticipants.some(x => x.name === name)) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < moneyNeeded) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.push({name, condition, power: 100, wins: 0});
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name){
        const participantIndex = this.listOfParticipants.findIndex(x=> x.name === name)
        if(participantIndex === -1 ){
            throw Error(`The ${name} is not registered in the camp.`)
        }
        this.listOfParticipants.splice(participantIndex,1)
        return `The ${name} removed successfully.`
    }

    timeToPlay (typeOfGame, participant1, participant2){
        return typeOfGame === 'WaterBalloonFights'
            ? this._waterBalloonFights(participant1, participant2)
            : this._battleship(participant1)
    }

    _battleship(name){
        const participant = this._findParticipant(name)
        participant.power += 20
        return `The ${name} successfully completed the game Battleship.`
    }

    _waterBalloonFights(name1, name2){
        const p1 = this._findParticipant(name1)
        const p2 = this._findParticipant(name2)
        if(p1.condition !== p2.condition){
            throw Error(`Choose players with equal condition.`)
        }
        if(p1.power === p2.power){
            return `There is no winner.`
        }

        p1.power > p2.power ? p1.wins++ : p2.wins++
        const winner = p1.power > p2.power ? p1.name : p2.name
        return `The ${winner} is winner in the game WaterBalloonFights.`
    }

    _findParticipant(name){
        const participant = this.listOfParticipants.find(x => x.name === name)
        if(!participant){
            throw Error(`Invalid entered name/s.`)
        }
        return participant
    }

    toString (){
        const info = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`]
        this.listOfParticipants
            .sort((p1, p2) => p2.wins - p1.wins)
            .forEach( p=> info.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`))
        return info.join('\n')
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights","Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());