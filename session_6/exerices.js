async function task() {
    const costumer = await getCostumer();
    if (costumer.isGold) {
        const movies = await getTopMovies();
        console.log(movies)
        const mail = await sendEmail();
    }

}
task()

function getCostumer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("checking for costumer...")
            resolve({ id: 1921, name: "josh", isGold: true })
        }, 2000)

    })
}

function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("listing the top movies")
            resolve({ movies: ['despicable me', 'despicable me 2', 'despicable me 3', 'terminator :the judgement day ', 'total recall', 'ready player one'] })
        }, 2000)

    })
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("sending EMAIl securely.....")
            resolve()
        }, 3000)
    })
}