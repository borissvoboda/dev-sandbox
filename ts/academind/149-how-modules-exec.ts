/*

We are exporting and importing constants in multiple files.

So multiple times from the same file.

Does this code runs once, or twice? Once per import statement, or once for entire app?

!!! It runs once when the file is imported for the first time by any other fiel.

If another file then imports the same file again, it does not run again.




*/
