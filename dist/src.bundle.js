/// The Map class
/**
 * @author David Infante, Jose Ariza
 * 
 */

class Map {

  constructor() {

    this.map_size = 0;
    this.map = [];

    var loader = new THREE.TextureLoader();
    var texturaMetal = loader.load("../assets/img/metal.jpg");
    var texturaBase = loader.load("../assets/img/piedras.jpg");

    var mat = Physijs.createMaterial(new THREE.MeshPhongMaterial({ map: texturaMetal }), 0, 0);
    var matBase = Physijs.createMaterial(new THREE.MeshPhongMaterial({ map: texturaBase }), 0, 0);

    // var start1 = new Physijs.BoxMesh(new THREE.BoxGeometry(200, 0.0, 200, 1, 1, 1), mat, 0);
    // start1.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
    // start1.receiveShadow = true;
    // start1.autoUpdateMatrix = false;
    // this.map.push(start1);
    // ++this.map_size;

    var enemies2 = new Physijs.BoxMesh(new THREE.BoxGeometry(200, 0.0, 400, 1, 1, 1), mat, 0);
    enemies2.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, -300));
    enemies2.receiveShadow = true;
    enemies2.autoUpdateMatrix = false;
    this.map.push(enemies2);
    ++this.map_size;

    var bullets3 = new Physijs.BoxMesh(new THREE.BoxGeometry(50, 0.0, 50, 1, 1, 1), mat, 0);
    bullets3.applyMatrix(new THREE.Matrix4().makeTranslation(0, -10, 0));
    bullets3.receiveShadow = false;
    bullets3.autoUpdateMatrix = false;
    this.map.push(bullets3);
    ++this.map_size;

    // var fenceS4 = new Physijs.BoxMesh(new THREE.BoxGeometry(220, 8, 20, 1, 1, 1), mat, 0);
    // fenceS4.applyMatrix(new THREE.Matrix4().makeTranslation(0, 2.5, 100));
    // fenceS4.receiveShadow = true;
    // fenceS4.autoUpdateMatrix = false;
    // this.map.push(fenceS4);
    // ++this.map_size;

    // var fenceE5 = new Physijs.BoxMesh(new THREE.BoxGeometry(20, 8, 200, 1, 1, 1), mat, 0);
    // fenceE5.applyMatrix(new THREE.Matrix4().makeTranslation(100, 2.5, 0));
    // fenceE5.receiveShadow = true;
    // fenceE5.autoUpdateMatrix = false;
    // this.map.push(fenceE5);
    // ++this.map_size;

    // var fenceW6 = new Physijs.BoxMesh(new THREE.BoxGeometry(20, 8, 200, 1, 1, 1), mat, 0);
    // fenceW6.applyMatrix(new THREE.Matrix4().makeTranslation(-100, 2.5, 0));
    // fenceW6.receiveShadow = true;
    // fenceW6.autoUpdateMatrix = false;
    // this.map.push(fenceW6);
    // ++this.map_size;

    // var fenceN7 = new Physijs.BoxMesh(new THREE.BoxGeometry(220, 4, 8, 1, 1, 1), mat, 0);
    // fenceN7.applyMatrix(new THREE.Matrix4().makeTranslation(0, 2.5, -96));
    // fenceN7.receiveShadow = true;
    // fenceN7.autoUpdateMatrix = false;
    // this.map.push(fenceN7);
    // ++this.map_size;

    // var mountain = new Physijs.CylinderMesh(new THREE.CylinderGeometry(50, 500, 50, 10, 10), matBase, 0);
    // mountain.applyMatrix(new THREE.Matrix4().makeTranslation(0, -40, -50));
    // mountain.receiveShadow = true;
    // mountain.autoUpdateMatrix = false;
    // this.map.push(mountain);
    // ++this.map_size;


    return this;
  }

  getMap(i) {
    return this.map[i];
  }

  getMapSize() {
    return this.map_size;
  }
}

/// The Enemies class
/**
 * @author David Infante, Jose Ariza
 * 
 */

class Enemies {

