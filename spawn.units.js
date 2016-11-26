var spawnUnits = {

    /** @param {Creep} creep **/
    run: function() {
        
        var maxUnit = Memory.maxUnits;

        if(true){
            var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
            var harvSourceZero = _.filter(harvesters, (creep) => creep.memory.targetsource == 0);
            var harvSourceOne = _.filter(harvesters, (creep) => creep.memory.targetsource == 1);
            
            if(harvesters.length < 2) {
                if(harvSourceZero.length <= 1){
                    var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'harvester', targetsource: 0});
                    console.log('Spawning new harvester: ' + newName);
                }else{
                    var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'harvester', targetsource: 1});
                    console.log('Spawning new harvester: ' + newName);
                }
            }
        
            var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
            if(builders.length < 1) {
                var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder'});
                console.log('Spawning new builder: ' + newName);
            }
        
            var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
            if(upgraders.length < 4) {
                var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', targetsource: 1});
                console.log('Spawning new upgrader: ' + newName);
            }
            /*
            var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
            if(miners.length < 0) {
                var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'miner'});
                console.log('Spawning new miner: ' + newName);
            }*/
            
            var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
            var mineSourceZero = _.filter(miners, (creep) => creep.memory.targetsource == 0);
            if(miners.length < 2) {
                if(mineSourceZero.length < 1){
                    var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'miner' , targetsource: 0});
                    console.log('Spawning new miner: ' + newName);
                }else{
                    var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'miner', targetsource: 1});
                    console.log('Spawning new miner: ' + newName);
                }
            }
            
            var carriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier');
            if(carriers.length < 3) {
                var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'carrier'});
                console.log('Spawning new carrier: ' + newName);
            }
            
            var militias = _.filter(Game.creeps, (creep) => creep.memory.role == 'militia');
            if(militias.length < 0) {
                var newName = Game.spawns['Spawn1'].createCreep([ATTACK,ATTACK,ATTACK,CARRY,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH], undefined, {role: 'militia'});
                console.log('Spawning new militia: ' + newName);
            }
            var militias = _.filter(Game.creeps, (creep) => (creep.memory.role == 'militia' && creep.memory.target == 'W19S64'));
            if(militias.length < 0) {
                var newName = Game.spawns['Spawn1'].createCreep([ATTACK,ATTACK,ATTACK,CARRY,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH], undefined, {role: 'militia', target:'W19S64'});
                console.log('Spawning new militia: ' + newName);
            }
        }
    }
};
//Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'miner'});
//Game.spawns['Spawn1'].createCreep([ATTACK,ATTACK,ATTACK,ATTACK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'militia', target:'W19S63'});
module.exports = spawnUnits;