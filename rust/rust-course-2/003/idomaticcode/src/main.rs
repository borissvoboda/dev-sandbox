struct Thing {
    field: i32,
}
enum Choice {
    A,
    B,
    C,
}

fn main() {
    println!("Hello, world!");
}


// cargo fmt  -> format file; 
// wont add exptra blank lines; wont check if code compiles.
// .rustfmt.toml
// ---
// cargo clippy -> compiles code and checks for 450 specific types of problems
// 1. style - if there is more idiomatic way
// 2. correctness - loop { break; }
// 3. complexity - unnecessary parentheses
// if you want to ignore some warning:
// #[allow(clippy::too_many_arguments)]
// warn => allow
// google clippy lints