  constructor(scene, level) {

    this.enemies = [];
    this.countCollitions = [];
    this.direction = [];
    this.force = 0;
    this.init = true;
    this.countDead = 0;

    this.scene = scene;

    if (level == 1)
      this.force = 5;
    else if (level == 2)
      this.force = 10;
    else if (level == 3)
      this.force = 20;
    else if (level == 4)
      this.force = 30;
    else if (level == 5)
      this.force = 50;
    else if (level == 6)
      this.force = 70;
    else if (level == 7)
      this.force = 90;
    else if (level == 8)
      this.force = 100;
    else if (level == 9)
      this.force = 120;
    else
      this.force = 150;

    var loader = new THREE.TextureLoader();
    var diana = loader.load("../assets/img/diana.png");

    this.mat1 = Physijs.createMaterial(new THREE.MeshPhongMaterial({ map: diana }), 0, 0);
    this.mat2 = Physijs.createMaterial(new THREE.MeshPhongMaterial({ map: diana }), 0, 0);
    this.mat3 = Physijs.createMaterial(new THREE.MeshPhongMaterial({ map: diana }), 0, 0);
    this.mat4 = Physijs.createMaterial(new THREE.MeshPhongMaterial({ map: diana }), 0, 0);

    var objetivo1 = new Physijs.BoxMesh(new THREE.BoxGeometry(7.5, 10, 2.5, 1, 1, 1), this.mat1, 1);
    objetivo1.applyMatrix(new THREE.Matrix4().makeTranslation(100, 7, -150));
    objetivo1.receiveShadow = true;
    objetivo1.autoUpdateMatrix = false;
    this.countCollitions.push(0);
    this.direction.push("left");
    this.enemies.push(objetivo1);
    this.scene.add(objetivo1);
    this.addBulletListener(this.enemies.length - 1);

    var objetivo2 = new Physijs.BoxMesh(new THREE.BoxGeometry(7.5, 10, 2.5, 1, 1, 1), this.mat2, 1);
    objetivo2.applyMatrix(new THREE.Matrix4().makeTranslation(-100, 7, -250));
    objetivo2.receiveShadow = true;
    objetivo2.autoUpdateMatrix = false;
    this.countCollitions.push(0);
    this.direction.push("right");
    this.enemies.push(objetivo2);
    this.scene.add(objetivo2);
    this.addBulletListener(this.enemies.length - 1);

    var objetivo3 = new Physijs.BoxMesh(new THREE.BoxGeometry(7.5, 10, 2.5, 1, 1, 1), this.mat3, 1);
    objetivo3.applyMatrix(new THREE.Matrix4().makeTranslation(100, 7, -350));
    objetivo3.receiveShadow = true;
    objetivo3.autoUpdateMatrix = false;
    this.countCollitions.push(0);
    this.direction.push("left");
    this.enemies.push(objetivo3);
    this.scene.add(objetivo3);
    this.addBulletListener(this.enemies.length - 1);

    var objetivo4 = new Physijs.BoxMesh(new THREE.BoxGeometry(7.5, 10, 2.5, 1, 1, 1), this.mat4, 1);
    objetivo4.applyMatrix(new THREE.Matrix4().makeTranslation(-100, 7, -450));
    objetivo4.receiveShadow = true;
    objetivo4.autoUpdateMatrix = false;
    this.countCollitions.push(0);
    this.direction.push("right");
    this.enemies.push(objetivo4);
    this.scene.add(objetivo4);
    this.addBulletListener(this.enemies.length - 1);

    return this;
  }

  addBulletListener(i) {
    var that = this;
    this.enemies[i].addEventListener('collision', function (elOtroObjeto, velocidad, rotacion, normal) {
      if (that.countCollitions[i] == 1) {
        var sound = new Howl({
          src: ['../assets/sounds/death.mp3'], volume: 0.3
        });
        sound.play();
        scene.updateScore(10);
        that.countDead++;
        if (that.countDead == 4) {
          scene.level++;
          scene.newLevel();
        }
      }
      that.countCollitions[i]++;
    });
  }

  getEnemies(i) {
    return this.enemies[i];
  }

  getEnemiesSize() {
    return this.enemies.length;
  }

