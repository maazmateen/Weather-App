// console.log("hello world");
const input = document.querySelector("#input")
const button = document.querySelector("#btn")
const div = document.querySelector(".main")

div.innerHTML =`
    <div class="top"><i class="fa-solid fa-up-long"></i></div>
    <h1 class="null">Type City Name</h1>`


button.addEventListener("click",()=>{
    // console.log("hellow orld");
    console.log(input.value);

fetch(`https://api.weatherapi.com/v1/current.json?key=46e417ccc1494938bdb160136241811&q=${input.value}&aqi=no`)
.then((res)=>res.json())
.then((res)=>{
    console.log(res);
    div.innerHTML = `
    <div class="navbar">
    <i class="fa-solid fa-location-dot" ></i><h3 class="grey">${res.location.name} , ${res.location.country}</h3>
    </div>
    <div class="section2">
    <h3 class="grey">${res.location.region}</h3>
    </div>
    <p class="para">Today</p>
   <div class="section1">
    <img src="${res.current.condition.icon}" alt="weatherImage" width="150px"><h1>${res.current.temp_c}°C</h1>
    </div>
    <div class="section2">
    <h2 class="grey">Feels Like : ${res.current.feelslike_c}°C</h2>
    </div>
    <div class="section2">
        <h2 class="grey">Humidity : ${res.current.humidity}°C</h2>
    </div>
    <div class="section2">
        <h2 class="grey">Winds Speed : ${res.current.wind_kph}°C</h2>
    </div>
    <div class="section2">
        <p class="grey">${res.current.condition.text}</p>
    </div>
    <div class="section2">
    <h3 class="grey">Local Time : ${res.location.localtime}</h3>
    </div>
    
    `    
})
.catch((err)=>{
    console.log(err);
    Swal.fire({
  title: "The Internet?",
  text: "Reload before Enter a valid country Or city",
  icon: "question"
});
    
    
})
})






//api key     (46e417ccc1494938bdb160136241811)        //