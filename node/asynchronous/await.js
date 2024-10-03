// async function fn(){
//     return 'hello'
// }

// console.log(fn())
// fn().then((msg)=>console.log(msg))

let reachA=new Promise((resolve, reject) => {
    const reached= true
    if (reached)
        setTimeout(resolve,3000,'sneha has reached')
    else
    reject('sneha not reached')
})

async function asyncstatus(params) {
    try{
    console.log('hi..')
    res=await reachA
    console.log(res)
    console.log('bye')
}
catch(err){
    console.log(err)
}
}

asyncstatus()