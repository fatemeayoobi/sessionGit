//سوال1

let number=(array)=> {
    for(let num of array){
        if(typeof i !=Number){
            console.log("error")
            break
        }
    }
}
printarray([1,3,"s"])


//سوال 2

function univercity(array){
for (let i in students){
    if(students[i].grade>17){
        console.log(students[i].name)
    }
}
}
let students=[{name:'ali',grade:16},{name:"sara",grade:18},{name:"reza",grade:19}]
univercity(students)


//سوال4

function sum (n){
    if(n<1){return 0}
    return n+sum(n-1)
}
sum(5)