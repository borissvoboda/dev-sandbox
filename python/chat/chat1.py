import tkinter as tk
from tkinter import scrolledtext

# Initialize the main window
# Creating an instance of the Tk Class -> Tk class constructor.
# root is the variable that holds the instance of Tk class
root = tk.Tk()
# root.title is the method for setting the title of the main window
root.title("Chat Client")
# root.geometry for setting the size and the position(???) of the main window
# root.geometry("widthxheight+x_offset+y_offset")
# root.geometry("500x300+600+200")
# root.geometry("400x400")
root.geometry("500x300+600+200")
root.configure(bg='#f0f0f0')  # Light gray background

# Modern font style
modern_font = ("Segoe UI", 10)

# Create a Text widget with a modern look
text_display = tk.Text(root, height=10, width=50, bg='#ffffff', fg='#333333', 
                       font=modern_font, bd=0, padx=10, pady=10)
text_display.pack(padx=10, pady=10)
text_display.insert(tk.END, "Welcome to the Chat Client!\n")

# Function to close the application
def close_app():
    root.destroy()

# # Create an "Exit" button to close the application
# exit_button = tk.Button(root, text="Exit", command=close_app)
# exit_button.pack(padx=10, pady=10)

# Create a modern "Exit" button
exit_button = tk.Button(root, text="Exit", command=close_app, bg='#0078d7', fg='#ffffff', 
                        font=modern_font, relief='flat', bd=0, padx=20, pady=5)
exit_button.pack(padx=10, pady=10)


# Run the application
root.mainloop()