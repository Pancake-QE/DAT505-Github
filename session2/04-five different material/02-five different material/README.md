Five spinning balls with different textures
===

```JavaScript
add Texture and the picture is located in textures folder

var texture = new THREE.TextureLoader().load('textures/roughness_map.jpg');
var material2 = new THREE.MeshBasicMaterial({ map: texture});
```

```JavaScript
Defines the speed and direction of rotation of an object

var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+1; 
  mesh1.rotation.y = rot+1;

  renderer.render(scene, camera);
};
```
