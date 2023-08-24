# clampcalc

Generate CSS clamp values to transition between two sizes at specific viewport widths.

Check out the [online calculator](https://clampcalc.netlify.app) and the [CodePen demo](https://codepen.io/nickpearson-uoy/pen/oNQdzmp).

## Wut?


So you know [`clamp`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp), right? Give it a minimum size, a maximum size plus a preferred size and it'll use the preferred size where it can, limiting the size to the minimum and maximum values you give it. Cool 😎.

It's a fab way to scale text or spacing (or anything else) based on the width of the viewport but without going too small on tiny devices or too big on big ol' desktop monitors. What `clamp` doesn't explictly do is let you specify at what viewport widths you want the size to be at the minimum and maximum. Clampcalc's purpose is to let you do just that.

**Caveat:** Clampcalc does everything in `em`.

### Explanatory ASCII-art graph:

```
Size
 ↑
 ¦                  — — — — — — — — Us
 ¦                /·
 ¦             /   ·
 ¦          /      ·
 ¦— — — — —  ·  ·  ·  ·  ·  ·  ·  · Ls
 ¦         ·       ·
-¦--------------------------------> Viewport width
           ·       ·
          Lvw     Uvw
```

&uarr; The computed value of a Clampcalc-generated `clamp` as a function of viewport width.

| Variable | Description                  |
|----------|------------------------------|
| Ls       | Size at lower viewport width |
| Us       | Size at upper viewport width |
| Lvw      | Lower viewport width         |
| Uvw      | Upper viewport width         |

## Usage

### Online

[https://clampcalc.netlify.app](https://clampcalc.netlify.app): for one-offs or infrequent use - pop in your paramters and copy/paste your `clamp` value.

### In your own project

Clampcalc isn't published on npm right now but I promise it will be if there's any significant demand for it.

In the meantime, you can grab the [JavaScript](clampcalc.js) or [Sass](clampcalc.scss) files containing the `clampcalc` function from this repo and copy them into your project.

#### JavaScript

```
element.style.fontSize = clampcalc( 2 , 20 , 6 , 80 );
```

#### Sass

```
.element
{
	font-size: clampcalc( 2 , 20 , 6 , 80 );
}
```
