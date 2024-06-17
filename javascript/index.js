function updateTime() {
  //dublin
  let dublinElement = document.querySelector("#dublin");
  let dublinDateElement = dublinElement.querySelector(".date");
  let dublinTimeElement = dublinElement.querySelector(".time");
  let dublinTime = moment().tz("Europe/Dublin");

  dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
  dublinTimeElement.innerHTML = dublinTime.format(
    "hh:mm:ss [<small>]A[<small>]"
  );

  //fortaleza
  let fortalezaElement = document.querySelector("#fortaleza");
  let fortalezaDateElement = fortalezaElement.querySelector(".date");
  let fortalezaTimeElement = fortalezaElement.querySelector(".time");
  let fortalezaTime = moment().tz("America/Fortaleza");

  fortalezaDateElement.innerHTML = fortalezaTime.format("MMMM Do YYYY");
  fortalezaTimeElement.innerHTML = fortalezaTime.format(
    "hh:mm:ss [<small>]A[<small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
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
