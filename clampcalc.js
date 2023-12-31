
function clampcalc( Ls , Lvw , Us , Uvw )
{
	/*
		Ls = Size at lower viewport width
		Lvw = Lower viewport width
		Us = Size at upper viewport width
		Uvw = Upper viewport width

		⚠ All values are in `em`s
	*/

	var a = ( 100 * ( Us - Ls ) ) / ( Uvw - Lvw );
	var b = ( ( Lvw * Us ) - ( Uvw * Ls ) ) / ( Lvw - Uvw );

	return `clamp( ${ Ls }em , calc( ${ a }vw + ${ b }em ) , ${ Us }em )`;
}

module.exports = clampcalc;
