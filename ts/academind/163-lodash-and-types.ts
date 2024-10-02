/* Lodash utility lib; but many about it applies to any library.

lodash, jQuery...

Lodash is a JS lib, can be used in any project.

npm i --save lodash

(cdn can be used if we do not use webpack)

we can import _ from 'lodash';

but immediately error! importing.
And if we want to use methods from lodash - error.

( We need to import types??? )

Problem is that loadash is vanilla JS lib.
Loadash does not have TS.
TS doesn't know which method it uses.


First, we should, in tsconfig.json set "noEmitOnError": false
SO we DO emmit errors.
We will see error, but we have output.

Loadash DO work, but TS do not understand it.

------------------------------------------------

There is no TS version of Loadash!
It is annoying.

Resolution:
(set noEmit... to true)

You can install types of third party lib.

npm @types/lodash

.d.ts files - no actuall logic, but they have instructions for typescript.

In these filese translation from plain JS to TS.

npm install --save-dev @types/lodash
Because it is needed only in dev.







*/
