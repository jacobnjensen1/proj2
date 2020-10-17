const randomURL = "http://quote-garden.herokuapp.com/api/v2/quotes/random"
const genreBaseURL = "https://quote-garden.herokuapp.com/api/v2/genres/"
const authorBaseURL = "https://quote-garden.herokuapp.com/api/v2/authors/"
const endURL = "?page=1&limit=100"

getRandomQuote() //Just to get something at the beginning

let currentGenre = "uninitialized"  //will get changed with each response
let currentAuthor = "A Person"      //will change each time

document.getElementById("randomButton").addEventListener("click", function (event) {
    event.preventDefault()
    getRandomQuote()
})

document.getElementById("genreButton").addEventListener("click", function (event) {
    event.preventDefault()
    getGenreQuote()
})

document.getElementById("authorButton").addEventListener("click", function (event) {
    event.preventDefault()
    getAuthorQuote()
})

function getRandomQuote() {
    fetch(randomURL)
    .then(function (response) {
        return response.json()
    }).then(function (json) {
        console.log(json)
        handleResonse(json.quote)
    })
}

function getGenreQuote() {
    let url = genreBaseURL + currentGenre + endURL
    fetch(url)
    .then(function (response) {
        return response.json()
    }).then(function (json) {
        console.log(json)
        let index = Math.floor(Math.random() * json.quotes.length)
        handleResonse(json.quotes[index])
    })
}

function getAuthorQuote() {
    let url = authorBaseURL + currentAuthor + endURL
    fetch(url)
    .then(function (response) {
        return response.json()
    }).then(function (json) {
        console.log(json)
        let index = Math.floor(Math.random() * json.quotes.length)
        handleResonse(json.quotes[index])
    })
}

function handleResonse(json) {
    document.getElementById("quoteHolder").textContent = json.quoteText
    document.getElementById("quoteAuthor").textContent = json.quoteAuthor
    currentGenre = json.quoteGenre
    currentAuthor = json.quoteAuthor
}