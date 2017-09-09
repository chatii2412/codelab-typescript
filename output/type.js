"use strict";
var isReady = false;
/* Boolean vs boolean*/
// let isOk: Boolean = true;
var isOk = new Boolean(true);
isOk = isReady;
isReady = isOk; // Failed.
