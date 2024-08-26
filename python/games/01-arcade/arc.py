import tkinter as tk

# Create the main window
root = tk.Tk()
root.title("Arc")

# Configure the grid to center the canvas
root.grid_rowconfigure(0, weight=1)
root.grid_columnconfigure(0, weight=1)

SCREEN_WIDTH = 500
SCREEN_HEIGHT = 400

canvas = tk.Canvas(root, width=SCREEN_WIDTH, height=SCREEN_HEIGHT, bg='white')
canvas.grid(row=0, column=0)  # Place the canvas in the grid

# line = canvas.create_line(0, 40, SCREEN_WIDTH, 40, fill='black')
rectangle = canvas.create_rectangle(4, 40, SCREEN_WIDTH-4, SCREEN_HEIGHT-4, fill='white', outline='black')

# Initialize step counter
stepCounter = 0
label = tk.Label(root, text=f"Steps: {stepCounter}")
canvas.create_window(10, 10, window=label, anchor='nw')

# Function to get the player's current x, y position
def get_player_position():
    coords = canvas.coords(player)
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
    global stepCounter
    if event.keysym == 'Up' and get_player_y_position() > 52:
        canvas.move(player, 0, -10)
        stepCounter += 1
    elif event.keysym == 'Down' and get_player_y_position() < SCREEN_HEIGHT - 14:
        canvas.move(player, 0, 10)
        stepCounter += 1
    elif event.keysym == 'Left' and get_player_x_position() > 19:
        canvas.move(player, -10, 0)
        stepCounter += 1
    elif event.keysym == 'Right' and get_player_x_position() < SCREEN_WIDTH - 14:
        canvas.move(player, 10, 0)
        stepCounter += 1
    
    # Update the label with the new step counter
    label.config(text=f"Steps: {stepCounter}")

# Create a circle representing the player
player = canvas.create_oval(190, 190, 210, 210, fill='black')

# Bind the arrow keys to the move_player function
root.bind('<Up>', move_player)
root.bind('<Down>', move_player)
root.bind('<Left>', move_player)
root.bind('<Right>', move_player)

# Start the game loop
root.mainloop()