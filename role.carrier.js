var roleUpgrader = require('role.upgrader');

var roleCarrier  = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // empties containers
        // puts energy in closest storage/extender/turret etc
        // if all is full, go upgrade
        
        //Set the main container to empty----

        
        // make a delicate pathfinder --------
        
        
        
        
        
        if(creep.memory.working == null){creep.memory.working = false;}
        
        if(creep.memory.working == false && creep.carry.energy == 0) {
            creep.memory.working = true;
        }
        else if (creep.memory.working == true && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = false;
        }
        if(creep.memory.working == true) {
            var Container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_CONTAINER
                                && s.store[RESOURCE_ENERGY] > creep.carryCapacity
            })
            
            //var Container = Game.getObjectById(creep.memory.sourceID);
            
            if(creep.withdraw(Container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Container);
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
            });
            var theStorage = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_STORAGE );
                }
            });
            if(targets.length > 0 && creep.carry.energy != 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }else{
                if(theStorage && creep.carry.energy != 0){
                    if(creep.transfer(theStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(theStorage);
                    }
                }
            }
        }
    }
};

module.exports = roleCarrier;