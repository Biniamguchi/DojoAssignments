x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

def draw_stars(li):
    for i in range(0,len(li)):
        if type(li[i]) == int:
            print "*"*li[i]
        elif type(li[i]) == str:
            print li[i][0]*len(li[i])
draw_stars(x)