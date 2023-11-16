const img = document.querySelector('#img')
const row = document.querySelector('.row')
const compound = document.querySelector('#compound')
const name = document.querySelector('#name')
const all = document.querySelector('#all')
const search = document.querySelector('#search')
const inner = document.querySelector('.inner')
const poisk = document.querySelector("#poisk")
const searchInput = document.querySelector("#searhInput")
const searchBox = document.querySelector('#hiddenWrapper')
const searchImg = document.querySelector('#searchImg')
const ing = document.querySelector('#ing')
const ing3 = document.querySelector('#ing3')


all.addEventListener('change', () => {
    if (all.checked) {
        row.classList.remove('hidden')
        search.classList.add('hidden')
    }
})

search.addEventListener('change', () => {
    if (search.checked) {
        search.classList.remove('hidden')
        row.classList.add('hidden')
    }
})



const handleGetCountries = () => {
    fetch(`https://www.themealdb.com/api/json/v2/1/randomselection.php`)
        .then(res => res.json())
        .then(json => {
            json.meals.forEach(meals => {
                row.innerHTML += `
            <div class = "col-3">
                <div class = "card">
                  <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h2 class="card-title">${meals.strMeal}<?h2>
                  </div>
                </div>
            </div>
            `
            })
        })

}

handleGetCountries()


all.addEventListener('change', () => {
    if (all.checked) {
        row.classList.remove('hidden')
        searchBox.classList.add('hidden')
    }
})

search.addEventListener('change', () => {
    if (search.checked) {
        searchBox.classList.remove('hidden')
        row.classList.add('hidden')
    }
})


searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        performSearch()
        poisk.click()
    }
});


poisk.addEventListener('click',()=>{
    const value = searchInput.value;
    console.log(value)

    fetch(`https://www.themealdb.com/api/json/v2/1/randomselection.php?s=${value}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            searchImg.src = json.meals[0].strMealThumb
            compound.innerHTML = json.meals[0].strInstructions
            name.innerHTML = json.meals[0].strIngredient1
            ing.innerHTML = json.meals[0].strIngredient2
            ing3.innerHTML = json.meals[0].strIngredient3

        })
})

