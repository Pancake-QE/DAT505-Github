Replace the model spaceship with a bird
===

```JavaScript


  for (var i=0; i<50; i++){
Generate less than 50 models,The model is obtained by loading these two files,birds.mtl and bird.obj

	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load("birds.mtl", function(materials){

		materials.preload();

    var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);

  		objLoader.load("bird.obj", function(mesh){
  			mesh.traverse(function(node){
  				if( node instanceof THREE.Mesh ){
  					node.castShadow = true;
  					node.receiveShadow = true;
  				}
  			});
        ```
