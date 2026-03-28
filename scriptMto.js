
// Select élément
const InputVille = document.getElementById("ville")
const recherchBtn = document.getElementById("recherch")
const villeName = document.getElementById("villeName")
const temperature = document.getElementById("temperature")
const description = document.getElementById("description")
const humidity = document.getElementById("humidity")
const longitude = document.getElementById("longitude")
const latitude = document.getElementById("latitude")
const wind = document.getElementById("wind")
const icon = document.getElementById("Icon")
const loader = document.getElementById("loader") //Loader

//Loader
loader.style.display = "block" 

// key API
const apiKey = "c023db05a5c33ac611407204fdac4454"

async function getmeteo(ville){

//If ville est vide
if(ville === ""){
alert("Veuillez entrer une ville")
return
}





// URL API
const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric`

//Appel API
const response = await fetch(url)
const data = await response.json()

//If ville incorrecte
if(data.cod == 404){
alert("Ville non trouvée")
return
}
InputVille.focus() //Fixer le curseur dans l'input


loader.style.display = "none"



//View
villeName.textContent = data.name

temperature.textContent = "Temperature : " + data.main.temp + " °C"

longitude.textContent = "Longitude : " + data.coord.lon.toFixed(6)

latitude.textContent = "Latitude : " + data.coord.lat.toFixed(6)

humidity.textContent = "Humidité : " + data.main.humidity + "%"

wind.textContent = "Vent : " + data.wind.speed + " m/s"

//Icone météo
const iconCode = data.weather[0].icon
icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}

//Btn Search (Event)
recherchBtn.addEventListener("click", function(){
const ville = InputVille.value
getmeteo(ville)

//Clear input after view informations
InputVille.value = ""
InputVille.focus() //Fixer le curseur dans l'input
})


// CHANGEMENT BACKGROUND de l'ENVIRONNEMENT METEOLOGIE

const weatherMain = data.weather[0].main

if(weatherMain === "Clear"){
document.body.style.background = "linear-gradient(to right, #fceabb, #f8b500)"
}

else if(weatherMain === "Clouds"){
document.body.style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)"
}

else if(weatherMain === "Rain"){
document.body.style.background = "linear-gradient(to right, #4b79a1, #283e51)"
}

else{
document.body.style.background = "#333"
}