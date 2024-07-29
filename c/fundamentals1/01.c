// statements that start with # are called directives
// C compilation process gen. has 3 steps:
// 1. preprocessing - it looks at directives. Parses through them
// 2. compilation
// 3. linking

#include <stdio.h> 

int main(void) {
  printf("Hello World! \n");

  getchar();
  return 1;
}

// gcc 01.c -o 01