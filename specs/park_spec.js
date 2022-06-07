const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('diplodocus', 'herbivore', 20);
    dino3 = new Dinosaur('citipati', 'omnivore', 70);
    dino4 = new Dinosaur('t-rex', 'carnivore', 30);

    dinosaurs = [dino1, dino2];

    park = new Park('dpark', 10, dinosaurs);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'dpark');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const expected = [dino1, dino2];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dino3);
    const expected = [dino1, dino2, dino3];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDino(dino2);
    const expected = [dino1];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dino3);
    const actual = park.getMostVisitors();
    assert.deepStrictEqual(actual, dino3);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dino3);
    park.addDino(dino4);
    const expected = [dino1, dino4];
    const actual = park.getSpecies('t-rex');
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.getDailyVisitors();
    assert.strictEqual(actual, 70);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDino(dino3);
    park.addDino(dino4);
    const actual = park.getAnnualVisitors();
    assert.strictEqual(actual, 62050);
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park.getAnnualRevenue();
    assert.strictEqual(actual, 255500);
  });

  it('should remove a species of dinosaur', function(){
    park.addDino(dino3);
    park.addDino(dino4);
    park.removeSpecies('citipati');
    const expected = [dino1, dino2, dino4];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  })

  it('should return an object with the numbers of each dinosaur by diet type', function(){
    park.addDino(dino3);
    park.addDino(dino4);
    const expected = { 'carnivore': 2, 'herbivore': 1, 'omnivore': 1 };
    const actual = park.getDietTypes();
    assert.deepStrictEqual(actual, expected);
  })
});
