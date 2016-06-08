import THREE from 'three';

export function create () {

  let geometry = new THREE.CircleGeometry(200, 16);
  let material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });

  let mesh = new THREE.Mesh(geometry, material);

  return mesh;
}
