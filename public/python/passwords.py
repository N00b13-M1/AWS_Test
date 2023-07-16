import itertools

# Generate all possible combinations of 10-digit numbers
digits = range(10)
lijst = itertools.product(digits, repeat=1)
passwords= list(lijst)
# # Save the generated passwords to a file
# with open("passwords.txt", "w") as file:
#     file.write('\n'.join(passwords))



print(passwords)