console.log('Hello...')
function sync(){
    console.log('step 1')
    console.log('step 2')
    console.log('step 3')
}
sync()
let a=100
let b=20
let c=a+b

setTimeout(()=>console.log('step1'),3000)
setTimeout(()=>console.log('step2'),2000)
setTimeout(()=>console.log('step3'),1000)

console.log('bye')
