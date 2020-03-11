document.addEventListener("DOMContentLoaded",fetchDogs)

function fetchDogs() {
    fetch(getUrl())
        .then(response => response.json())
        .then(dogs => dogs.forEach(dog => addImg(dog)))
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