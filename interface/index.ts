interface Info{
    name : string,
    age : number,
    college:string
}



var studentInfo : Info = {
    name:"Hasmi",
    age : 18,
    college:"Scet Technology"

}

interface Teacher extends  Info{
    teacherSallary : number
}

var teacherInfo : Teacher = {
    name:"Vineeta Madam",
    age : 21,
    college:"Scet Technology",
    teacherSallary : 52000
}