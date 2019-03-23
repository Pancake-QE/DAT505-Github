//Global variables
var scene, camera, renderer;
var geometry, material, mesh;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

    var W = window.innerWidth,
        H = window.innerHeight;

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(90, W / H, .1, 800);
  camera.position.set(20, 120, 100);
  camera.lookAt(scene.position);

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#FF20FF");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  var material33 = new THREE.MeshNormalMaterial();

  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.BoxGeometry(40, 20, 20);
  material = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );
  mesh = new THREE.Mesh( geometry, material33 );
  mesh.position.z = -0;
  mesh.position.x = 0;


  // Add mesh to scene
  scene.add( mesh );

  geometry1 = new THREE.BoxGeometry(20, 40, 20);
  material1 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh1 = new THREE.Mesh( geometry1, material33 );
  mesh1.position.z = -0;
  mesh1.position.x = 0;
  scene.add( mesh1 );

  geometry2 = new THREE.BoxGeometry(40, 20, 20);
  material2 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh2 = new THREE.Mesh( geometry2, material );
  mesh2.position.z = 40;
  mesh2.position.x = 50;
  mesh2.position.y = -60;

  scene.add( mesh2 );

  geometry2 = new THREE.BoxGeometry(20, 40, 20);
  material2 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh2 = new THREE.Mesh( geometry2, material33 );
  mesh2.position.z = 40;
  mesh2.position.x = 60;
  mesh2.position.y = -50;

  scene.add( mesh2 );

  geometry21 = new THREE.BoxGeometry(20, 40, 40);
  material21 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh21 = new THREE.Mesh( geometry21, material );
  mesh21.position.z = 20;
  mesh21.position.x = 70;
  mesh21.position.y = -80;

  scene.add( mesh21 );

  geometry3 = new THREE.BoxGeometry(40, 20, 20);
  material3 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh3 = new THREE.Mesh( geometry3, material );
  mesh3.position.z = 40;
  mesh3.position.x = -60;
  mesh3.position.y = -60;

  scene.add( mesh3 );

  geometry4 = new THREE.BoxGeometry(20, 40, 20);
  material4 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh4 = new THREE.Mesh( geometry4, material33 );
  mesh4.position.z = 40;
  mesh4.position.x = -70;
  mesh4.position.y = -50;

  scene.add( mesh4 );

  geometry41 = new THREE.BoxGeometry(20, 20, 40);
  material41 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh41 = new THREE.Mesh( geometry41, material );
  mesh41.position.z = 30;
  mesh41.position.x = -70;
  mesh41.position.y = -50;

  scene.add( mesh41 );

  geometry5 = new THREE.BoxGeometry(20, 40, 20);
  material5 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh5 = new THREE.Mesh( geometry5, material33 );
  mesh5.position.z = -40;
  mesh5.position.x = -70;
  mesh5.position.y = -50;

  scene.add( mesh5 );

  geometry6 = new THREE.BoxGeometry(40, 20, 20);
  material6 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh6 = new THREE.Mesh( geometry6, material );
  mesh6.position.z = -40;
  mesh6.position.x = -60;
  mesh6.position.y = -60;

  scene.add( mesh6 );

  geometry5 = new THREE.BoxGeometry(20, 40, 20);
  material5 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh5 = new THREE.Mesh( geometry5, material33 );
  mesh5.position.z = -40;
  mesh5.position.x = -70;
  mesh5.position.y = -50;

  scene.add( mesh5 );

  geometry61 = new THREE.BoxGeometry(20, 20, 40);
  material61 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh61 = new THREE.Mesh( geometry61, material );
  mesh61.position.z = -30;
  mesh61.position.x = -70;
  mesh61.position.y = -60;

  scene.add( mesh61 );

  geometry7 = new THREE.BoxGeometry(40, 20, 20);
  material7 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh7 = new THREE.Mesh( geometry7, material );
  mesh7.position.z = -40;
  mesh7.position.x = 60;
  mesh7.position.y = -60;

  scene.add( mesh7 );

  geometry8 = new THREE.BoxGeometry(20, 40, 20);
  material8 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh8 = new THREE.Mesh( geometry8, material33 );
  mesh8.position.z = -40;
  mesh8.position.x = 70;
  mesh8.position.y = -50;

  scene.add( mesh8 );

  geometry81 = new THREE.BoxGeometry(20, 20, 40);
  material81 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh81 = new THREE.Mesh( geometry81, material );
  mesh81.position.z = -30;
  mesh81.position.x = 70;
  mesh81.position.y = -60;

  scene.add( mesh81 );

  geometry9 = new THREE.BoxGeometry(20, 40, 20);
  material9 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh9 = new THREE.Mesh( geometry9, material33 );
  mesh9.position.z = -80;
  mesh9.position.x = 70;
  mesh9.position.y = 50;

  scene.add( mesh9 );

  geometry10 = new THREE.BoxGeometry(40, 20, 20);
  material10 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh10 = new THREE.Mesh( geometry10, material );
  mesh10.position.z = -80;
  mesh10.position.x = 60;
  mesh10.position.y = 50;

  scene.add( mesh10 );

  geometry11 = new THREE.BoxGeometry(20, 40, 20);
  material11 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh11 = new THREE.Mesh( geometry11, material33 );
  mesh11.position.z = -80;
  mesh11.position.x = -70;
  mesh11.position.y = 50;

  scene.add( mesh11 );

  geometry12 = new THREE.BoxGeometry(40, 20, 20);
  material12 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh12 = new THREE.Mesh( geometry12, material );
  mesh12.position.z = -80;
  mesh12.position.x = -60;
  mesh12.position.y = 50;

  scene.add( mesh12 );

  geometry13 = new THREE.BoxGeometry(20, 40, 20);
  material13 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh13 = new THREE.Mesh( geometry13, material33 );
  mesh13.position.z = 30;
  mesh13.position.x = -70;
  mesh13.position.y = 50;

  scene.add( mesh13 );

  geometry14 = new THREE.BoxGeometry(40, 20, 20);
  material14 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh14 = new THREE.Mesh( geometry14, material );
  mesh14.position.z = 30;
  mesh14.position.x = -60;
  mesh14.position.y = 50;

  scene.add( mesh14 );

  geometry15 = new THREE.BoxGeometry(20, 40, 20);
  material15 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh15 = new THREE.Mesh( geometry15, material33 );
  mesh15.position.z = 30;
  mesh15.position.x = 70;
  mesh15.position.y = 50;

  scene.add( mesh15 );

  geometry15 = new THREE.BoxGeometry(40, 20, 20);
  material15 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh15 = new THREE.Mesh( geometry15, material );
  mesh15.position.z = 30;
  mesh15.position.x = 60;
  mesh15.position.y = 50;

  scene.add( mesh15 );

  geometry51 = new THREE.BoxGeometry(20, 20, 40);
  material51 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh51 = new THREE.Mesh( geometry51, material );
  mesh51.position.z = 20;
  mesh51.position.x = 70;
  mesh51.position.y = 50;

  scene.add( mesh51 );

  geometry61 = new THREE.BoxGeometry(20, 20, 40);
  material61 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh61 = new THREE.Mesh( geometry61, material );
  mesh61.position.z = 20;
  mesh61.position.x = -70;
  mesh61.position.y = 50;

  scene.add( mesh61 );

  geometry71 = new THREE.BoxGeometry(20, 20, 40);
  material71 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh71 = new THREE.Mesh( geometry71, material );
  mesh71.position.z = -60;
  mesh71.position.x = -70;
  mesh71.position.y = 50;

  scene.add( mesh71 );

  geometry81 = new THREE.BoxGeometry(20, 20, 40);
  material81 = new THREE.MeshBasicMaterial( { color: "#F000FF" } );
  mesh81 = new THREE.Mesh( geometry81, material );
  mesh81.position.z = -60;
  mesh81.position.x = 70;
  mesh81.position.y = 50;

  scene.add( mesh81 );

}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

//  mesh.rotation.x += 0.01; //Continuously rotate the mesh
//  mesh.rotation.y += 0.01;

//  mesh1.rotation.x += 0.01; //Continuously rotate the mesh
//  mesh1.rotation.y += 0.01;

  renderer.setClearColor("#003000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
