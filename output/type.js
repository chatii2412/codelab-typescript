"use strict";
var isReady = false;
/* Boolean vs boolean*/
// let isOk: Boolean = true;
var isOk = new Boolean(true);
isOk = isReady;
isReady = isOk; // Failed.
/* undefined & null are subtypes of all other types. */
var isReady2 = null;
var isReady3 = null; // strictNullChecks: true
