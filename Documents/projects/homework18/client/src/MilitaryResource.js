class MilitaryResource {
    constructor(type, health, distance) {
        this.type = type;
        this.health = this.maxHealth = health;
        this.distance = this.maxDistance = distance;
    }

}

    MilitaryResource.prototype.isReadyToMove=function() {
    return (this.distance>=this.maxDistance)? 'Dont ready' : 'Ready!';
};
    MilitaryResource.prototype.isReadyToFight=function() {
    return (this.health>=this.maxHealth)? 'Ready': 'Dont ready!';
};
    MilitaryResource.prototype.restore=function() {
    this.health=this.maxHealth;
    this.distance=this.maxDistance;
};
    MilitaryResource.prototype.clone=function() {
    return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
};

module.exports = MilitaryResource;