  animate() {
    for (var i = 0; i < this.enemies.length; ++i) {
      if (this.enemies[i].position.x >= 100 && this.direction[i] == "left") {
        this.enemies[i].applyCentralImpulse(new THREE.Vector3(-this.force, 0, 0));
        this.direction[i] = "right";
      }
      else if (this.enemies[i].position.x <= -100 && this.direction[i] == "right") {
        this.enemies[i].applyCentralImpulse(new THREE.Vector3(this.force, 0, 0));
        this.direction[i] = "left";
      }
    }
    if (this.init) {
      this.force *= 2;
      this.init = false;
    }

    //Force next level in case it didn't detect a collision
    if (this.enemies[0].position.z != -150 && this.enemies[1].position.z != -250 &&
      this.enemies[2].position.z != -350 && this.enemies[3].position.z != -450) {
      scene.level++;
      scene.newLevel();
    }
  }

}

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

    const geometry = new THREE.BoxGeometry(this.lenghtxz, this.heighty, this.lenghtxz);
    const material = this._getMaterial('../assets/img/skybox/classic/');


    this.skybox = new THREE.Mesh(geometry, material);

    this.skybox.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
    this.add(this.skybox);

  }

  _getMaterial(skyboxDir) {
    const loader = new THREE.TextureLoader();
    const newMaterial = (image) => new THREE.MeshBasicMaterial({ map: loader.load(skyboxDir + image + ".jpg"), side: THREE.BackSide });

    return [
      newMaterial('front'),
      newMaterial('back'),
      newMaterial('top'),
      newMaterial('down'),
      newMaterial('right'),
      newMaterial('left')
    ];
  }

}

/**
 * @author David Infante, Jose Ariza
 * 
 */

class Crosshair extends THREE.Object3D {

  constructor () {
    super();

    this.material = new THREE.LineBasicMaterial({ color: 0x23ff02 });

    this.xLenght = 0.0007;
    this.yLenght = 0.005;
    this.zLenght = 0.0;
    this.crosshairPos = 0.0075;

    this.crosshair = null;
    
    this.crosshair = this.createRoot();
    this.add (this.crosshair);
  }
  
  // It creates de tree's root
  createRoot() {
    var root = new THREE.Object3D();
    root.castShadow = false;
    root.autoUpdateMatrix = false;
    root.updateMatrix();
    root.add(this.createCrosshair("U"));
    root.add(this.createCrosshair("D"));
    root.add(this.createCrosshair("L"));
    root.add(this.createCrosshair("R"));
    return root;
  }

  // It creates one of the four crosshair parts
  createCrosshair(part) {
    var rectangle = new THREE.Mesh (new THREE.BoxGeometry (this.xLenght, this.yLenght, this.zLenght), this.material);

    rectangle.castShadow = false;
    rectangle.autoUpdateMatrix = false;
    
    switch (part) {
      case "U":
        rectangle.geometry.applyMatrix (new THREE.Matrix4().makeTranslation (0, this.crosshairPos, 0));
      break;
      case "D":
        rectangle = new THREE.Mesh (new THREE.BoxGeometry (this.xLenght, this.yLenght, this.zLenght), this.material);
        rectangle.geometry.applyMatrix (new THREE.Matrix4().makeTranslation (0, -this.crosshairPos, 0));
      break;
      case "L":
        rectangle = new THREE.Mesh (new THREE.BoxGeometry (this.yLenght, this.xLenght, this.zLenght), this.material);
        rectangle.geometry.applyMatrix (new THREE.Matrix4().makeTranslation (-this.crosshairPos, 0, 0));
      break;
      case "R":
        rectangle = new THREE.Mesh (new THREE.BoxGeometry (this.yLenght, this.xLenght, this.zLenght), this.material);
        rectangle.geometry.applyMatrix (new THREE.Matrix4().makeTranslation (this.crosshairPos, 0, 0));
      break;
    }

    rectangle.updateMatrix();

    return rectangle;
  }
  
}
/// The Avatar class
/**
 * @author David Infante, Jose Ariza
 * 
 */
class Avatar {

