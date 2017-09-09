let isReady: boolean = false;

/* Boolean vs boolean*/
// let isOk: Boolean = true;
let isOk: Boolean = new Boolean(true);

isOk = isReady;

isReady = isOk; // Failed.

/* undefined & null are subtypes of all other types. */
let isReady2: boolean = null;
let isReady3: boolean | null = null; // strictNullChecks: true

/* array, tuple */
let array1: Array<number> = [1];
let array2: number[] = [1];
let array3: Array<number | string> = [1];

let tuple: [string, number] = ["1", 2, "3", 4];

let t0 = tuple[0]; // type inferencable
