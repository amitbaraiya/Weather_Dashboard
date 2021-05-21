let weather = {
    apikey:"e3351dbb1f28b9c5f6efe2d0dce29eef",
    fetchWeather : function(city){
        fetch("http://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=metric&appid="
            + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").scr = 
        "https://openweathermap.org/img/wn/"+ icon +"01n@2x.png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed : " + speed + "km/h" ;
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
var dt = new Date();
document.getElementById("date-time").innerHTML = dt.toLocaleString();


document
.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();
});

document
.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});