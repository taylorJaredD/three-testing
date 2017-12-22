// var THREE = require('three')

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
  // change the background color of the scene
  renderer.setClearColor(0xfffafa, 1);
	document.body.appendChild( renderer.domElement );

var stoneTexture = new THREE.TextureLoader().load( 'stone.jpg');
var geometry = new THREE.BoxBufferGeometry( 2, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 'grey' } );
var cube = new THREE.Mesh( geometry, material );
var cube2 = cube.clone()
var cube3 = cube.clone()

// Blocks = []
// for (var i = 0; i <= 12; i++) {
//   Blocks[i] = new THREE.Mesh( geometry, material)
//   Blocks[i].position.x = ([i] * 2)
//   Blocks[i].position.y = 1.5
//   var pivot = new THREE.Object3D();
//   pivot.add( Blocks[i]);
//   // geometry.translate( -[i]/2, 0, 0 );
//   // Blocks[i].rotateX(30)
//   scene.add(pivot)
// }
	scene.add( cube, cube2, cube3 );

	camera.position.z = 10;

// var animate = function () {
//   // similar to setInterval but this pauses the animation when the browser is not active
// 	requestAnimationFrame( animate );
//
//   // sets the speed of the animation
// 	cube.rotation.x += 0.025;
// 	cube.rotation.y += 0.025	;
  cube.rotation.x = 0.5
  cube2.position.x = 2
  cube2.rotation.x = 0.5
  cube2.rotation.y = 0.25
  cube3.rotation.x = 0.5
  cube3.rotation.y = -0.25
  cube3.position.x = -2
  renderer.render(scene, camera);
// };
//
// animate();
