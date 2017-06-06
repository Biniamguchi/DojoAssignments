def multTable():
    numStr = ""

    for y in range(1,12):
        for x in range(1,14):
            if x == 13:
                #Reset the string and print the row
                print numStr
                numStr = ""
            else:
                #Offset by x+y multiplied by x, to get next multiple
                numStr += " "+str(x+y*x)
    
multTable()