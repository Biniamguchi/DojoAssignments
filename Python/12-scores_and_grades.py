import random

def randGrades():
    grade = 0

    print "Scores and Grades:"

    for i in range(0,10):
        grade = random.randint(60,100)

        if grade >= 90 and grade <= 100:
            grade = "Score:"+str(grade)+"; Youre grade: A"
        elif grade >= 80 and grade <= 89:
            grade = "Score:"+str(grade)+"; Youre grade: B"
        elif grade >= 70 and grade <= 79:
            grade = "Score:"+str(grade)+"; Youre grade: C"
        elif grade >= 60 and grade <= 69:
            grade = "Score:"+str(grade)+"; Youre grade: D"
        elif grade < 50:
            grade = "Score:"+str(grade)+"; Youre grade: F"

        print grade
randGrades()