    constructor(camera, scene) {

        var mat = Physijs.createMaterial(new THREE.MeshPhongMaterial({ color: 0x000000 }), 1, 0);
        this.avatar = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), mat);
        this.avatar.material.transparent = true;
        this.avatar.material.opacity = 0.0;
        this.avatar.position.y = 2.5;
        this.avatar.__dirtyPosition = true;
        scene.add(this.avatar);
        this.camera = camera;
        this.controls = controls;
        this.activeWeapon = null;
        this.goingUp = true;
        this.recoil = true;
        this.shotgun = null;
        this.rifle = null;

        this.avatar.add(this.camera);
    }

    getPosition() {
        var pos = new THREE.Vector3();
        pos.x = this.avatar.position.x;
        pos.y = this.avatar.position.y;
        pos.z = this.avatar.position.z;
        return pos;
    }

    setInitialPosition() {
        this.avatar.position.set(0, 2.5, 0);
    }

    getActiveWeapon() {
        return this.activeWeapon;
    }

    jump() {
        if (this.goingUp) {
            if (this.avatar.position.y > 15) this.goingUp = false;
            else this.avatar.position.y += 0.5;
        } else {
            if (this.avatar.position.y >= 2 && this.avatar.position.y <= 2.5) {
                jumping = false;
                this.goingUp = true;
            } else this.avatar.position.y -= 0.5;
        }
    }

    updateControls() {
        controls.getObject().position.set(this.avatar.position.x, this.avatar.position.y + 5, this.avatar.position.z);
    }

    moveForward() {
        var target = this.camera.getWorldDirection();
        var nextPosition = target.x + this.avatar.position.x;
        this.avatar.translateX(target.x);
        nextPosition = target.z + this.avatar.position.z;
        this.avatar.translateZ(target.z);
    }

    moveBackward() {
        var target = this.camera.getWorldDirection();
        var nextPosition = -target.x + this.avatar.position.x;
        this.avatar.translateX(-target.x);
        nextPosition = -target.z + this.avatar.position.z;
        this.avatar.translateZ(-target.z);
    }

    moveLeft() {
        var target = this.camera.getWorldDirection();
        var nextPosition = target.z + this.avatar.position.x;
        this.avatar.translateX(target.z);
        nextPosition = -target.x + this.avatar.position.z;
        this.avatar.translateZ(-target.x);
    }

    moveRight() {
        var target = this.camera.getWorldDirection();
        var nextPosition = -target.z + this.avatar.position.x;
        this.avatar.translateX(-target.z);
        nextPosition = target.x + this.avatar.position.z;
        this.avatar.translateZ(target.x);
    }

    changeWeapon() {
        if (this.activeWeapon == 0) {
            this.rifle.material.transparent = true;
            this.rifle.material.opacity = 0.0;
            this.shotgun.material.transparent = false;
            this.shotgun.material.opacity = 1.0;
            this.activeWeapon = 1;
        } else if (this.activeWeapon == 1) {
            this.shotgun.material.transparent = true;
            this.shotgun.material.opacity = 0.0;
            this.rifle.material.transparent = false;
            this.rifle.material.opacity = 1.0;
            this.activeWeapon = 0;
        }
    }

    animateWeapon() {
        if (this.activeWeapon == 0) {
            if (this.recoil) {
                if (this.rifle.rotation.x >= 0.2) this.recoil = false;
                else this.rifle.rotation.x += 0.1;
            } else {
                if (this.rifle.rotation.x >= 0 && this.rifle.rotation.x <= 0.1) {
                    disparando = false;
                    this.recoil = true;
                } else this.rifle.rotation.x -= 0.1;
            }
        } else if (this.activeWeapon == 1) {
            if (this.recoil) {
                if (this.shotgun.rotation.x >= 1.8) this.recoil = false;
                else this.shotgun.rotation.x += 0.1;
            } else {
                if (this.shotgun.rotation.x >= 0 && this.shotgun.rotation.x <= 0.1) {
                    disparando = false;
                    this.recoil = true;
                } else this.shotgun.rotation.x -= 0.1;
            }
        }
    }

    loadWeapons() {
        var thatCamera = this.camera;
        var that = this;

        var mtlLoader = new THREE.MTLLoader();
        var objLoader = new THREE.OBJLoader();
        var texture = null;

        mtlLoader.setPath("../assets/models/");
        mtlLoader.load("material.mtl", function (materials) {
            materials.preload();

            objLoader.setMaterials(materials);
            objLoader.setPath("../assets/models/");
            objLoader.load("m4a1_s.obj", function (object) {
                texture = THREE.ImageUtils.loadTexture('../assets/models/m4a1_stext.png');
                object.children[1].material = new THREE.MeshLambertMaterial({ map: texture });
                //m4a1_s
                object.children[1].position.set(0, 0, 0);
                object.children[1].scale.set(0.2, 0.2, 0.2);
                object.children[1].rotation.set(0.1, 3.4, 0);
                object.children[1].position.set(2, -0.8, -2);
                that.rifle = object.children[1];
                thatCamera.add(that.rifle);
                that.activeWeapon = 0;

            });
        });

        mtlLoader.setPath("../assets/models/");
        mtlLoader.load("material.mtl", function (materials) {
            materials.preload();

            objLoader.setMaterials(materials);
            objLoader.setPath("../assets/models/");
            objLoader.load("escopeta.obj", function (object) {
                texture = THREE.ImageUtils.loadTexture('../assets/models/escopetatext.png');
                object.children[0].material = new THREE.MeshLambertMaterial({ map: texture });

                //Escopeta
                object.children[0].position.set(0, 0, 0);
                object.children[0].scale.set(0.4, 0.4, 0.4);
                object.children[0].rotation.set(0.2, -1.2, 0);
                object.children[0].position.set(2, -1.4, -6);
                object.children[0].material.transparent = true;
                object.children[0].material.opacity = 0.0;
                that.shotgun = object.children[0];
                thatCamera.add(that.shotgun);

            });
        });

    }
}
// The flying object class
/**
 * @author David Infante, Jose Ariza
 * 
 */

