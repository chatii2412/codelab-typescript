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
/* array, tuple */
var array1 = [1];
var array2 = [1];
var array3 = [1];
var tuple = ["1", 2, "3", 4];
var t0 = tuple[0]; // type inferencable
