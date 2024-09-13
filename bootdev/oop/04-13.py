def main():
    dragons = [
        Dragon("Green Dragon", 0, 0, 1),
        Dragon("Red Dragon", 2, 2, 2),
        Dragon("Blue Dragon", 4, 3, 3),
        Dragon("Black Dragon", 5, -1, 4),
    ]

    # don't touch above this line

    for d in dragons:
        describe(d)

    for i in range(0, len(dragons)):
        others = dragons.copy()
        del others[i]
        dragons[i].breathe_fire(3,3,others)


# don't touch below this line


def describe(dragon):
    print(f"{dragon.name} is at {dragon.pos_x}/{dragon.pos_y}")


class Unit:
    def __init__(self, name, pos_x, pos_y):
        self.name = name
        self.pos_x = pos_x
        self.pos_y = pos_y

    def in_area(self, x_1, y_1, x_2, y_2):
        return (
            self.pos_x >= x_1
            and self.pos_x <= x_2
            and self.pos_y >= y_1
            and self.pos_y <= y_2
        )


class Dragon(Unit):
    def __init__(self, name, pos_x, pos_y, fire_range):
        super().__init__(name, pos_x, pos_y)
        self.__fire_range = fire_range

    def breathe_fire(self, x, y, units):
        print(f"{self.name} breathes fire at {x}/{y} with range {self.__fire_range}")
        print("====================================")
        for unit in units:
            in_area = unit.in_area(
                x - self.__fire_range,
                y - self.__fire_range,
                x + self.__fire_range,
                y + self.__fire_range,
            )
            if in_area:
                print(f"{unit.name} is hit by the fire")


main()


# Dragons
# We've created a lot of classes in this course, now let's write some code that uses them.

# Assignment
# Let's have ourselves a little dragon fight. Complete the bottom half of the main() function using two for-loops.

# In the first for-loop, describe() all of the dragons, starting with the first dragon in the list and ending with the last dragon in the list.
# In the next for-loop, have each dragon breathe_fire at coordinate x=3, y=3. Pass in all of the other dragons (not the one breathing fire) as the units parameter so we can see if they get hit.
# Pass in the dragons in ascending index order. For example, when Blue Dragon breathes fire, it should breathe fire on the other dragons in this order:

# Green Dragon
# Red Dragon
# Black Dragon
# Tips
# Copying a list
# To get a new copy of a list, use the copy() method. If you don't, your new variable will just be a reference to the original list.

# nums = [4, 3, 2, 1]
# nums_copy = nums.copy()
# # nums_copy is [4, 3, 2, 1]
# Copy icon
# Delete from a list
# nums = [4, 3, 2, 1]
# del nums[1]
# # nums is [4, 2, 1]