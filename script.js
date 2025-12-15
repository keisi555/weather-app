const citySelect = document.getElementById("citySelect");
const result = document.getElementById("result");

// Temperaturat (tani nuk janë më direkt në HTML)
const temperatures = {
  "Prishtinë": "12°C",
  "Tiranë": "15°C",
  "Shkup": "10°C"
};

// Kur përdoruesi zgjedh qytetin
citySelect.addEventListener("change", () => {
  const city = citySelect.value;

  if (city !== "") {
    const temp = temperatures[city];
    result.textContent = `Temperatura në ${city} është ${temp}`;

    // 👉 RUAN në localStorage
    localStorage.setItem("city", city);
    localStorage.setItem("temperature", temp);
  }
});

// 👉 LEXON nga localStorage kur rifreskohet faqja
window.addEventListener("load", () => {
  const savedCity = localStorage.getItem("city");
  const savedTemp = localStorage.getItem("temperature");

  if (savedCity && savedTemp) {
    citySelect.value = savedCity;
    result.textContent = `Temperatura në ${savedCity} është ${savedTemp}`;
  }
});
