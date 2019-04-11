Color the square randomly and drag it
===

```JavaScript
Define the various values of sprit

  var sprite = new THREE.Sprite( new THREE.SpriteMaterial( { color: '#69f' } ) );
  sprite.position.set( 6, 5, 5 );
  sprite.scale.set( 2, 5, 1 );
  group.add( sprite );
```

```JavaScript
You can drag an object with the mouse and cause it to change color when the mouse is pressed

function onDocumentMouseDown( event ) {
  event.preventDefault();
  if ( selectedObject ) {
    selectedObject.material.color.set( Math.random()*0xffffff );
    selectedObject = null;
  }

  var intersects = getIntersects( event.layerX, event.layerY );
  if ( intersects.length > 0 ) {
    var res = intersects.filter( function ( res ) {
      return res && res.object;
    } )[ 0 ];
    if ( res && res.object ) {
      selectedObject = res.object;
      selectedObject.material.color.set( '#f55' );
      console.log(selectedObject.position);
    }
  }
}

function getIntersects( x, y ) {
  x = ( x / window.innerWidth ) * 2 - 1;
  y = - ( y / window.innerHeight ) * 2 + 1;
  mouseVector.set( x, y, 0.5 );
  raycaster.setFromCamera( mouseVector, camera );
  return raycaster.intersectObject( group, true );
}
```
