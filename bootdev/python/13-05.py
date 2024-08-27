def area_sum(rectangles):
    sum = 0
    
    for r in rectangles:
        area = r["height"] * r["width"]
        sum += area

    return sum