class Bullets {

    constructor(maxBullets, scene, aMaterial) {
        this.material = aMaterial;
        this.objWidth = 1;
        this.maxBullets = maxBullets;
        this.bullets = [];
        this.launched = [];
        this.target = [];
        for (var i = 0; i < maxBullets; ++i) {
            this.launched[i] = false;
            this.target[i] = new THREE.Vector3(0, 0, 0);
            this.bullets[i] = this.createObject(i);
            scene.add(this.bullets[i]);
        }
    }

    getLaunched(i) {
        return this.launched[i];
    }

    setLaunched(i) {
        this.launched[i] = false;
    }

    getParameters(i) {
        var parameters = {
            x: this.bullets[i].position.x, y: this.bullets[i].position.y,
            z: this.bullets[i].position.z, radio: this.objWidth / 2
        };
        return parameters;
    }

    reload() {
        for (var i = 0; i < this.maxBullets; ++i) {
            this.bullets[i].remove();
            this.launched[i] = false;
            this.target[i] = new THREE.Vector3(0, 0, 0);
            this.bullets[i] = this.createObject(i);
            scene.add(this.bullets[i]);
        }
    }

    createObject(i) {
        var bullet = new Physijs.SphereMesh(new THREE.SphereGeometry(this.objWidth / 4, 20, 20), this.material, 50);
        bullet.position.set(i, -9.5, 0.0);
        bullet.castShadow = true;
        return bullet;
    }

    setInitPosition(i) {
        this.bullets[i].position.x = i;
        this.bullets[i].position.y = -9.5;
        this.bullets[i].position.z = 0;
        this.bullets[i].__dirtyPosition = true;
    }

    dispara(i, position, target, weapon) {
        this.target[i].set(target.x, target.y, target.z);
        this.bullets[i].position.set(position.x - target.x, position.y + 5, position.z - target.z);

        //Detect more collisions per second
        this.bullets[i].setCcdMotionThreshold(10);
        this.bullets[i].setCcdSweptSphereRadius(this.objWidth / 4);

        this.bullets[i].__dirtyPosition = true;
        this.launched[i] = true;

        var potencia = null;
        var sound = null;

        if (weapon == 0) {
            potencia = 35000;
            sound = new Howl({
                src: ['../assets/sounds/m4a1_s.mp3'], volume: 0.1
            });
        }
        else if (weapon == 1) {
            potencia = 50000;
            sound = new Howl({
                src: ['../assets/sounds/escopeta.mp3'], volume: 0.1
            });
        }

        var fuerza = new THREE.Vector3(this.target[i].x * potencia, this.target[i].y * potencia, this.target[i].z * potencia);
        this.bullets[i].applyCentralImpulse(fuerza);

        sound.play();
    }
}
/// The Model Facade class. The root node of the graph.
/**
 * @author David Infante, Jose Ariza
 */

class TheScene extends Physijs.Scene {

