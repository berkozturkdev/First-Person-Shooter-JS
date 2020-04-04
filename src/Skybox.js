/// The Skybox class
/**
 * @author David Infante, Jose Ariza
 * 
 */

class Skybox extends THREE.Object3D {

  constructor() {
    super();

    this.lenghtxz = 1000;
    this.heighty = 500;

    this.skybox = null;

    var geometry = new THREE.BoxGeometry(this.lenghtxz, this.heighty, this.lenghtxz);

    var loader = new THREE.TextureLoader();

    var material = [];
    material.push(new THREE.MeshBasicMaterial({ map: loader.load("../assets/img/Skybox/ft.JPG"), side: THREE.BackSide }));
    material.push(new THREE.MeshBasicMaterial({ map: loader.load("../assets/img/Skybox/bk.JPG"), side: THREE.BackSide }));
    material.push(new THREE.MeshBasicMaterial({ map: loader.load("../assets/img/Skybox/up.JPG"), side: THREE.BackSide }));
    material.push(new THREE.MeshBasicMaterial({ map: loader.load("../assets/img/Skybox/dn.JPG"), side: THREE.BackSide }));
    material.push(new THREE.MeshBasicMaterial({ map: loader.load("../assets/img/Skybox/rt.JPG"), side: THREE.BackSide }));
    material.push(new THREE.MeshBasicMaterial({ map: loader.load("../assets/img/Skybox/lf.JPG"), side: THREE.BackSide }));

    this.skybox = new THREE.Mesh(geometry, material);

    this.skybox.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));

    this.add(this.skybox);
  }

}
