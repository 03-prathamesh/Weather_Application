const main_url="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

let bt=document.querySelector("#btn");
let locat=document.querySelector("#loc");
let temp=document.querySelector(".tmp");
let des=document.querySelector(".description");
let humidity=document.querySelector("#humiditisDegree");
let wind=document.querySelector("#wspeedkm");
let img=document.querySelector(".weather-image");
let lnf=document.querySelector(".location-not-found");
let weather=document.querySelector(".weather-body");
let weather_temp=document.querySelector(".weather-temp");




async function  checkWeather(city){

    const API_key="6ae63a96238761312af288cbf9243f49";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
    const weather_data=await fetch(`${url}`);
    let  data= await weather_data.json();


    if(data.cod===`404`){
        img.src="images/404.png";
        lnf.style.display="flex";
        weather.style.display="none";
        weather_temp.style.display="none";
        // alert('error');
        return 
    }
    // console.log(data);
    lnf.style.display="none";
    weather.style.display="flex";
    weather_temp.style.display="flex";


    
    temp.innerHTML=`${Math.round(data.main.temp-273.15)}°C`;
    des.innerHTML=`${data.weather[0].description}`;
    humidity.innerHTML=`${data.main.humidity} %`;
    wind.innerHTML=`${data.wind.speed}Km/H`;


    

   
    if(data.weather[0].main=="Clouds"){
        img.src="images/cloud.png";
    }
    else if(data.weather[0].main=="Clear"){
        img.src="images/clear.png";
    }
    else if (data.weather[0].main=="Rain"){
        img.src="images/rain.png";

    }else if(data.weather[0].main=="Mist"){
        img.src="images/mist.png";
    }
    else if(data.weather[0].main=="Snow"){
        img.src="images/snow.png";
    }


   
}

bt.addEventListener("click",()=>{

   checkWeather(locat.value);

});