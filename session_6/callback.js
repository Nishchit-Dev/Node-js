console.log('before')


/// we are deriving the callback function here 
getUser(110, function(user) {
    console.log(user)
})
console.log('after')

// here we have set the reference to the callback function 

// when the callback() is called ,callback is the referenced to the calling-derived function 
function getUser(id, callback) {
    setTimeout(() => {
        console.log('reading the user data')
        callback({ id: id, gituserreponame: "nishchit" })
    }, 2000)
}

function getRepo(username, callback) {
    setTimeout(() => {
        console.log("fetching data from github")
        callback(['repo1 ', 'repo2', 'rep03'])
    }, 2000)
}