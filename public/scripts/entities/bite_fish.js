class BiteFish extends Fish {

  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/bite-fish.gif'; // Set the image
  }

  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }

    let closeObjs = this.tank.getProximateDenizens(this.position, 50);
    let closeFish = closeObjs.filter((obj) => (!(obj instanceof Plant) && !(obj instanceof BiteFish) && !(obj instanceof Starter) && !(obj instanceof Seed)))
    if (closeFish.length > 0) {
      closeFish[0].kill();
  }
}

}
