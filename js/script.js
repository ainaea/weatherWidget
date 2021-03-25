// const para = document.getElementById("textbox");
const btn = document.getElementById("btn");

// para.textContent = 'js is working';

// document.addEventListener('DOMContentLoaded',function(){
//     document.getElementById('getMessage').onclick= () => {
//       // Add your code below this line
//   fetch('/json/cats.json')
// 	.then(response => response.json())
// 	.then(data => {
// 		document.getElementById('message').innerHTML = JSON.stringify(data);
// 	})


//       // Add your code above this line
//     };
//   });

btn.addEventListener('click', serverCall);

// function hello() {
//     // alert("hello");
//     para.textContent = 'js is working';

// }

function serverCall() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=0949a2d7150315e6b0cf4932317c8064')
	.then(response => response.json())
	.then(data => {
		// document.getElementById('para').innerHTML = "JSON.stringify(data)";
        console.log(data);
        // change text content using txtContent('summary', 'not groovy');
        txtContent('temp', (data.main.temp - 273).toFixed(2));
        txtContent('windspd', data.wind.speed);
        txtContent('windDir', data.wind.deg);
        txtContent('humidity', data.main.humidity);
        txtContent('summary', data.weather[0].description);



	})
}

function txtContent(id, params) {
    document.getElementById(id).textContent = params;
}

// txtContent('summary', 'not groovy');