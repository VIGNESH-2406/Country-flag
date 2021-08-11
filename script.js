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
    capital: "New delhi",
  },

  {
    name: "U.S.A",
    population: "1,394,975,829",
    region: "Asia",
    flag: "https://image.shutterstock.com/image-illustration/waving-flag-usa-260nw-134664275.jpg",
    capital: "Washington d.c",
  },
  {
    name: "Canada",
    population: "1,394,975,829",
    region: "Asia",
    flag: "https://i.pinimg.com/originals/17/39/da/1739da538385d8c8c7cd274752b498f5.jpg",
    capital: "Ottawa",
  },
  {
    name: "Italy",
    population: "1,394,975,829",
    region: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png",
    capital: "Rome",
  },
  {
    name: "Japan",
    population: "1,394,975,829",
    region: "Asia",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
    capital: "Tokyo",
  },
];
