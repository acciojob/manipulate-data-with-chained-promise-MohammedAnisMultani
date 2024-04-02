//your JS code here. If required.
let output = document.getElementById("output")

let arr = [1,2,3,4]
function array(data){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(data)
    },1000)

})
}
function array1(data){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(data)
    },3000)

})
}

let p1 = array(arr)

p1.then((data)=>{
    let div = document.createElement("div")
        let ans = data.filter((value)=>value%2==0)
        div.innerText = ans
        output.append(div)
        return array1(ans)
})
.then((data)=>{
    let div = document.createElement("div")
    let ans2 = data.map(element => element*2);
    div.innerText = ans2
    output.append(div)
})
.catch((err)=>{console.log(err)})

