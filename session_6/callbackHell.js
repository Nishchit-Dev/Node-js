console.log("before")

// call getUser function 
getUser(110, userCallbacks)

console.log("after")

// 4 call of callback function 
function userCallbacks(user) {
    console.log(user)
        // 5 here the getrepo is called 
    getRepo("nishchit", repoCallbacks)
}

// 8 call of the callback function in getRepo function
function repoCallbacks(repo) {
    // 9 getCommit function is called
    getcommits(repo, commitsCallbacks)
    console.log(repo)
}
// 12 at last the commitcallback function is called
function commitsCallbacks(commits) {
    console.log(commits)
}



// 1 when getUSer is called 
function getUser(id, callback) {
    setTimeout(() => {
        console.log("reading from the database")
            // 2 here the callback function is called 
            // which is referenced to the UserCallback function defined above
            // 3 callback function is called
        callback({ id: 110, gitusername: "nishchit" })
    }, 2000)
}
// 6 when the getrepo is called 
function getRepo(username, callback) {
    setTimeout(() => {
        console.log("reading from the database")
            // 7 callback function is called and is referenced to the repoCallback
        callback(["notes", "nodejs", "js", "java"])

    }, 2000)
}
// 10 when getCommit is called 
function getcommits(repo, callback) {
    setTimeout(() => {
        console.log("reading the database for commits")
            // 11 callback function is called is referenced to the commitCallbacks
        callback(["commit1", "commit2", "commit3"])
    }, 2000)
}