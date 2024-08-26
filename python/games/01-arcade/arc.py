import tkinter as tk

# Create the main window
root = tk.Tk()
root.title("Arc")

# Configure the grid to center the canvas
root.grid_rowconfigure(0, weight=1)
root.grid_columnconfigure(0, weight=1)

# Screen config
SCREEN_WIDTH = 500
SCREEN_HEIGHT = 400


# Create a white canvas
canvas = tk.Canvas(root, width=SCREEN_WIDTH , height=400, bg='white')
# canvas.pack()  # This was initally use to mng the layout of the canvas widget inside window
# In tkinter there are several geometry managrs (pack, grid, place) - they should not be mixed in the same parent widget (root)
canvas.grid(row=0, column=0)  # Place the canvas in the grid

stepCounter = 0
label = tk.Label(root, text=f"Steps: {stepCounter}")

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

# Player config


# Function to move the player
def move_player(event):
    global stepCounter
    global label
    global root
    if event.keysym == 'Up' and get_player_y_position() > 12:
        canvas.move(player, 0, -10)
        stepCounter += 1
        label = tk.Label(root, text=f"Steps: {stepCounter}")
    elif event.keysym == 'Down' and get_player_y_position() < SCREEN_HEIGHT -10:
        canvas.move(player, 0, 10)
        stepCounter += 1
        label = tk.Label(root, text=f"Steps: {stepCounter}")
    elif event.keysym == 'Left':
        if (get_player_x_position() > 12):
            canvas.move(player, -10, 0)
            stepCounter += 1
            label = tk.Label(root, text=f"Steps: {stepCounter}")
    elif event.keysym == 'Right' and get_player_x_position() < SCREEN_WIDTH -10:
        canvas.move(player, 10, 0)
        stepCounter += 1
        label = tk.Label(root, text=f"Steps: {stepCounter}")







# Create a circle representing the player
player = canvas.create_oval(190, 190, 210, 210, fill='black')

# Bind the arrow keys to the move_player function
root.bind('<Up>', move_player)
root.bind('<Down>', move_player)
root.bind('<Left>', move_player)
root.bind('<Right>', move_player)


# origin point it the center
# but if we set anchor to nw, means northwest!
canvas.create_window(10, 10, window=label, anchor='nw')  


# Start the game loop
root.mainloop()