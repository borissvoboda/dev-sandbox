import axios from 'axios';

/* if we install it and start using it, we will get autocomplition

axios.get();

built-in TS support

node_modules/axios/inedx.d.ts
ts translation package
it explains to the TS what the package does and what types it uses.

*/

axios.get(`{googleAPIkey}`);

// convert entered string into a URL compatible string
// encodeURI
axios.get(`....${encodeURI(enteredAddress)}...`);

// google maps api, geometry > location > lat and long

// we can create a custom type, like

type GoogleGeocoidngresponse = {
  esults: { geometry: { location: { lat: number; lng: number } } }[];
};

axios.get<GoogleGeocodingRespons>(`....${encodeURI(enteredAddress)}...`);
// result contains more information, than geometry...

// ---------------

// status

type GoogleGeocoidngresponse1 = {
  esults: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

// in official dosc we can learn what does the response contains..
