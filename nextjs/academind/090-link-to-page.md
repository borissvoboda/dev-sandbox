Create a link:
if I use href="/about" we left the SPA, the app is reloaded!!!

In NextJS, to stay in the SPA:

use special component

import Link from 'next/link';

<Link href="/about">About us</Link>
