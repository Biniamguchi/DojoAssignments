import random

def randGrades():
    grade = 0

    grades = [
        {"min":90,"max":100,"grade":"A"},
        {"min":80,"max":89,"grade":"B"},
        {"min":70,"max":79,"grade":"C"},
        {"min":60,"max":69,"grade":"D"},
        {"min":0,"max":59,"grade":"F"}
    ]

    print "Scores and Grades:"

    for i in range(0,10):
        grade = random.randint(60,100)

        for j in range(0,len(grades)):
            if grade >= grades[j]["min"] and grade <= grades[j]["max"]:
                grade = "Score: "+str(grade)+"Your grade: "+grades[j]["grade"]

        print grade
randGrades()