def studentsInstructors():
    students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

    for i in range(0,len(students)):
        print students[i]["first_name"],students[i]['last_name']

    users = {
        'Students':[
            {'first_name':  'Michael', 'last_name' : 'Jordan'},
            {'first_name' : 'John', 'last_name' : 'Rosales'},
            {'first_name' : 'Mark', 'last_name' : 'Guillen'},
            {'first_name' : 'KB', 'last_name' : 'Tonel'}
        ],

        'Instructors':[
            {'first_name' : 'Michael', 'last_name' : 'Choi'},
            {'first_name' : 'Martin', 'last_name' : 'Puryear'}
        ]
    }

    print "\n"

    first = ""
    last  = ""

    for i in users:
        print i
        for j in range(0,len(users[i])):
            first = users[i][j]["first_name"]
            last  = users[i][j]["last_name"]

            print j+1," - ",first,last," - ",len(first)+len(last)
studentsInstructors()
