def regenerate(current_health, max_health, enemy_distance):
    # pass
    while current_health < max_health and enemy_distance > 3: 
        current_health += 1
        enemy_distance -= 2
    
    return (current_health)

# Assignment
# In Fantasy Quest, player characters regenerate health when standing still while away from enemies. This means they will gain health but can't run from enemies that are coming towards them while regenerating.

# Complete the regenerate function using a while loop. It takes current_health, max_health and enemy_distance integers.

# While regenerating health, a character gains health until it reaches the max_health amount.
# For every 1 health a character gains, the enemy_distance shortens by 2.
# If an enemy is a distance of 3 or less from the character, the character stops gaining health.
# Return the new current_health after health regeneration stops.