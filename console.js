/** Let's get started
 *
 * shortcut to open the browser dev tools: opt cmd j
 */

/** We've seen error, but often this is wrapped around some if condition */
console.error("Oh no, I'm stuck in vim!!'");

/** Let's bundle that together */
// if falsey, then log error
console.assert(false, "Oh no, I'm stuck in vim!!'");


console.assert(true, "Everything is okay! no news is good news.'");

/** We are used to using object shorthand notation, but here is another way! */

const obj = {
  key1: "aha, a key!",
  key2: "ooo, another one..",
  key3: "again?!",
};

console.log({ obj });
console.table(obj);

/** Want to compare objects easily? */
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);

/** Want beautiful code? add %c at the start for ✨beauty✨ */
console.log("%c I <3 TypeScript", "color: pink; font-weight: bold;");
console.log("%c I <3 React", "color: red; font-weight: bold;");

/** Do you feel blind sometimes and just can't see your logs?
 *
 * Maybe you added a lot of !!!!!!!! to grab your attention...
 * Fret no more, you won't ever miss this line of code.
*/
console.log(
  "%c I <3 Coding ",
  "color: blue; font-weight: bold; background-color: black; font-size: 48px;"
);

/** Time to organize! Let's group all of that data we don't always wanna see */
console.group("URL Info"); //<-- Not collapsed right away
console.log("Protocol", window.location.protocol);
console.log("Host", window.origin);
console.log("Path", window.location.pathname);

console.groupCollapsed("Meta"); // <-- start's collapsed!
console.log("Protocol", window.location.protocol);
console.log("Host", window.origin);
console.log("Path", window.location.pathname);

console.groupEnd();
console.groupEnd();

/** Want to keep track of just how many times it was called? */
console.count("unique label");
console.count("unique label");
console.count("unique label");
console.count("not label");

/** keep track of time lapsed */
console.time("My loader!");

console.timeLog("My loader!");
console.timeLog("My loader!");

console.timeEnd("My loader!"); // <-- stops timer and counter

/** Create your own call stack log */
function outer() {

  function inner() {
    console.trace("Who called me?");
  }

  inner();
} // <-- will be anonymous if called in the browser console
// since that is part of the call stack!

function reallyOut() {
  function outer() {

    function inner() {
      console.trace("Who called me?");
    }

    inner();
  }

  outer();
}

/** Think you're gonna forget what I just said? try hovering over the method! */

/** Let's look at a cool document tool */

document.designMode = "on";
// Select text and start editted on any website!

/** Click on flexbox and box-shadow
 * Under elements -> styles tab
*/

/** Copying a selector or styles
 *
 * Right click on an html element,
 * Copy -> [Copy selector, Copy styles]
 *
 * Shortcut for document query selectory -> $('add string selector here')
*/

/**
 * Press esc to open up a console drawer
 *
 * Can see Animations with the 3 dots
 *
 * Can see Rendering
 * -> Paint Flashing
 * " draws green squares around parts of the page that are currently undergoing a paint. "
 * Look at the scroll bar.
 */