my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

def dictToTuple(dic):
    if type(dic) != dict:
        print "Usage: Arg must be of type dict."
        return

    li = []
    for i in dic:
        li.append((i,dic[i]))

    return li

t = dictToTuple(my_dict)
print t