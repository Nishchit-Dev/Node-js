const { compile } = require("joi")

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database..')
            resolve({ id: id, gitUsername: 'Nishchit' })
        }, 2000)
    })
}

function getRepo(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("callling github api...")
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000)
    })
}

function getcommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling github api...')
        }, 2000)
    })
}


const pro = getUser('Nishchit')

pro.then(id => getRepo(id.getUser))
    .then(repo => getcommits(repo[0]))
    .then(commits => console.log('commits : ', commits))

const p = Promise.resolve({ id: 'hello' })
p.then(result => { console.log(result) })