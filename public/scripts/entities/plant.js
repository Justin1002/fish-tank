class Plant extends Denizen {

  constructor(options) {
    super(options);
    this.imageUri = '/images/fern_plant.png';
    this.position.y += this.height;

  }

  update(t) {
    // no physics for Starter
  }

}
