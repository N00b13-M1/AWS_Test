import itertools


digits = "0123456789"
combinations = itertools.product(digits, repeat=10)

# Iterate over the combinations
for combo in combinations:
    print(''.join(combo))

# Alternatively, convert to a list
# combinations_list = list(combinations)
# print(combinations_list)



# # Save the generated passwords to a file
# with open("passwords.txt", "w") as file:
#     file.write('\n'.join(passwords))