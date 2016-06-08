import THREE from 'three';
import KEY from 'keymaster';

let speed = 10;

export function create () {

  let geometry = new THREE.CircleGeometry(200, 16);
  let material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });

  let mesh = new THREE.Mesh(geometry, material);

  return mesh;
}

export function inputs (player) {
  if (KEY.isPressed('W')) {
    player.position.y += speed;
  }

  if (KEY.isPressed('S')) {
    player.position.y -= speed;
  }

  if (KEY.isPressed('A')) {
    player.position.x -= speed;
  }

  if (KEY.isPressed('D')) {
    player.position.x += speed;
  }
}
