const a1 = []; // This is NOT an array

// Array is contigous / unbreaking memory space; certain amount of bytes.
/* 
Program understands the piece of memory as one piece of array.
Array - zero or more pieces of memory in a row.
more traditionally

int[3] / three integers

a = int[3]

a[0] = go to the memory address of 'a', then add in the offset of 0 multiplied by how
big my type is (32 bits, or smtg),  



*/

/* NODe create array buffer */

const a = new ArrayBuffer(6);
// > undefined

// It is a series of zeros. I want to interpret them in a spec. way
// as unsigned  8 bit numbers, between 0 and 255, and pass and a.
// now I have a view into this
const a8 = new Uint8Array(a);

a8[0] = 45;
// > 45

// > a
// ArrayBUffer { [Uint8Contents]: <2d 00 2d 00 00 00 >, byteLength: 6}

const a16 = new Uint16Array(a);
undefined;
// > a;
a16[2] = 0x4545;
// > 17733

// frist one spec in decimal => d,
// 2nd in hexdec => 4545
// it is set on 5th and 6th byte

// <2d 00 2d 00 45 45>

// We have took a contigous memory space and interpreted in the 2 diff ways
//
// Array means locking these positions.

// Array is this.

// LIST IS SOMETHING DIFFERENT!!! NOT THIS!!!

// ----------------------
// Once again

// ArrayBuffer is a contigous piece of memory, you can create in javascript.
// then you can create views into this data.
// One view we created was an 8bit array. That means every single time
// I have increased the offset into it, it took a width of that type, which is
// 8 bits, multiplied by the offset I have given and
// get that value.

// But then I create the same piece of memory, but I use a16, 16bit type.
// Now I have interpreted this memory space in a different way.

// We will talk about endieness.

// deleting from array is tricky, you can set it to zero, but you need to interpret it correctly.
// in memory you need to do offset!

// what is the big O...
/* 
Does getting into specific ending grows the time / performance...?

If we know type and the index (offset), it does not matter what index you work with, we just multiply...
The perf. does not grow with input.

You cannot grow arrays. Fixed size, ocntigious memory chunks.

There is NO insertAt or push or pop. It doesnt mean you cant write those though!

*/
