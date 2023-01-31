


fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=1677f748732310f650100de24bc48f69")
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