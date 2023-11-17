
const getTitle = document.querySelector("#title");
const Joke = document.querySelector("#joke");

fetch("https://v2.jokeapi.dev/joke/any?")
.then(data => data.json())
.then(res =>{
    let jokeCategory = res.category
    let joke;
    
    if(res.setup){
        joke = res.setup
    }
    else{
        joke = res.joke
    }
    const btn = document.querySelector("#btn");

        getTitle.innerHTML = jokeCategory
        Joke.innerHTML = joke
        if(btn){

            btn.addEventListener("click" , ()=>{
                location.reload()
            })
        }
       
    })


