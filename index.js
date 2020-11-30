photos = [
    "./assets/img/1.jpg",
    "./assets/img/2.jpg",
    "./assets/img/3.jpg",
    "./assets/img/4.jpg",
    "./assets/img/5.jpg",
    "./assets/img/6.jpg",
    "./assets/img/7.jpg",
    "./assets/img/8.jpg",
    "./assets/img/9.jpg",
    "./assets/img/10.jpg",
    "./assets/img/11.jpg",
    "./assets/img/12.jpg"
]

const miniesContainer = document.getElementById('minies-container')
const imagesContainer = document.getElementById('img-slider')

photos.forEach((url, index) => {
    imagesContainer.innerHTML += `<div id="img_${index}" class="images ${index === 0 ? 'active' : ''}" style="background-image: url(${url})"></div>`
    miniesContainer.innerHTML += `<div onclick="choosePhoto(${index})" id="img_mini_${index}" class="mini_img ${index === 0 ? 'active' : ''}" style="background: no-repeat center / cover url(${url})"></div>`
})

function nextPhoto() {
    const curPosition = +imagesContainer.querySelector(".active").id.slice(4)
    let nextPosition
    if(this.classList.contains('left')) {
        nextPosition = curPosition === 0 ? photos.length-1 : curPosition-1
    } else {
        nextPosition = curPosition === photos.length-1 ? 0 : curPosition+1
    }
    choosePhoto(nextPosition)
}

function choosePhoto(index) {
    miniesContainer.querySelector(".active").classList.remove("active")
    imagesContainer.querySelector(".active").classList.remove("active")
    document.getElementById(`img_${index}`).classList.add("active")
    document.getElementById(`img_mini_${index}`).classList.add("active")
}

document.querySelectorAll(".arrow").forEach(elem => {
    elem.addEventListener('click', nextPhoto)
})
