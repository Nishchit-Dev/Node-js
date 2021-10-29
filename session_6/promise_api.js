const p = Promise.resolve({ Id: 123124 })

p.then(result => { console.log(result) })

const p_reject = Promise.reject(new Error('task failed'))

p_reject.catch(err => { console.log(err) })