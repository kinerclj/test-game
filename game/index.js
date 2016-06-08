import THREE from 'three';
import KEY from 'keymaster';

import * as CameraEntity from './entities/camera';
import * as WorldEntity from './entities/world';
import * as PlayerEntity from './entities/player';

let scene, renderer, camera, world, player;

init();
animate();

function init() {

  scene = new THREE.Scene();
  camera = CameraEntity.create();
  world = WorldEntity.create();
  player = PlayerEntity.create();

  scene.add(world);
  scene.add(player);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
}

function animate() {

  requestAnimationFrame(animate);

  PlayerEntity.inputs(player);

  renderer.render(scene, camera);
}
