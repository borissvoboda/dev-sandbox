blockchain = [[1]]

def get_last_blockchain_value():
    return blockchain[-1]
# official python style guide: 2 empty lines between functions


def add_value(transaction_amount):
    blockchain.append([get_last_blockchain_value(), transaction_amount])   # -1 last element - trick, 

add_value(2)
add_value(0.9)
add_value(10.89)

print(blockchain)
