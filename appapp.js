const elInput = document.querySelector("input");
const elselect = document.querySelector("select")
const filmsWrapper = document.querySelector(".films__wrapper")
const film = document.querySelector(".film")

console.log(film)

function displayM (films){
let i = 0;
while(i < films.length){
    filmsWrapper.insertAdjacentHTML(
      `beforeend`,
        `
             <li class="film__box">
            <img
              src ="${films[i].poster}"
              alt="shazam"
              class="film-img"
            />
            <div class="film__info">
              <p class="film__id">Film id: ${films[i].id}</p>
              <h2 class="film__title">${films[i].title}!</h2>

              <p class="film__date">${films[i].release_date}</p>

              <ul class="film__genres">
                <li class="film__genre">${films[i].genres[0]}</li>
                <li class="film__genre">${films[i].genres[1]}</li>
                <li class="film__genre">${films[i].genres[2]}</li>
              </ul>

              <div class="film__buttons">
                <button class="btn-more">More</button>
                <button class="btn-save">Save</button>
              </div>
            </div>
          </li>
        `
    )
    i++
}
}


function upM (){
    const inputVaalue = elInput.value;
    const selectVaalue = elselect.value;
    let filteredM = films.filter((el) => {
       return el.title.toLowerCase().includes(inputVaalue.toLowerCase())
    })
    console.log(inputVaalue)
    console.log(filteredM)
    if (selectVaalue === "z-a"){
        filteredM.sort((a,b) => b.title.localeCompare(a.title))
    }
    if (selectVaalue === "a-z"){
        filteredM.sort((a,b) => a.title.localeCompare(b.title))
    }
    console.log(selectVaalue)
    filmsWrapper.textContent ="";
    displayM(filteredM)
}

displayM(films)
elInput.addEventListener("input", upM)
elselect.addEventListener("change", upM)

