def filter_messages(messages):
    filteredMessages = []
    removed = []


    for message in messages:
        words = message.split()
        okWords = []
        counter = 0
        for word in words:
            if word == "dang":
                counter += 1
            else:
                okWords.append(word)
        sentence = " ".join(okWords)
        filteredMessages.append(sentence)
        removed.append(counter)
        

    return filteredMessages, removed
