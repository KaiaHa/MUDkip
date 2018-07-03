// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

document.addEventListener("keydown", keyDownHandler);
//document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e)
{
  if (e.keyCode ==39) {rightPressed = true; goRight();}
  if (e.keyCode ==37) {leftPressed = true; goLeft();}
  if (e.keyCode ==38) {upPressed = true; goUp();}
  if (e.keyCode ==40) {downPressed = true; goDown();}
}

// function keyUpHandler(e)
// {
//   if (e.keyCode ==39) {rightPressed = false;}
//   if (e.keyCode ==37) {leftPressed = false;}
//   if (e.keyCode ==38) {upPressed = false;}
//   if (e.keyCode ==40) {downPressed = false;}
// }
