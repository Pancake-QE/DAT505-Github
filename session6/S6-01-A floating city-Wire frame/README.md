A floating city
===

```JavaScript

The material of the cube is defined as wireframe

  var material = new THREE.MeshPhongMaterial({overdraw: true, color: Math.random() * 0xFFFFFF, wireframe: true});
```

```JavaScript
Randomly generate buildings of different sizes and positions on the plane

for (var i = 0; i < 300; i++) {
    //Create geometry as a clone
    var building = new THREE.Mesh(geometry.clone());

    //Randomize position and scale of the buildings
    building.position.x = Math.floor( Math.random() * 200 - 100 ) * 4;
    building.position.y = Math.floor( Math.random() * 400 - 100 ) * 4;
    building.position.z = Math.floor( Math.random() * 200 - 100 ) * 4;
    building.scale.x  = Math.pow(Math.random(), 2) * 50 + 10;
    building.scale.y  = Math.pow(Math.random(), 3) * building.scale.x * 8 + 8;
    building.scale.z  = building.scale.x;

    //Merge all buildings to one model - cityGeometry
    THREE.GeometryUtils.merge(cityGeometry, building);
  }
```
