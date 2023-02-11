const ramenAPI =  'http://localhost:3000/ramens'
const addRamenForm = document.querySelector("#new-ramen")
addRamenForm.addEventListener('submit', addNewRamen)
fetch(ramenAPI)
.then(response => response.json())
.then(data => {
    data.forEach((data) =>{
        renderRamens(data)
    })
})

function renderRamens(data){
    const ramenHeader = document.getElementById('ramen-menu')
    ramenImage  =document.createElement('img')
    ramenImage.src = data.image
    ramenHeader.appendChild(ramenImage)

    ramenImage.addEventListener('click', () => {
        renderInfo(data)
    })
}

function renderInfo(data){
    const ramenImage = document.getElementById('"detail-image"')
    //ramenImage.src = data.image
    const ramenName = document.getElementById("detail-name")
    ramenName.textContent= data.name
    const ramenRestaurant= document.getElementById("detail-restaurant")
    ramenRestaurant.textContent= data.restaurant
    const ramenRating = document.getElementById('rating-display')
    ramenRating.textContent= data.rating
    const comment = document.getElementById('comment-display')
    comment.textContent= data.comment
    const bigPicture = document.getElementById('detail-image')
    bigPicture.src = data.image

}
function el(id){
    return document.getElementById(id)
}

function addNewRamen(e){
    e.preventDefault();
    
    const newRamen = {
     name: e.target.name.value,
     restaurant: e.target.restaurant.value,
     image: e.target.image.value,
     rating: e.target.rating.value,
     comment: e.target['new-comment'].value,
    }
    renderRamens(newRamen);
    e.target.reset();
}


