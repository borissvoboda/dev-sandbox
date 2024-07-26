blockchain = [[1]]

def get_last_blockchain_value():
    return blockchain[-1]


def add_value(transaction_amount, last_transaction):
    blockchain.append([last_transaction, transaction_amount])   # -1 last element - trick, 

add_value(2, [1])
add_value(0.9, get_last_blockchain_value())
add_value(10.89, get_last_blockchain_value())

print(blockchain)
