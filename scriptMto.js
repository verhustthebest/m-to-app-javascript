// ==========================
// Sélection des éléments HTML (DOM)
// ==========================

const InputVille = document.getElementById("ville")
const recherchBtn = document.getElementById("recherch")
const villeName = document.getElementById("villeName")
const temperature = document.getElementById("temperature")
const description = document.getElementById("description")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
const icon = document.getElementById("Icon")


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

//View
villeName.textContent = data.name

temperature.textContent = "Temperature : " + data.main.temp + " °C"

description.textContent = "Condition : " + data.weather[0].description

humidity.textContent = "Humidité : " + data.main.humidity + "%"

wind.textContent = "Vent : " + data.wind.speed + " m/s"

//Icone mééo
const iconCode = data.weather[0].icon
icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}

//Btn Search (Event)
recherchBtn.addEventListener("click", function(){
const ville = InputVille.value
getmeteo(ville)

//Clear input after view informations
InputVille.value = ""
})
