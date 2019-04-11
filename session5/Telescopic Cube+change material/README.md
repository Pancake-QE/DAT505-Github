Random direction rotation, random map generation, elongation
===
```JavaScript
Map objects at random on a regular basis

if(x==-5 && y==-5){
 boxMaterial = new THREE.MeshBasicMaterial( {map: texture1} );
} else if (x==5 && y==5){
 boxMaterial = new THREE.MeshBasicMaterial( {map: texture2} );
} else {
 boxMaterial = new THREE.MeshBasicMaterial( {map: texture3} );
}
```

```JavaScript
 Define random value scale, rotation
 
            var rotValX =  (Math.random() * 0.05) - 0.025;
            var rotValX =  (Math.random() * 0.05) - 0.025;
            var scValX =  Math.random() ;
            var scValY =  Math.random() ;
            var scValZ =  Math.random() ;
```
