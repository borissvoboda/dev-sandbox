blockchain = [1]

def add_value():
    blockchain.append([blockchain[-1], 5.3])   # -1 last element - trick, 
    print(blockchain)

add_value()
add_value()
add_value()
