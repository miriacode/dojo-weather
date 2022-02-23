const alertWindow = document.querySelector("#loeading-announcement");
const main = document.querySelector(".main");

function alertFunction() {
  const cloneWindow = document.importNode(alertWindow.content, true);
  main.appendChild(cloneWindow);
}


function dismissCookie(parameter) {
  parameter.parentNode.parentNode.remove();
}


function changeTemperature(parameter) {
  debugger;
  const temperatures = [...document.querySelectorAll(".days__min-max > div")];
  let signTemperature = parameter.value;

  for (let i = 0; i < temperatures.length; i++) {
    let temperatureString = temperatures[i].textContent;
    let temperature = parseInt(
      temperatureString.substring(0, temperatureString.indexOf("°"))
    );

    let newTemperature = 0;
    if (signTemperature == "C") {
      newTemperature = Math.round(((temperature - 32) * 5) / 9);
      //F a C
    } else if (signTemperature == "F") {
      //C a F
      newTemperature = Math.round(temperature * (9 / 5)) + 32;
    }
    const id = document.querySelector(`#temp-${i + 1}`);
    id.textContent = `${newTemperature}°`;
  }
}
