
let inputGroup = document.querySelector(".input-group-append");
// let searchCity = document.querySelector("#search-input");


inputGroup.addEventListener("click", function(event){

    console.log(e.target);
    if(event.target.matches("#search-button")){
        let searchCity = document.querySelector("#search-input");
        


        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=1677f748732310f650100de24bc48f69`)
        .then((res) => res.json())
        .then(citiesFound => {
            let firstCity = citiesFound[0];
            console.log(firstCity.lat);
            console.log(firstCity.lon);
        
           return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=1677f748732310f650100de24bc48f69`)
        })
        // fetch("http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=1677f748732310f650100de24bc48f69")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }

    

})


