document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl).then(response => response.json()).then(json => json.message.forEach(image => loadImage(image)))

    data = fetchBreedData()
    console.log(data)
    listBreeds(data)

    const breedDropdown = document.getElementsByClassName('breed-dropdown')[0]
    breedDropdown.addEventListener('change', sortList)
})

function fetchBreedData() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl).then(response => response.json()).then(json => showData(json.message))
}

function showData(data) {
    console.log(data)
    return data
}

function loadImage(image) {
    let newImg = document.createElement('img')
    let container = document.getElementById('dog-image-container')

    newImg.setAttribute('src', image)
    newImg.style.height = '120px'
    container.append(newImg)
}

function listBreeds(breeds) {
    console.log('hit')
    console.log(breeds)
    let container = document.getElementById('dog-breeds')
    // if (letter == null) {
        for (const key in breeds) {
            console.log('hit')
            let newLi = document.createElement('li')
            newLi.innerText = key
            container.append(newLi)
            console.log(newLi)

            newLi.addEventListener("click", addColor)
        }
    // } else {
    //     for (const key in breeds) {
    //         let newLi = document.createElement('li')
    //         console.log(key)
    //         console.log(letter)
    //     }
    // }
}

function addColor(event) {
    event.target.style.color = 'pink'
}

function sortList(event) {
    let letter = event.target.selectedOptions[0].innerText
    document.querySelectorAll('li').forEach((e) => e.parentNode.removeChild(e))
    listBreeds(breedJson, letter)
}
