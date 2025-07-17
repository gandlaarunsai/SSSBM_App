from num2words import num2words

def num_to_words(amount):
    #Converts the amount into words
    inWords= num2words(amount,lang='en_IN')

    return inWords