  constructor(renderer, aCamera) {

    super();
    this.setGravity(new THREE.Vector3(0, -50, 0));

    this.camera = aCamera;
    this.createCrosshair(renderer);

    this.avatar = null;
    this.map = null;
    this.enemies = null;
    this.skybox = null;
    this.Bullets = null;
    this.index = 0;
    this.maxBullets = 20;
    this.actualAmmo = 40; //Balas totales antes de acabar el juego
    this.score = 0;
    this.lastScore = 0;
    this.level = 1;

    this.createHUD();

    this.createAvatar();
    this.avatar.loadWeapons();
    this.place = this.createPlace();
    this.createBullets();
    this.createEnemies(this.level);


    this.ambientLight = null;
    this.spotLight = null;
    this.createLights();

    this.add(this.place);
  }

  createHUD() {
    var score = document.createElement('div');
    score.id = "score";
    score.style.position = 'absolute';
    score.style.width = 1;
    score.style.height = 1;
    score.innerHTML = "Puntuación: " + this.score;
    score.style.top = 50 + 'px';
    score.style.left = 50 + 'px';
    score.style.fontSize = 50 + 'px';
    score.style.color = "white";
    document.body.appendChild(score);

    var ammo = document.createElement('div');
    ammo.id = "ammo";
    ammo.style.position = 'absolute';
    ammo.style.width = 1;
    ammo.style.height = 1;
    ammo.innerHTML = "Munición: " + this.actualAmmo;
    ammo.style.top = 100 + 'px';
    ammo.style.left = 50 + 'px';
    ammo.style.fontSize = 50 + 'px';
    ammo.style.color = "white";
    document.body.appendChild(ammo);

    var level = document.createElement('div');
    level.id = "level";
    level.style.position = 'absolute';
    level.style.width = 1;
    level.style.height = 1;
    level.innerHTML = "Nivel: " + this.level;
    level.style.top = 150 + 'px';
    level.style.left = 50 + 'px';
    level.style.fontSize = 50 + 'px';
    level.style.color = "white";
    document.body.appendChild(level);
  }

  updateAmmo() {
    var text = document.getElementById("ammo");
    text.innerHTML = "Munición: " + this.actualAmmo;
  }

  updateScore(newScore) {
    var text = document.getElementById("score");
    this.score += newScore;
    text.innerHTML = "Puntuacion: " + this.score;
  }

  updateLevel() {
    var level = document.getElementById("level");
    level.innerHTML = "Nivel: " + this.level;
  }

  /// It creates the camera and adds it to the graph
  /**
   * @param renderer - The renderer associated with the camera
   */
  createCrosshair(renderer) {
    // Create the Crosshair
    var crosshair = new Crosshair();
    this.camera.add(crosshair);

    // Place it in the center
    var crosshairPercentX = 50;
    var crosshairPercentY = 50;
    var crosshairPositionX = (crosshairPercentX / 100) * 2 - 1;
    var crosshairPositionY = (crosshairPercentY / 100) * 2 - 1;
    crosshair.position.set((crosshairPercentX / 100) * 2 - 1, (crosshairPercentY / 100) * 2 - 1, -0.3);
  }

  dispara() {
    if (this.index >= this.maxBullets) {
      this.index = 0;
      this.bullets.reload();
    }
    if (!disparando) {
      this.bullets.dispara(this.index, this.avatar.getPosition(), this.camera.getWorldDirection(), this.avatar.getActiveWeapon());
      this.index++;
      this.actualAmmo--;
      this.updateAmmo();
    }
  }

  /// It creates lights and adds them to the graph
  createLights() {
    // add subtle ambient lighting
    this.ambientLight = new THREE.AmbientLight(0xccddee, 0.35);
    this.add(this.ambientLight);

    // add spotlight for the shadows
    this.spotLight = new THREE.SpotLight(0xffffff);
    this.spotLight.position.set(0, 500, 1000);
    this.spotLight.intensity = 1;
    this.spotLight.castShadow = true;
    // the shadow resolution
    this.spotLight.shadow.mapSize.width = 2048;
    this.spotLight.shadow.mapSize.height = 2048;
    this.add(this.spotLight);
  }

  /// It creates the place
  /**
   * @return place
   */
  createPlace() {
    var place = new THREE.Object3D();

    this.skybox = new Skybox();
    place.add(this.skybox);

    //Creates the map
    this.map = new Map();
    for (var i = 0; i < this.map.getMapSize(); ++i) {
      this.add(this.map.getMap(i));
    }

    return place;
  }

  /// It creates the avatar
  /**
   *
   */
  createAvatar() {
    this.avatar = new Avatar(this.camera, this);
  }

