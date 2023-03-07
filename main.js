// array
// =>push,pop from back
// =>unshift add from front
// =>shift remove from front
// =>looping
//      =>map 
//      =>(arr)foreach(arr.forEach(function(ele,key){
//           //code
//          });
//      )
//      =>(obj)forin (for(var key in arr){
//              console.log(key,arr[key])
//              };
//          )
//      =>(arr)forof(for(var ele of arr){
//              console.log(ele)
//              };
//          )

//variables
//     var variables / let variables -> hoisting takes place so the variables will be declared at the first and later in flow will assign a value to it


var arr = [
    {
        id:1,
        name:'abc',
        level:1,
        salary: 1000,
        age: 30
    },
    {
        id:2,
        name:'bcd',
        level:2,
        salary: 2900,
        age: 40
    },{
        id:3,
        name:'cde',
        level:3,
        salary: 2900,
        age: 40
    },{
        id:4,
        name:'def',
        level:4,
        salary: 2900,
        age: 40
    },{
        id:5,
        name:'efg',
        level:5,
        salary: 2900,
        age: 40
    },{
        id:6,
        name:'fgh',
        level:1,
        salary: 2900,
        age: 40
    },{
        id:7,
        name:'ghi',
        level:2,
        salary: 2900,
        age: 40
    },{
        id:8,
        name:'hij',
        level:3,
        salary: 2900,
        age: 40
    },{
        id:9,
        name:'ijk',
        level:4,
        salary: 2900,
        age: 60
    },{
        id:10,
        name:'jkl',
        level:5,
        salary: 2900,
        age: 50
    }
]

for(var ele of arr){
    if(ele.level>=4){
        console.log(`Employee ID: ${ele.id}, Employee Name: ${ele.name}`)
    }
}


// json obj
//      access 2 ways obj.property || obj['key']
//      spread operator(...) to copy obj {...obj} it also can be used to update the values of keys.
//      can contain function as values as well

// const obj={
//     fun1: function(){
//         console.log(`i am fun1`);
//     },
//     fun2: function(){
//         console.log(`i am fun2`)
//     }
// }
// obj.fun1()
// obj.fun2()

//functions
//      function function_name(){     //normal function
//            console.log();
//            return {}
//        }
//      const ob =function_name() // calling
//
//      const function_name = function(){       //arrow function
//                console.log();
//                return {}
//        }
//      function_name()

const add_emp = function(obj){
    arr.push(obj)
}
// console.log("BEFORE ADD",arr)
// add_emp({id:11,
//     name:'klm',
//     level:5,
//     salary: 2900,
//     age: 40})
// console.log("AFTER ADD",arr)

const remove_emp = function(id){
    for (const key in arr) {
        if(arr[key].id === id){
            arr.splice(key,1)
            break;
        }
    }
}
// console.log("BEFORE REMOVE:",arr)
// remove_emp(4);
// console.log("AFTER REMOVE:",arr)
const update_emp = function(id,obj){
    // spread ope ( will)
    for (const key in arr) {
        if(arr[key].id === id){
            arr[key] = obj
        }
    }
}
// console.log("BEFORE UPDATE:", arr)
// update_emp(1,{id:11,
//     name:'sriya',
//     level:2,
//     salary: 290000,
//     age: 20})
// console.log("AFTER UPDATE:",arr)
const filters_emp = function(keys,opes,vals,cond){
    if(cond==="and"){
        let arr1 = arr
        for(var key in keys){
            let arr2 = []
            for(var ele of arr1){
                if(opes[key]===">="){
                    if(ele[keys[key]]>=vals[key]){
                        arr2.push(ele)
                    }
                }
                else if(opes[key]==="<="){
                    if(ele[keys[key]]<=vals[key]){
                        arr2.push(ele)
                    }
                }
                else if(opes[key]==="<"){
                    if(ele[keys[key]]<vals[key]){
                        arr2.push(ele)
                    }
                }
                else if(opes[key]===">"){
                    if(ele[keys[key]]>vals[key]){
                        arr2.push(ele)
                    }
                }
                else{
                    if(ele[keys[key]]===vals[key]){
                        arr2.push(ele)
                    }
                }
            }
            arr1 = arr2
        }
        for(var ele of arr1){
            console.log(`Employee ID: ${ele.id} Employee Name: ${ele.name}`)
        }
    }
    else if(cond==="or"){
        let arr2 = new Set()
        for(var key in keys){
            for(var ele of arr){
                if(opes[key]===">="){
                    if(ele[keys[key]]>=vals[key]){
                        arr2.add(ele)
                    }
                }
                else if(opes[key]==="<="){
                    if(ele[keys[key]]<=vals[key]){
                        arr2.add(ele)
                    }
                }
                else if(opes[key]==="<"){
                    if(ele[keys[key]]<vals[key]){
                        arr2.add(ele)
                    }
                }
                else if(opes[key]===">"){
                    if(ele[keys[key]]>vals[key]){
                        arr2.add(ele)
                    }
                }
                else{
                    if(ele[keys[key]]===vals[key]){
                        arr2.add(ele)
                    }
                }
            }
        }
        for(var ele of arr2){
            console.log(`Employee ID: ${ele.id} Employee Name: ${ele.name}`)
        }
    }
    // for(var ele of arr){
    //     if(ope===">="){
    //         if(ele[key]>=val){
    //             console.log(`Employee ID: ${ele.id}, Employee Name: ${ele.name}`)
    //         }
    //     }
    //     else if(ope==="<="){
    //         if(ele[key]<=val){
    //             console.log(`Employee ID: ${ele.id}, Employee Name: ${ele.name}`)
    //         }
    //     }
    //     else if(ope==="<"){
    //         if(ele[key]<val){
    //             console.log(`Employee ID: ${ele.id}, Employee Name: ${ele.name}`)
    //         }
    //     }
    //     else if(ope===">"){
    //         if(ele[key]>val){
    //             console.log(`Employee ID: ${ele.id}, Employee Name: ${ele.name}`)
    //         }
    //     }
    //     else{
    //         if(ele[key]===val){
    //             console.log(`Employee ID: ${ele.id}, Employee Name: ${ele.name}`)
    //         }
    //     }
    // }
}
console.log("FILLTERRRR")
filters_emp(["salary","age"],["==",">"],[2900,40],"or")

