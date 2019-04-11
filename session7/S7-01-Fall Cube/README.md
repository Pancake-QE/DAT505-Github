Fall cube
===

```JavaScript
Randomly select the postfix JPG from 1-3 as the texture of mesh.
Mesh falls randomly from x and y axes within a certain range

  for (let i=0; i<cubesNum; i++){
		let randomValue = Math.random() * 0.5;
		speed.push(randomValue);

	let randomSelection = Math.round(Math.random()*2) + 1;
	
	texture = new THREE.TextureLoader().load( "texture/texture" +randomSelection+".jpg" );

	material = new THREE.MeshBasicMaterial( { map: texture} );

	mesh = new THREE.Mesh( geometry, material );
	mesh.position.y = ( Math.random() * 30) -10;
	mesh.position.x =( Math.random() * 30) -10;
  
	scene.add( mesh );
	cubes.push( mesh );
}
```

```JavaScript
Define the random speed and size position of cubes

  for (var i=0; i<cubesNum; i++){
	cubes[i].rotation.x += 0.03;
	cubes[i].rotation.y += 0.03;
	cubes[i].position.y -= speed[i];

	if (cubes[i].position.y <- 20){
		cubes[i].position.y = 35;
		cubes[i].position.x = (Math.random() * -40) +20;
		cubes[i].scale.x = (Math.random() * -3) +2;
		cubes[i].scale.y = (Math.random() * -3) +2;
		cubes[i].scale.z = (Math.random() * -3) +2;
	}

}
```
