let a="";
const api_key="6b4e62be36709935ed7697813389cc3e";

const resultdiv=document.getElementById("result");
async function getweather(){
  const b=document.getElementById("place").value;
  a=b;
  console.log(a)
  const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(a)}&appid=${api_key}&units=metric`;

try{
  console.log(api_url);
  const response=await fetch(api_url);
  if(!response.ok){
    alert("enter proper name");
  }
  const data= await response.json();


  resultdiv.innerHTML = `
      <h2>Weather in ${data.name}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    `;
  } catch (error) {
    resultdiv.innerHTML = `Error: ${error.message}`;
  }
}

