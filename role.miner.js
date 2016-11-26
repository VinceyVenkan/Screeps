var roleMiner = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.spawning){return;} // you can put this after the if.foundPlace for optimisation
        
        if(!creep.memory.foundplace){
            if(!creep.memory.sourceToMine || creep.memory.sourceToMine == null){
                //var tempLocation = creep.pos.findClosestByPath(FIND_SOURCES, {filter: (s) => s.pos.findInRange(FIND_MY_CREEPS, 1, {filter: (c) => c.memory.role == 'miner' && c.name != creep.name})[0] == undefined});
                /*  // this part u need to use ------------------------------------ when you know how to decrease workers count
                var thisRoomID = creep.room.name;
                mem = Memory.rooms;
                
                for(var name in mem[thisRoomID].sources){
                    var mine = mem[thisRoomID].sources[name];
                    if(mem[thisRoomID].sources[name].workers < 2){
                        var availibleSource = name;
                        Memory.rooms[thisRoomID].sources[name].workers++;
                        break;
                    }
                }*/
                var thisRoomID = creep.room.name;
                
                if(creep.memory.targetsource == 0){
                    availibleSource = '57ef9d7686f108ae6e60dc9d';
                }else{
                    availibleSource = '57ef9d7686f108ae6e60dc9f';
                }
                
                if(availibleSource){
                    creep.memory.sourceToMine = availibleSource;
                }
                var tempLocation = Game.getObjectById(availibleSource);
                creep.memory.targetStorage = tempLocation.pos.findClosestByRange(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_CONTAINER)}}).id;
                return;
            }
            if(!creep.memory.path){
                creep.memory.path = creep.pos.findPathTo(Game.getObjectById(creep.memory.sourceToMine));
                return;
            }
            //if(creep.harvest(Game.getObjectById(creep.memory.sourceToMine)) == (ERR_NOT_IN_RANGE || ERR_NOT_ENOUGH_RESOURCES)) {  // if error_no_path, dan volgende tick opniew kijken
            if(creep.moveByPath(creep.memory.path) == ERR_NO_PATH){
                 creep.memory.path.remove;
                 return;
            }
            //}
            else{
                if(creep.memory.sourceToMine!=null){ // dit kan weg eigenlijk
                    if(creep.harvest(Game.getObjectById(creep.memory.sourceToMine) != ERR_NOT_IN_RANGE)){
                        creep.memory.foundplace = true;
                    }
                }
            }
        }else{ // This part will play when it found his place to mine
            if(creep.carry.energy < creep.carryCapacity){
                //creep.harvest(Game.getObjectById(creep.memory.sourceToMine));
                if(creep.harvest(Game.getObjectById(creep.memory.sourceToMine)) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Game.getObjectById(creep.memory.sourceToMine));
            }
            }else{
                if(creep.transfer(Game.getObjectById(creep.memory.targetStorage), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Game.getObjectById(creep.memory.targetStorage));
                }
            }
        }
    }
};

module.exports = roleMiner;