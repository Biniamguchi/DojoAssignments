var students = [
    {firstName:"Michael",lastName:"Jordan"},
    {firstName:"John",lastName:"Rosales"},
    {firstName:"Mark",lastName:"Guillen"},
    {firstName:"KB",lastName:"Tonel"}
];

var j;
for(i in students){
    j = students[i];
    console.log(j.firstName,j.lastName);
}

console.log("----------------");

var users = {
    Students:[
        {firstName:"Michael",lastName:"Jordan"},
        {firstName:"John",lastName:"Rosales"},
        {firstName:"Mark",lastName:"Guillen"},
        {firstName:"KB",lastName:"Tonel"}
    ],

    Instructors:[
        {firstName:"Michael",lastName:"Choi"},
        {firstName:"Martin",lastName:"Puryear"}
    ]
};

for(i in users){
    var j = users[i];

    console.log(i);

    for(k in j){
        var l = j[k];
        var nmLen = l.firstName.length+l.lastName.length;
        console.log(k+" -",l.firstName,l.lastName,"- "+nmLen);
    }
}
