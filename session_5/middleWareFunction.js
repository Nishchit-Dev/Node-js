function hello(req, res, next) {
    console.log("Logging....")
    next()
}

function auth(req, res, next) {
    console.log("authentacating the user")
}
module.exports = auth
module.exports = hello