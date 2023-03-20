const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  //   console.log(countries[0]);
  const countriesHTML = countries.map((country) => getCountryHTML(country));
  const container = document.getElementById("countries");
  container.innerHTML = countriesHTML.join(" ");
};

// const getCountryHTML = (country) => {
// option 1: general
//   return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `;

// option 2: destructuring
//   const { name, flags } = country;
//   return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `;
// };

const getCountryHTML = ({ name, flags, area, region }) => {
  // option 3: parameter destructuring
  return `
          <div class="country">
              <h2>${name.common}</h2>
              <p>Area: ${area}</p>
              <p>Continent: ${region}</p>
              <img src="${flags.png}">
          </div>
      `;
};

loadCountries();
