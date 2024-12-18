const p1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('success')
    },1000);
})

const p2=new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject('failure')
    },2000);
})

// Promise.all([p1,p2]).then(console.log).catch(console.log)
// Promise.allSettled([p1,p2]).then(console.log).catch(console.log)
Promise.race([p1,p2]).then(console.log).catch(console.log)

// p1.then(console.log)
// p2.catch(console.log)

// const f1=(val,callback)=>{
//     return callback(val+10)
// }

// const c1=()=>{
//     return c2()
// }

// const callback=(val)=>{
//     return val+20;
// }

// console.log(f1(1,callback))

// const p1 =val=>new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(val+10)
//     },1000);
// })

// p1(1).then(x=>x+20).then(console.log)





