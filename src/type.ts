let isReady: boolean = false;

/* Boolean vs boolean*/
// let isOk: Boolean = true;
let isOk: Boolean = new Boolean(true);

isOk = isReady;

isReady = isOk; // Failed.

/* undefined & null are subtypes of all other types. */
let isReady2: boolean = null;
let isReady3: boolean | null = null; // strictNullChecks: true

