alert("WELCOME TO MY JOKE GENERATOR")
const btnEl  = document.getElementById("btn")
 const jokeEl = document.getElementById("joke")


const apikey = "GAqvPktFsgeWg7iWbIbt7Q==1kzANE4aeliqy852";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){

    try {
        joke.innerText = "Updating..."
        btnEl.disabled = true
        btnEl.innerText = "Loading..."
        const response = await fetch(apiURL, options)
        const data = await response.json()

        btnEl.disabled = false
        btnEl.innerText = "GENERATE"

        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error has ocurred, try again later";
        console.log(error)
        btnEl.disabled = false
        btnEl.innerText = "GENERATE"
    }

    
}

 btnEl.addEventListener("click", getjoke) 