//console.log('how much cpu before' + Game.cpu.getUsed());
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleMiner = require('role.miner');
var roleCarrier  = require('role.carrier');
var spawnUnits = require('spawn.units');
var roleMilitia = require('role.militia');
var roleTest = require('role.test');
//console.log('how much cpu after initialisation' + Game.cpu.getUsed());

// To DO: get a dedicated repairer to optimize workflow
// optimize turrets
// Build transporter
// optimize miner by only saving the objectID
// military units
// take over my enemy
// switch statement going up to 60 for the timer
// switch statement in Main as stateMachine
// track the cpu bursts... 1. UnitSpawner   2.
// pick up objects from the ground

// FIX THE MINER ASAP!!!

module.exports.loop = function () {
    for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }
        
    //console.log('how much cpu before stopwatch++' + Game.cpu.getUsed()); 
    Memory.stopWatch++;
    //console.log('how much cpu before timer' + Game.cpu.getUsed()); 
    if(Memory.stopWatch>10){
        spawnUnits.run();
        Memory.stopWatch = 0;
    }

    //console.log('how much cpu before tower' + Game.cpu.getUsed()); 
    var tower = Game.getObjectById('5834082dea7a45990a7d7e73');
    if(tower) {
        
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < ((structure.hitsMax > 500000) ? 300 : structure.hitsMax)
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }
    }
    //console.log('how much cpu after tower' + Game.cpu.getUsed()); 
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        if(creep.memory.role == 'carrier') {
            roleCarrier.run(creep);
        }
        if(creep.memory.role == 'militia') {
            roleMilitia.run(creep);
        }
    }
    
    //roleTest.run(creep);
    
    
    
    
    
    //console.log('how much cpu after roles' + Game.cpu.getUsed());
}