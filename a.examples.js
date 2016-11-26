/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('a.examples');
 * mod.thing == 'a thing'; // true
 */

module.exports = {

};

// var numberOfHarvesters = _.sum.(Game.creep, (c)) => c.memory.role == 'harvester');
// var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

/*
-------------------- Miner --------------------

var roleMiner = { 
    run: function(creep) { 
        var targets = creep.room.find(FIND_STRUCTURES, { filter: (structure) => { return (structure.structureType == STRUCTURE_CONTAINER) && (structure.store[RESOURCE_ENERGY] < structure.storeCapacity); 
            } 
        }); 
        if(targets.length > 0) { 
            if(creep.pos.getRangeTo(targets[0]) == 0) { 
                var source = creep.pos.findClosestByPath(FIND_SOURCES); 
                creep.harvest(source); } 
            else { 
                creep.moveTo(targets[0]); 
            }
        }
    }
};

------------------ PickUp ------------------------

var containers = creep.room.find(FIND_STRUCTURES, { filter: (structure) => { return (structure.structureType == STRUCTURE_CONTAINER) && (structure.store[RESOURCE_ENERGY] > 0); }
});
var source = creep.pos.findClosestByPath(containers);
    if(creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) { 
        creep.moveTo(source);
}


---------------- SET MEMORY FOR ROOMS ----------------------
           Source.prototype.memory = undefined;

for(var roomName in Game.rooms){//Loop through all rooms your creeps/structures are in
    var room = Game.rooms[roomName];
    if(!room.memory.sources){console.log('should not run');//If this room has no sources memory yet
        room.memory.sources = {}; //Add it
        var sources = room.find(FIND_SOURCES);//Find all sources in the current room
        for(var i in sources){
            var source = sources[i];
            source.memory = room.memory.sources[source.id] = {}; //Create a new empty memory object for this source
            //Now you can do anything you want to do with this source
            //for example you could add a worker counter:
            source.memory.workers = 0;
        }
    }else{ //The memory already exists so lets add a shortcut to the sources its memory
        var sources = room.find(FIND_SOURCES);//Find all sources in the current room
        for(var i in sources){
            var source = sources[i];
            source.memory = this.memory.sources[source.id]; //Set the shortcut
        }
    }
}


var source = creep.pos.findClosest(FIND_SOURCES, {
    filter: function(source){
        return source.memory.workers < 2; //Access this sources memory and if this source has less then 2 workers return this source
    }
});
if(source){ //If a source was found
    creep.moveTo(source);
    creep.harvest(source);

    /* You should also increment the sources workers amount somehow, 
     * so the code above will know that another worker is working here. 
     * Be aware of the fact that it should only be increased once!
     * But I will leave that to the reader.
     */
}




*/