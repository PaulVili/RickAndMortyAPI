const persons = document.querySelector(".persons");

fetch('https://rickandmortyapi.com/api/character')
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    res.results.forEach((res=>{
        "" == res.type && (res.type = "Нет типа"),
        persons.innerHTML += `
        \n <div class="personsBlock">
            \n <img src="${res.image}" alt="">
            \n <div class="personsBlockText">
                    \n <div class="presonsBlockTextInfo">
                        \n <p>${res.name}</p>
                        \n <p>${res.species}</p>
                        \n <p>${res.type}</p>
                        \n <p>${res.status}</p>
                        </div>
                </div>
            </div> `
    }))
  });