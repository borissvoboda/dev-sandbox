// The walrus operator, :=, declares a new variable and assigns a value to it in one line. Go can infer that mySkillIssues is an int because of the 42 value. Type inference!

// When to use the walrus operator
// The :=, (walrus operator) should be used instead of var style declarations basically anywhere possible. The limitation is that := can't be used outside of a function (in the global/package scope which we'll talk about later).

// Type inference is based on the value being assigned.

// An int: