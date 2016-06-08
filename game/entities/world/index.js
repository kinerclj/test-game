import THREE from 'three';

export function create () {

  let geometry = new THREE.PlaneBufferGeometry(10000, 10000);
  let material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
  });

  let mesh = new THREE.Mesh(geometry, material);

  return mesh;
}
