var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity && !creep.memory.building) {
            var sources = creep.room.find(FIND_SOURCES);
            var targetsource = creep.memory.targetsource;
            if(creep.harvest(sources[targetsource]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[targetsource]);
            }
            else{
                if(creep.harvest(sources[targetsource]) ==ERR_NOT_ENOUGH_RESOURCES){
                    var theStorage = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_STORAGE );
                        }
                    });
                    if(creep.withdraw(theStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(theStorage);
                    }
                }
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_TOWER ||
                                structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0 && creep.carry.energy != 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }else{
                roleUpgrader.run(creep);
            }
        }
    }
};

module.exports = roleHarvester;