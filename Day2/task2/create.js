const name = require( 'fs' );
name.writeFile( "example.js", "first file", (err) => {
    if (err) throw err;
} )