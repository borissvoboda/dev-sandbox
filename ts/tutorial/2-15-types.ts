// > deno 2-15-types.ts

function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    console.log(n1 + n2);
  } else {
    console.log(n1 + n2);
  }
}

console.log('Ready');

add(1, 2, false);