const filter_emp = function(key,ope,val){
    // filter function....
    for(var ele of arr){
        if(ope===">="){
            if(ele[key]>=val){
                console.log(`Employee ID: ${ele.id}, Employee Name: ${ele.name}`)
            }
        }
        else if(ope==="<="){
            if(ele[key]<=val){
                console.log(`Employee ID: ${ele.id}, Employee Name: ${ele.name}`)
            }
        }
        else if(ope==="<"){
            if(ele[key]<val){
                console.log(`Employee ID: ${ele.id}, Employee Name: ${ele.name}`)
            }
        }
        else if(ope===">"){
            if(ele[key]>val){
                console.log(`Employee ID: ${ele.id}, Employee Name: ${ele.name}`)
            }
        }
        else{
            if(ele[key]===val){
                console.log(`Employee ID: ${ele.id}, Employee Name: ${ele.name}`)
            }
        }
    }
}
// console.log("FILLTERRRR")
// filter_emp("salary",">",2000)

function greetings(username){
    if(username.endsWith('@darwinbox.com') & username.indexOf('@darwinbox.com')!==0){
        return true
    }
    return false
    // console.log(`Hello ${username}`);

}

console.log(greetings('@darwinbox.com'))

// window.sessionStorage()
// window.CacheStorage()
// window.localStorage()
// window.location()
// window.navigator()
// window.onblur()
// window.onclick()

function change_name(){
    const title = document.getElementById("heading");
    const div_ele = document.getElementById("sample")
    div_ele.innerHTML =`<img src="netflix-avatar.png"/>` // way 1
    const img = document.createElement("img")
    img.src = "netflix-avatar.png"
    div_ele.appendChild(img) // way 2
    title.innerText = "HELLO USER!"
    alert("changed");

}
let str = "      20";
let strJava = "javascript 20";

function isNumber(value) {
    if (typeof value === "string") {
        return !isNaN(value);
    }
}

function validCheck(){
    const values = document.getElementsByClassName("form-control")
    var out = {}
    var pass =""
    Array.from(values).forEach(element => {    
        if(element.name==="fullname"){
            if(element.value!==""){
                out.fullname = "valid"
            }
            else{
                out.fullname = "invalid"
            }
        }
        else if(element.name === "email"){
            if(element.value.includes("@gmail.com") & element.value.indexOf("@gmail.com")!==0){
                out.email = "valid"
            }
            else{
                out.email = "invalid"
            }
        }
        else if(element.name ==="phone"){
            if(isNumber(element.value) & element.value.length ===10 & (element.value[0]==='6' || element.value[0]==='7' || element.value[0]==='8'|| element.value[0]==='9')){
                out.phone = "valid"
            }
            else{
                out.phone = "invalid"
            }
        }
        else if(element.name === "password" || element.name==="rewrite-password"){
            if(element.name === "password"){
                pass = element.value
                console.log("IN IFFFF",pass)
                if(element.value.length>=8){
                    out.password = "valid"
                }
                else {
                    out.password = "invalid"
                }
            }
            else{
                console.log("in",pass,element.value)
                if(element.value===pass & out.password === "valid"){
                    out.repassword = "valid"
                }
                else{
                    out.repassword ="invaild"
                }
            }
            
        }


    });
    console.log(values)
    console.log(out)
}



/*
access elements methods
    getElementById()
    getElementsByClassName()
    getElementsByTagName()
    getElementsByName()
    documents.form->for form
*/
