document.addEventListener("DOMContentLoaded",() => {
    loadPage()
    getForm().addEventListener("submit", processFormSubmit)
})


function loadPage() {
    fetchDogsImgs();
    fetchDogsBreeds();
}

function fetchDogsImgs() {
    fetch(getUrl())
        .then(response => response.json())
        .then(dogs => dogs.message.forEach(dog => addImg(dog)))
}

function getUrl() {
    return "https://dog.ceo/api/breeds/image/random/4"
}

function addImg(dog) {
    let dogContainer = document.getElementById('dog-image-container');
    let dogImage = document.createElement('img')
    dogImage.src = dog;
    dogContainer.appendChild(dogImage)
}

function fetchDogsBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(dogs => Object.keys(dogs.message).forEach(dog => getBreed(dog)))

        // dogs.message.forEach(dog => getBreed(dog))
}

function getBreed(dog) {
    let dogBreedList = document.getElementById('dog-breeds');
    let dogBreed = document.createElement('li')
    dogBreed.innerText = dog;
    dogBreed.addEventListener("click",turnColor)
    dogBreedList.appendChild(dogBreed)
}

function turnColor(event) {
    event.target.className = "clicked-dog"
}

function getForm() {
    return document.querySelector('form')
}

function processFormSubmit(event) {
    event.preventDefault()

    let letterChoice = event.srcElement[0].value 

    let breedList = document.querySelector('#dog-breeds')

    let filteredList = breedList.filter(name => name[0] === letterChoice )

    
}