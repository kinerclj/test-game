import THREE from 'three';

export function create () {
  let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );

  camera.position.z = 1000;

  return camera;
}
