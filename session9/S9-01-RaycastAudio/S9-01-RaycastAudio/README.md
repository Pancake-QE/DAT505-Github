Replace the sound of the ship
===

```JavaScript
You can change the sound made by moving the mouse over an object by replacing the Diploship-Fly.wav

  if ( intersects.length > 0 ) {
    if ( INTERSECTED != intersects[ 0 ].object ) {
      if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
      INTERSECTED = intersects[ 0 ].object;
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      INTERSECTED.material.emissive.setHex( 0xff0000 );

      audioLoader.load( 'audio/Diploship-Fly.wav', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop( false );
        sound.setVolume( 0.5 );
        sound.play();
      });

    }
```
