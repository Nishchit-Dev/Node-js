function hello() {
    console.log("hello")
}

function log(message) {

    // sending the http request 
    console.log(message);

}


// we are exporting the log function 
module.exports.log = log;

// if we want to export the function , var or 
//whole module we can do that by using the export