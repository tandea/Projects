print ("Hello World! This is my  mini-quiz game!")

playing = input("Do you wanna play?")

if playing.lower() !="yes":
    quit()

print ("All right! Let's play :D")
score = 0
correct_answers = 0

answer = input("What is the abreviation for HyperText Markup Language? " )
if answer.lower() == "html":
    print('Your answer is correct!')
    score +=1
    correct_answers+=1
else:
    print('Sorry, your answer is inncorent')
    score -=1

   

answer = input("What is the abreviation for Cascading Style Sheets? ")
if answer.lower() == "css":
    print('Your answer is correct!')
    score +=1
    correct_answers+=1
else:
    print('Sorry, your answer is inncorent')
    score -=1


answer = input("What is the abreviation for Java Script?")
if answer.lower() == "js":
    print('Your answer is correct!')
    score +=1
    correct_answers+=1
else:
    print('Sorry, your answer is inncorent')

answer = input("What is the abreviation for Python ?")
if answer.lower() == "py":
    print('Your answer is correct!')
    score +=1
    correct_answers+=1
else:
    print('Sorry, your answer is inncorent! ')
    score -=1

percentage_correct = (correct_answers/4) * 100
print("You got " + str(score) + " points!")
print("That means You got " + str(percentage_correct) + " % of the questions correct.")
##print("You got " + str((score*100) * 4) + "%.")