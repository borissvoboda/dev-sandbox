// in HTML, insert into header the <script> with src googleapis.com/maps/js?key...
// since the script is inserted directly, not via NPM.
// remove callback string at the end, for that would trigger a function as soon as the map is loaded.

// cannot find name google... TS do not know;
// we can use
declare var google: any; // in app.ts
// with that we tell TS that it is ok.
// It is used to declare a global variable google that might be defined elsewhere,
// but YS itself does not know about it.
// By using declare, you're telling the TypeScript compiler that this variable exists
// and can be used, but you don't provide any implementation or type information
// beyond setting its type as any.

// declare is a keyword that tells TypeScript that a variable is defined elsewhere,
// typically in an external script or library that TypeScript doesn't automatically recognize.
// var google: any; means that the google variable can hold any type of value
// (since it's typed as any), giving you flexibility in how you use it without strict type-checking.
// This is commonly seen when working with external libraries
// that you load via a <script> tag, and the TypeScript compiler doesn't have direct access
// to the type definitions for the google object. This declaration allows you to use
// the google variable without TypeScript errors, though you might lose the benefits
// of type-checking unless you use proper type definitions for it.
// To get type-checking benefits, you would typically install type definitions for the library
// you're using, such as @types/google.maps for Google Maps.

// Google documentation for maps
// var marker = new google.maps.Marker...
