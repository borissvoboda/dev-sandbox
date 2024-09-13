def get_median_font_size(font_sizes):

    if len(font_sizes) == 0:
        return None
    
    arr = sorted(font_sizes)
    
    l = len(arr)
    c1 = l // 2

    if l % 2 == 1:
        return arr[c1]
    else:
        if arr[c1-1] < arr[c1]:
            return arr[c1-1]
        else:
            return arr[c1]