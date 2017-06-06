def iterDict(dic):
    if type(dic) != dict:return

    for i in dic:
        print dic[i]

iterDict({
    "name":"My name is Tony",
    "age":"My age is 23",
    "country":"My country of birth is U.S.A",
    "favLang":"My favorite language is Lua"
})