  /// It creates the bullets
  /**
   *
   */
  createBullets() {
    var loader = new THREE.TextureLoader();
    var textura = loader.load("../assets/img/bullettext.jpg");
    this.bullets = new Bullets(this.maxBullets, this, (new THREE.MeshPhongMaterial({ map: textura })));
  }

  /// It creates the enemies
  /**
   *
   */
  createEnemies() {
    this.enemies = new Enemies(this, this.level);
  }

  endGame() {
    enableControls = false;
    controls.enabled = false;

    moveForward = false;
    moveBackward = false;
    moveLeft = false;
    moveRight = false;
    jumping = false;

    blocker.style.display = 'block';
    instructions.style.display = '';
    instructions.style.fontSize = "50px";

    instructions.innerHTML = "Puntuacion total: " + this.score + ", pulsa la tecla P para jugar otra partida.";
  }

  /// 
  /**
   * @controls - The GUI information
   */
  animate() {
    this.simulate();

    if (moveForward) this.avatar.moveForward();
    if (moveBackward) this.avatar.moveBackward();
    if (moveLeft) this.avatar.moveLeft();
    if (moveRight) this.avatar.moveRight();

    if (jumping) {
      this.avatar.jump();
    }

    if (disparando) {
      this.avatar.animateWeapon();
    }

    this.avatar.updateControls();

    this.enemies.animate();

    if (this.actualAmmo == 0) {
      this.endGame();
    }
  }

  changeWeapon() {
    this.avatar.changeWeapon();
  }

  /// It returns the camera
  /**
   * @return The camera
   */
  getCamera() {
    return this.camera;
  }

  /// It returns the camera controls
  /**
   * @return The camera controls
   */
  getCameraControls() {
    return this.controls;
  }

  /// It updates the aspect ratio of the camera
  /**
   * @param anAspectRatio - The new aspect ratio for the camera
   */
  setCameraAspect(anAspectRatio) {
    this.camera.aspect = anAspectRatio;
    this.camera.updateProjectionMatrix();
  }

  newLevel() {
    this.avatar.setInitialPosition();

    if (this.score - this.lastScore != 40)
      this.score = this.lastScore + 40;

    this.updateLevel();

    for (var i = 0; i < this.enemies.getEnemiesSize(); ++i) {
      this.remove(this.enemies.getEnemies(i));
    }
    this.createEnemies();
    this.lastScore = this.score;
  }

  newGame() {
    blocker.style.display = 'none';
    enableControls = true;
    controls.enabled = true;
    this.avatar.setInitialPosition();
    this.actualAmmo = 40;
    this.updateAmmo();
    this.score = 0;
    this.updateScore(0);
    this.level = 1;
    this.updateLevel();

    for (var i = 0; i < this.enemies.getEnemiesSize(); ++i) {
      this.remove(this.enemies.getEnemies(i));
    }
    this.createEnemies();
  }

}


/// The Script
/**
 * @author David Infante, Jose Ariza
 * 
 */

/// Several functions, including the main

/// The scene graph
scene = null;

/// The object for the statistics
stats = null;

/// A boolean to know if the left button of the mouse is down
mouseDown = false;

renderer = null;

camera = null;
controls = null;
moveForward = false;
moveBackward = false;
moveLeft = false;
moveRight = false;
jumping = false;
disparando = false;
enableControls = true; //habilita la entrada de datos por ratón y teclado


/// It creates the GUI and, optionally, adds statistic information
/**
 * @param withStats - A boolean to show the statictics or not
 */
function createGUI (withStats) {
  var gui = new dat.GUI();

  if (withStats) stats = initStats();
}

/// It adds statistics information to a previously created Div
/**
 * @return The statistics object
 */
function initStats() {

  var stats = new Stats();

  stats.setMode(0); // 0: fps, 1: ms

  // Align top-left
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';

  $("#Stats-output").append( stats.domElement );

  return stats;
}

/// It shows a feed-back message for the user
/**
 * @param str - The message
 */
function setMessage (str) {
  document.getElementById ("Messages").innerHTML = "<h2>"+str+"</h2>";
}

/// It processes the clic-down of the mouse
/**
 * @param event - Mouse information
 */
function onMouseDown (event) {
  if (enableControls) {
    if(event.buttons == 1 && blocker.style.display == 'none') {
      scene.dispara();
      disparando = true;
    }
  }
}

