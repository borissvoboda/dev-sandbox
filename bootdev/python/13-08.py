# a bit of a stretch 
def join_strings(strings):
    single = ""
    
    if len(strings) > 0:
        
        for s in strings:
            single = single + "," + s
    
        if single[0] == ",":
            single = single[1:]
    
        if single[len(single)-1] == ",":
            single = single[0:]
        
        return single
    
    return ""