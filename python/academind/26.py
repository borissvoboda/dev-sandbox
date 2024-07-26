blockchain = [[1]]

def add_value(transaction_amount):
    blockchain.append([blockchain[-1], transaction_amount])   # -1 last element - trick, 
    print(blockchain)

add_value(2)
add_value(0.9)
add_value(10.89)
