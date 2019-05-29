let selectedMovie = document.getElementById('movie')
let p = document.querySelector('p')
console.log(selectedMovie.value)

selectedMovie.addEventListener('click', function(event) {
    p.innerHTML = `The selected movie is: ${selectedMovie.value}`
    
})


let selectGenre = document.getElementById('genre')

selectGenre.addEventListener('click', function(event){
    if (selectGenre.value === selectedMovie.genre){

    }


})