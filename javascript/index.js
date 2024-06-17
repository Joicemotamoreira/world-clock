let genericCityEventValue = null;

function updateTime() {
  //dublin
  let dublinElement = document.querySelector("#dublin");
  if (!!dublinElement) {
    let dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = dublinElement.querySelector(".time");
    let dublinTime = moment().tz("Europe/Dublin");

    dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
    dublinTimeElement.innerHTML = dublinTime.format(
      "hh:mm:ss [<small>]A[<small>]"
    );
  }

  //fortaleza
  let fortalezaElement = document.querySelector("#fortaleza");
  if (!!fortalezaElement) {
    let fortalezaDateElement = fortalezaElement.querySelector(".date");
    let fortalezaTimeElement = fortalezaElement.querySelector(".time");
    let fortalezaTime = moment().tz("America/Fortaleza");

    fortalezaDateElement.innerHTML = fortalezaTime.format("MMMM Do YYYY");
    fortalezaTimeElement.innerHTML = fortalezaTime.format(
      "hh:mm:ss [<small>]A[<small>]"
    );
  }

  let genericCityElement = document.querySelector("#genericCity");
  if (!!genericCityElement) {
    let genericCityDateElement = genericCityElement.querySelector(".date");
    let genericCityTimeElement = genericCityElement.querySelector(".time");
    let genericCityTime = moment().tz(genericCityEventValue);

    genericCityDateElement.innerHTML = genericCityTime.format("MMMM Do YYYY");
    genericCityTimeElement.innerHTML = genericCityTime.format(
      "hh:mm:ss [<small>]A[<small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  genericCityEventValue = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" id="genericCity">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format(
              "hh:mm:ss"
            )} <small>${cityTime.format("A")}</small></div>
          </div>
        </div>
        <a href="/">All cities</a>
  `;
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
