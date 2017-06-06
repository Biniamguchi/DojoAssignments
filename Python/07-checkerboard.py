def checkerboard():
    char   = "*"
    space  = " "
    newStr = ""

    for i in range(0,4):
        newStr += char+space

    for i in range(0,8):
        if i%2 == 0:
            newStr = space+newStr
        else:
            newStr = list(newStr)
            newStr.pop(0)
            newStr = "".join(newStr)

        print newStr
checkerboard()