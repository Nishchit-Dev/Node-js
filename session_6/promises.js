console.log("promiese session")

const p = new Promise(function(resolve, reject) {
    // kick of any asynronomous work 
    setTimeout(() => {
        reject(new Error('message'))
    }, 2000)


    // // when task is done successfully 
    // resolve(1)
    // // when task is reject or failed
    // reject(2)
})


p.then(result => {
    console.log("result :" + result)
}).catch(err => {
    console.log(err.message)
})