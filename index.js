document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgURL).then(response => response.json()).then(json => console.log('json'))
})