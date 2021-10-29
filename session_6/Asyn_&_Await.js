console.log("before")

// promises based approach
// getUser(1)
//     .then(user => {
//         console.log(user)
//         getRepo("Nishchit").then((res) => {
//             console.log(res)

//             getcommits("initial commits").then((commits) => {
//                 console.log(commits)
//             })
//         })

//     })

// async and await approach 

async function task() {
    const user = await getUser(1);
    const repo = await getRepo("nishchit")
    const commits = await getcommits("nishchit");
}

task();
console.log('after')

function getUser(id) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("reading from the database")

            resolve({ id: 110, gitusername: "nishchit" })
        }, 2000)
    })

}

function getRepo(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("reading from the database")
            resolve(['notes', 'nodejs', 'js', 'java'])

        }, 2000)
    })

}

function getcommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("reading the database for commits")
            resolve(['commit1', 'commit2', 'commit3'])
        }, 2000)
    })

}