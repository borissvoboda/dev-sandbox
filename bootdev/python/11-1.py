# sets ..... > list

def remove_duplicates(spells):
    new_spells = []
    for spell in spells:
        if spell not in new_spells:
            new_spells.append(spell)
    return new_spells
    
            
