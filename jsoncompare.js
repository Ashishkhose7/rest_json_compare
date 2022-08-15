//Q.1>>> compare two json having same property without order


var obj1={
    name:"Person 1",
    age:5
}
var obj2={
    age:5,
    name:"Person 1"
}
function check(obj1,obj2){

let ok1=Object.keys(obj1)
let ok2=Object.keys(obj2)

if(Object.keys(obj1).length!==Object.keys(obj2).length)
{
    return false
}

for (const key in ok1) {
    if(obj1[key]!==obj2[key])
    {
        return false
    }
}
return true

}
x=check(obj1,obj2)
console.log(x)