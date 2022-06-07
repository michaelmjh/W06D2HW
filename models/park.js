const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addDino = function(dino){
    this.dinosaurs.push(dino);
}

Park.prototype.removeDino = function(dino){
    let dinoIndex = this.dinosaurs.indexOf(dino);
    this.dinosaurs.splice(dinoIndex, 1);
}

Park.prototype.getMostVisitors = function(){
    let vistors = 0;
    let mostPopDino;
    for (dino of this.dinosaurs){
        if (dino.guestsAttractedPerDay > vistors){
            vistors = dino.guestsAttractedPerDay;
            mostPopDino = dino;
        }
    }
    return mostPopDino;
}

Park.prototype.getSpecies = function(species){
    let dinoList = [];
    for (dino of this.dinosaurs){
        if (dino.species === species){
            dinoList.push(dino);
        }
    }
    return dinoList;
}

Park.prototype.getDailyVisitors = function(){
    let dailyVisitors = 0;
    for (dino of this.dinosaurs){
        dailyVisitors += dino.guestsAttractedPerDay;
    }
    return dailyVisitors;
}

Park.prototype.getAnnualVisitors = function(){
    return (this.getDailyVisitors() * 365);
}

Park.prototype.getAnnualRevenue = function(){
    return (this.getAnnualVisitors() * this.ticketPrice);
}

Park.prototype.removeSpecies = function(species){
    for (let i = this.dinosaurs.length - 1; i >= 0; i--){
        if (this.dinosaurs[i].species === species){
            console.log(this.dinosaurs[i].species)
            this.dinosaurs.splice(i, 1);
        }
    }
}

Park.prototype.getDietTypes = function(){
    let dietTypes = { 'carnivore': 0, 'herbivore': 0, 'omnivore': 0 };
    for (dino of this.dinosaurs){
        dietTypes[dino.diet]++;
    }
    return dietTypes;
}

module.exports = Park;