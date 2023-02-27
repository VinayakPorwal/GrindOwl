import * as THREE from "https://unpkg.com/three@0.120.1/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.120.1/examples/jsm/controls/OrbitControls.js";
import logo from "./images/earth.jpg";
import sky from "./images/sky.jpg";

const scene = new THREE.Scene();

//----------CAMERA-------------
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.setZ(25);
camera.position.setY(5);

const camhelper = new THREE.CameraHelper(camera);
// scene.add(camhelper);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("animemain"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//----------SHAPE------------
const Geometry = new THREE.SphereGeometry(10, 20, 10);
// const Geometry = new THREE.OctahedronGeometry(8, 1);
const texture = new THREE.TextureLoader().load(logo);
const Material = new THREE.MeshStandardMaterial({
  // map: texture,
  color: 0x00ffff,
  wireframe: true,
});
const sphere = new THREE.Mesh(Geometry, Material);
sphere.position.setX(0);
sphere.position.setY(0);
sphere.position.setZ(0);
scene.add(sphere);
const Geometry2 = new THREE.SphereGeometry(8, 100, 100);
// const Geometry = new THREE.OctahedronGeometry(8, 1);
const texture2 = new THREE.TextureLoader().load(logo);
const Material2 = new THREE.MeshStandardMaterial({
  map: texture2,
  // color: 0xfff0f,
  // wireframe: true,
});
const sphere2 = new THREE.Mesh(Geometry2, Material2);
sphere2.position.setX(0);
sphere2.position.setY(0);
sphere2.position.setZ(0);
scene.add(sphere2);
//
//
//
//----------LIGHT-------------
const light = new THREE.PointLight(0xffffff);
light.position.set(15, 15, 15);
scene.add(light);

const ambloght = new THREE.AmbientLight(0xffffff);
scene.add(ambloght);
//
//
//
//-----------LIGHT HELPER------------
const helper3 = new THREE.PointLightHelper(light);
// scene.add(helper3);
const gridhelp = new THREE.GridHelper(200, 50);
// scene.add(gridhelp);
//
//
//
//----------- STARS WITH RANDOM POSITIONING------------
function addstar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(350));

  star.position.set(x, y, z);
  scene.add(star);
}
// var rotation = new THREE.Matrix4().makeRotationZ(Math.PI / 2);
// var translation = new THREE.Matrix4().makeTranslation(0, 0, 2);
// var transformation = rotation.multiply(translation);
// sphere.applyMatrix(transformation);

Array(400).fill().forEach(addstar);

//-------BACKGROUND----------
const skytexture = new THREE.TextureLoader().load(sky);
// scene.background = skytexture;

// MOVE CAMERA ON SCROLL
// function moveCamera() {
//   const t = document.body.getBoundingClientRect().top;

//   camera.position.z = t * -0.01;
//   camera.position.x = t * -0.002;
//   camera.rotation.y = t * -0.002;
// }

// document.body.onscroll = moveCamera;
// moveCamera();

// ----------FREE MOVEMENT------------
const orbit = new OrbitControls(camera, renderer.domElement);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.z += 0.005;
  sphere2.rotation.y += 0.005;
  sphere2.rotation.x += 0.0005;

  orbit.update();
  window.addEventListener("resize", onWindowResize);

  renderer.render(scene, camera);
}

animate();
