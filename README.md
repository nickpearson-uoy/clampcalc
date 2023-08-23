# clampcalc

Generate CSS clamp values to transition between two sizes at specific viewport widths.

## Wut?

So you know [`clamp`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp), right? Give it a minimum size, a maximum size plus a preferred size and it'll use the preferred size where it can, limiting the size to the minimum and maximum values you give it.

It's a fab way to scale text or spacing (or anything else) based on the width of the viewport but without going too small on tiny devices or too big on big ol' desktop monitors. What `clamp` doesn't do is let you specify at what viewport widths you want the size to be at the minimum and maximum. Clampcalc lets you do that.

⚠ **Caveat:** clampcalc does everything in `em`.

Explanatory ASCII-art graph:

```
Size (em)
 ↑
 ¦                  — — — — — — — — Us
 ¦                /·
 ¦             /   ·
 ¦          /      ·
 ¦— — — — —  ·  ·  ·  ·  ·  ·  ·  · Ls
 ¦         ·       ·
-¦--------------------------------> Viewport width (em)
           ·       ·
          Lvw     Uvw
```

| Variable | Description                  |
|----------|------------------------------|
| Ls       | Size at lower viewport width |
| Us       | Size at upper viewport width |
| Lvw      | Lower viewport width         |
| Uvw      | Upper viewport width         |

## Usage

### Online

[https://clampcalc.netlify.app](https://clampcalc.netlify.app)

For one-offs or infrequent use - pop in your paramters and copy/paste your `clamp` value.

### In your own project

⚠ Clampcalc isn't published on npm right now but I promise it will if anyone asks for it. In the meantime, here's what it would look like.

Using npm:

```
$ npm install clampcalc --save
```
In your code:

```
var clampcalc = require( 'clampcalc' );

console.log( clampcalc( 2 , 20 , 6 , 80 ) );

// Output: clamp( 2em , calc( 6.66vw + 0.66em ) , 6em )

```
