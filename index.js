
// --------------------------------------------------

function clampcalc( Ls , Lvw , Us , Uvw )
{
	var a = ( 100 * ( Us - Ls ) ) / ( Uvw - Lvw );
	var b = ( ( Lvw * Us ) - ( Uvw * Ls ) ) / ( Lvw - Uvw );

	return `clamp( ${ Ls }em , calc( ${ a }vw + ${ b }em ) , ${ Us }em )`;
}

// --------------------------------------------------

module.exports = clampcalc;

// --------------------------------------------------
