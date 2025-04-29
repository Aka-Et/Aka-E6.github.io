const apiKey="dca11ea0658d73309047ffe7da803f6f"
let button=document.querySelector('button')
let img=['snow.jfif','rainy.jfif','sunny.jfif']

async function WeatherApp(city) {
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

    const response= await fetch(apiUrl +`&appid=${apiKey}`)
    var data=await response.json();

    if(data.cod===200){
        let weather=data.main
    document.querySelector('.degree').innerHTML=Math.round(weather.temp)+`°C`;
    document.querySelector('.humidity').innerHTML=weather.humidity+`%`;
    document.querySelector('.wind').innerHTML=data.wind.speed+`km/h`;
    document.querySelector('.city').innerHTML=data.name;
   
   
    /// check temp and change img

    if(data.weather[0].main==='Clouds'){
        let mainImg=document.querySelector('.icon');
        mainImg.src='sun.jfif'
          mainImg.classList="icon"
    }
    else if(data.weather[0].main==='Clear'){
        let mainImg=document.querySelector('.icon');
        mainImg.src='sun.jfif'
          mainImg.classList="icon"
    }
    else if(data.weather[0].main==='Rain'){
        let mainImg=document.querySelector('.icon');
        mainImg.classList="icon"
        mainImg.src='rain.jpg'
    }
    else{

    }

}
    else{
        alert('City not found')
    }

   console.log(data);
}

    button.addEventListener('click',()=>{
        let userCity=document.querySelector('input').value;
        let inputField = document.querySelector('input');
       
        if(userCity){
            WeatherApp(userCity);
            inputField.value="";
          
        }
    })
