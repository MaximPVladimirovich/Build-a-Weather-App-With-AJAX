let weatherData;
let $city = $(`.city`)
let $Temperature = $(`#Temperature`)
let $feelslike = $(`#feelslike`)
let $Weather = $(`#Weather`)
let $search = $(`#search`).val();
// Event listener
$(`form`).on(`submit`, handleGetData)


function handleGetData(e) {
    e.preventDefault()
    $.ajax({ url: `https://api.openweathermap.org/data/2.5/find?q=${$search}&units=imperial&appid=64e7f657bf7f223debad558c646756af` }).then(function (data) {
        updateHtml(data);
    })
}

function updateHtml(data) {
    $city.text(data.list[0].name);
    $Temperature.text(data.list[0].main.temp);
    $feelslike.text(data.list[0].main.feels_like);
    $Weather.text(data.list[0].weather[0].main);
}

