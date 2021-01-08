// Code here
const BASE_URL = "http://localhost:3000"
const FIRST_BEER_URL = `${BASE_URL}/beers/1`

function makeOptions(method, body = {}) {
    return {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
}

function generalFetch(url, options = {}) {
    return fetch(url, options)
    .then(res => res.json())
}

// See the first beer's details, including its **name, image, description, and reviews**, when the page loads

function fetchFirstBeer() {
    return generalFetch(FIRST_BEER_URL)
}

function patchBeerDescription(id, description) {
    return generalFetch(FIRST_BEER_URL(id), makeOptions("PATCH", {description}))
}

function setBeerName(name) {
    const nameH2 = document.querySelector("h2")
    nameH2.innerText = name
    }

function setBeerImage(image_url) {
    const beerImage = document.querySelector("img")
    beerImage.src = "https://i.ibb.co/wQ4G0w1/flatiron-brew.png"
    }

function setBeerDescription(description) {
    const beerDescription = document.querySelector("textarea")
    beerDescription.innerText = description
    }


function createBeerReview(reviews) {
    const li = document.createElement("li")
    li.innerText = reviews
    return li
    }
        
    function changeDescription(id) {
        const descriptionButton = document.querySelector("button")
        descriptionButton.dataset.beerId = id
        }

    const reviewLi = document.querySelector("li")

function setBeerDetails({name, image_url, description, reviews, id}) {
    setBeerName(name)
    setBeerImage(image_url)
    setBeerDescription(description)
  
    
    reviewLi.innerText = ""
    reviews.forEach((rv) => {
        reviewLi.append(createBeerReview(rv.reviews))

        })

        changeDescription(id)
    }
//- Change the beer's description and **still see that change when reloading the page**

//grab the button
//add event listener
//persist beer(id1) data 
//patch the description input to the back end 

    const descriptionButton = document.querySelector("button")

    descriptionButton.addEventListener("click", (e) => {

        const beerId = e.currentTarget.dataset.beerId

        patchBeerDescription(beerId, description)
        .then(beer => beer.description)
        })



    

    fetchFirstBeer()
    .then(setBeerDetails)

    fetchFirstBeer()
    .then((beer) => {
        setBeerDetails(beer)
        description = beer.description
    })



// leave a review:

// grab form 
// add event listener
// get data from input
// put data in review li

    const reviewForm = document.querySelector(".review-form")
    const reviewInput = document.querySelector("textarea")

    reviewForm.addEventListener("submit", (e) => {
        e.preventDefault()

        reviewLi.append(createBeerReview(reviewInput.value))
        e.currentTarget.reset()
    })