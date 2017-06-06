def filterType(val):
    if isinstance(val,int):
        if val >= 100:
            print "Thats a big number!"
        elif val < 100:
            print "Thats a small number!"
    elif isinstance(val,str):
        if len(val) >= 50:
            print "Long sentence"
        elif len(val) < 50:
            print "Short sentence"
    elif isinstance(val,list):
        if len(val) >= 10:
            print "Big list"
        elif len(val) < 10:
            print "Short list"
            
#filterType(95)
#filterType("StringTestStringTestStringTest")
#filterType([1,2,3,4,5,6,7,8,9,10,11])