class Squad {
    constructor(defaultResources) {
      this.squad = [];
      this.combineResources=function(defaultResources){
          this.squad.push(defaultResources)
      }
      if(defaultResources){
      this.combineResources(defaultResources);
      }
    }
  }

Squad.prototype.isReadyToMove = function () {
    const distance = this.squad.reduce(function (calc, next) {
        return calc += next.distance
    }, 0);
    const maxDistance = this.squad.reduce(function (calc, next) {
        return calc += next.maxDistance
    }, 0);
    return (distance == maxDistance) ? 'Dont ready' : 'Ready';
};

Squad.prototype.isReadyToFight = function () {
    const health = this.squad.reduce(function (calc, next) {
        return calc += next.health
    }, 0);
    const maxHealth = this.squad.reduce(function (calc, next) {
        return calc += next.maxHealth
    }, 0);
    return (health >= maxHealth) ? 'Ready' : 'Dont ready!';
};

Squad.prototype.restore = function () {
    this.squad.forEach(function (item) {
            item.health = item.maxHealth;
            item.distance = item.maxDistance;
    })
};

Squad.prototype.getReadyToMoveResources = function () {
    return ((this.isReadyToMove()=='Ready')  && (this.isReadyToFight())=='Ready') ? 'All ready':'Dont ready';
}

Squad.prototype.clone = function () {
    return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
};

module.exports = Squad;