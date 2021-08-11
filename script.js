window.addEventListener("load", () => {
  createFlag(countriesInfo);
});

function createFlag(countriesInfo) {
  const info = document.createElement("div");
  info.setAttribute("class", "flags-container");
  let countries = countriesInfo.map((country) => {
    return `
  <div class="flag-container">
  <img class="flag" src=${country.flag}
width="250px" height="150px"/>
 
<div class="details"
  <h3>${country.name}</h3>
<p><b>population:</b>${country.population}</p>
  <p><b>region:</b>${country.region}</p>
    <p><b>capital:</b>${country.capital}</p>
    </div>
     </div>
  `;
  });
  info.innerHTML = countries.join(" ");
  console.log(info);
  document.body.append(info);
}

let countriesInfo = [
  {
    name: "India",
    population: "1,394,975,829",
    region: "Asia",
    flag: "https://m.media-amazon.com/images/I/41JINRlOkpL._AC_SS450_.jpg",
  },

  {
    name: "India",
    population: "1,394,975,829",
    region: "Asia",
    flag: "https://m.media-amazon.com/images/I/41JINRlOkpL._AC_SS450_.jpg",
    capital: "New delhi",
  },
  {
    name: "India",
    population: "1,394,975,829",
    region: "Asia",
    flag: "https://m.media-amazon.com/images/I/41JINRlOkpL._AC_SS450_.jpg",
    capital: "New delhi",
  },
  {
    name: "U.S.A",
    population: "1,394,975,829",
    region: "Europe",
    flag: "https://m.media-amazon.com/images/I/41JINRlOkpL._AC_SS450_.jpg",
    capital: "New delhi",
  },
  {
    name: "India",
    population: "1,394,975,829",
    region: "Asia",
    flag: "https://m.media-amazon.com/images/I/41JINRlOkpL._AC_SS450_.jpg",
    capital: "New delhi",
  },
];
