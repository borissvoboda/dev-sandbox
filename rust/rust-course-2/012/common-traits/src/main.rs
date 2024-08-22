fn main() {
    println!("Hello, world!");

    println!("{:?}", puzzle);  // Debug
    println!("{:#?}", puzzle); // Pretty debug
}


// Common traits (like traits for classes in PHP? that class can have multiple traits?)
// There are 4 things (entities? something? What kind of lang is this?)
// 4 things can impelement a trait
// struct, enum, closure, function
// focus on structs and enums
// ----
// Derivable Traits
// #[deriveDebug]
// A trait can be derived, if it has a derive macro defined for it.
// Debug most common; for debug and pretty debug

