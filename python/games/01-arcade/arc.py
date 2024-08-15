import tkinter as tk

# Function to get the player's current x, y position
def get_player_position():
    # Get the current coordinates of the bounding box (x1, y1, x2, y2)
    coords = canvas.coords(player)
    # The position of the player is the center of the bounding box
    x = (coords[0] + coords[2]) / 2
    y = (coords[1] + coords[3]) / 2
    return x, y

def get_player_x_position():
    coords = canvas.coords(player)
    x = (coords[0] + coords[2]) / 2
    return x

def get_player_y_position():
    coords = canvas.coords(player)
    y = (coords[1] + coords[3]) / 2
    return y

# Function to move the player
def move_player(event):
    if event.keysym == 'Up' and get_player_y_position() > 12:
        canvas.move(player, 0, -10)
    elif event.keysym == 'Down':
        canvas.move(player, 0, 10)
    elif event.keysym == 'Left':
        if (get_player_x_position() > 12):
            canvas.move(player, -10, 0)
    elif event.keysym == 'Right':
        canvas.move(player, 10, 0)


# Create the main window
root = tk.Tk()
root.title("Arc")

# Configure the grid to center the canvas
root.grid_rowconfigure(0, weight=1)
root.grid_columnconfigure(0, weight=1)

# Create a white canvas
canvas = tk.Canvas(root, width=400, height=400, bg='white')
# canvas.pack()  # This was initally use to mng the layout of the canvas widget inside window
# In tkinter there are several geometry managrs (pack, grid, place) - they should not be mixed in the same parent widget (root)
canvas.grid(row=0, column=0)  # Place the canvas in the grid

# Create a circle representing the player
player = canvas.create_oval(190, 190, 210, 210, fill='black')

# Bind the arrow keys to the move_player function
root.bind('<Up>', move_player)
root.bind('<Down>', move_player)
root.bind('<Left>', move_player)
root.bind('<Right>', move_player)

# Start the game loop
root.mainloop()