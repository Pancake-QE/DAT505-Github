

` ``JavaScript
Materials that define different attributes

var material = new THREE.MeshPhysicalMaterial({
  color: '#D2BE82',
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});

var material2 = new THREE.MeshNormalMaterial();



` `` JavaScript
Let the mesh rotate on the x and y axes

var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+1; //Continuously rotate the mesh
  mesh1.rotation.y = rot+1;

  mesh2.rotation.x = rot; //Continuously rotate the mesh
  mesh2.rotation.y = rot;
    renderer.render(scene, camera);
};

