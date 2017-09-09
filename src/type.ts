let isReady: boolean = false;

/* Boolean vs boolean*/
// let isOk: Boolean = true;
let isOk: Boolean = new Boolean(true);

isOk = isReady;

isReady = isOk; // Failed.
