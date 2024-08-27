def remove_nonints(nums):
    """remove_nonints() function takes a list and returns a new list with all the non-integer types removed."""
    new = []
    
    for n in nums:
        if type(n) == int:
            new.append(n)
    return new
