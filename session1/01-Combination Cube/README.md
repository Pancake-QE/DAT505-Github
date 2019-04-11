This is a composite graph.
===


Create many mesh and Mesh consists of geometrys and materials

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

  ..........................many mesh
  
}