/// It processes keyboard information
/**
 * @param event - Keyboard information
 */
function onKeyDown (event) {
  if (enableControls) {
    switch ( event.keyCode ) {

      case 38: // up
      case 87: // w
        moveForward = true;
        break;

      case 37: // left
      case 65: // a
        moveLeft = true;
        break;

      case 40: // down
      case 83: // s
        moveBackward = true;
        break;

      case 39: // right
      case 68: // d
        moveRight = true;
        break;

      case 32: // space
        jumping = true;
        break;

      case 81: // q
        if (!disparando) scene.changeWeapon();
        break;
    }
  }

  if (event.keyCode == 80 && enableControls == false) { // p
    scene.newGame();
  }
}

/// It processes keyboard information
/**
 * @param event - Keyboard information
 */
function onKeyUp (event) {
  if (enableControls) {
    switch( event.keyCode ) {
      case 38: // up
      case 87: // w
        moveForward = false;
        break;

      case 37: // left
      case 65: // a
        moveLeft = false;
        break;

      case 40: // down
      case 83: // s
        moveBackward = false;
        break;

      case 39: // right
      case 68: // d
        moveRight = false;
        break;
    }
  }
}


/// It processes the wheel rolling of the mouse
/**
 * @param event - Mouse information
 */
function onMouseWheel (event) {
  if (enableControls) {
    if (!disparando) scene.changeWeapon();
  }
}

/// It processes the window size changes
function onWindowResize () {
  scene.setCameraAspect (window.innerWidth / window.innerHeight);
  renderer.setSize (window.innerWidth, window.innerHeight);
}

/// It creates and configures the WebGL renderer
/**
 * @return The renderer
 */
function createRenderer () {
  var renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0xEEEEEE), 1.0);
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild( renderer.domElement );
  renderer.shadowMap.enabled = true;
  return renderer;
}

/// It renders every frame
function render() {
  requestAnimationFrame(render);

  stats.update();

  scene.animate();
  renderer.render(scene, scene.getCamera());
  scene.simulate();
}

/// The main function
$(function () {
  'use strict';
  Physijs.scripts.worker = '../libs/physijs_worker.js';
  Physijs.scripts.ammo = '../libs/ammo.js';


  var instructions = document.getElementById( 'instructions' );
  var title = document.getElementById('title');
  var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

  if ( havePointerLock ) {

    var element = document.body;

    var pointerlockchange = function ( event ) {

      if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {

        controlsEnabled = true;
        controls.enabled = true;

        enableControls = true;

        blocker.style.display = 'none';

      } else {


        blocker.style.display = 'block';

        instructions.style.display = '';

        //title.innerHTML = "PAUSA";
        instructions.style.fontSize = "50px";
        instructions.innerHTML = "PAUSA";

        enableControls = false;
        controls.enabled = false;

      }

    };

    var pointerlockerror = function ( event ) {

      instructions.style.display = '';

    };

    // Hook pointer lock state change events
    document.addEventListener( 'pointerlockchange', pointerlockchange, false );
    document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
    document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );

    document.addEventListener( 'pointerlockerror', pointerlockerror, false );
    document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
    document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

    instructions.addEventListener( 'click', function ( event ) {

      instructions.style.display = 'none';

      // Ask the browser to lock the pointer
      element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
      element.requestPointerLock();

    }, false );

  } else {

    instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';

  }

  var controlsEnabled = false;
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

  // create a render and set the size
  renderer = createRenderer();
  // add the output of the renderer to the html element
  $("#WebGL-output").append(renderer.domElement);
  // liseners
  window.addEventListener ("resize", onWindowResize);
  window.addEventListener ("mousedown", onMouseDown, true);
  window.addEventListener("keydown", onKeyDown, true);
  window.addEventListener("keyup", onKeyUp, true);
  window.addEventListener ("mousewheel", onMouseWheel, true);   // For Chrome an others
  window.addEventListener ("DOMMouseScroll", onMouseWheel, true); // For Firefox

  // create a scene, that will hold all our elements such as objects, cameras and lights.
  scene = new TheScene (renderer.domElement, camera);
  controls = new THREE.PointerLockControls (camera);
  scene.add( controls.getObject() );

  createGUI(true);

  render();
});
