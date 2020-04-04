/// The Skybox class
/**
 * @author David Infante, Jose Ariza
 * 
 */

class Skybox extends THREE.Object3D {

  constructor() {
    super();

    this.lenghtxz = 1000;
    this.heighty = 1000;

    this.skybox = null;

    var geometry = new THREE.BoxGeometry(this.lenghtxz, this.heighty, this.lenghtxz);


    const material = this._getMaterial('../assets/img/skybox/yokohoma/');


    this.skybox = new THREE.Mesh(geometry, material);

    this.skybox.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
    this.add(this.skybox);

  }



  _getMaterial(skyboxDir) {
    const loader = new THREE.TextureLoader();
    const pushMat = (image) => new THREE.MeshBasicMaterial({ map: loader.load(skyboxDir + image + ".jpg"), side: THREE.BackSide });

    return [
      pushMat('front'),
      pushMat('back'),
      pushMat('top'),
      pushMat('down'),
      pushMat('right'),
      pushMat('left')
    ];
  }

}
