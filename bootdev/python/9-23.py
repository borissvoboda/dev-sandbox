def reverse_array(items):
    """Let's write a function that takes a list as an input and returns a new list except all the items are in reverse order."""
    arr = []

    for i in items[::-1]: 
        arr.append(i)
    return arr


reverse_array