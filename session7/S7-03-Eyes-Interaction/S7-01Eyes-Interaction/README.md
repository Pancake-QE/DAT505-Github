Move the eyes in the same direction
===
```JavaScript
Define the position and size of mesh

		for ( var j = 0; j < 3; j ++ ) {
			uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
			uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
		}
	}
	var scale = (Math.random() * -2) +1;
	 mesh = new THREE.Mesh( geometry, material );
	var  mesh = new THREE.Mesh( geometry, material );

	mesh.position.x = (Math.random() * -200)+100;
	mesh.position.y = (Math.random() * -70)+50;

	mesh.scale.x = scale;
	mesh.scale.y = scale;
	mesh.scale.z = scale;
```

```JavaScript
Define the range and Angle of eye rotation

function render() {
	console.log(window.innerHeight)
	eyes.forEach(function(c, i) {

	eyes[i].rotation.x = mouseY/window.innerHeight*2;
	eyes[i].rotation.y = mouseX/window.innerWidth*2;});


	renderer.render( scene, camera );
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
	//mouseX = event.clientX - windowHalfX;
  mouseX = event.clientX;
  mouseY = event.clientY;
}
```
