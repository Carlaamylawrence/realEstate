let properties = JSON.parse(localStorage.getItem("properties"))
  ? JSON.parse(localStorage.getItem("properties"))
  : [
      {
        title: "Revamped Family Home",
        area: "Atlantic Seaboard",
        image: "https://i.postimg.cc/hGYJBkr2/pexels-mark-mccammon-2724749.jpg",
        type: "House",
        bedrooms: "5",
        baths: "5",
        garage: "3",
        size: "476",
        price: "23 950 000",
      },
    ];

function showListings(properties) {
  document.querySelector("#displayListings").innerHTML = "";
  properties.forEach((property, i) => {
    document.querySelector("#displayListings").innerHTML += `
    <div class="property-card col-md-6 d-flex flex-column align-items-center">
      <img src=${properties[i].image} style="width: 350px;" >
      <div class="price-details">
        <p>R ${property.price}</p>
      </div>
      <h4> ${property.title} </h4>
      <div class="property-info">
        <li><i class="fa-solid fa-bed"></i> ${property.bedrooms}</li>
        <li><i class="fa-solid fa-shower"></i> ${property.baths}</li>
        <li><i class="fa-solid fa-car"></i> ${property.garage}</li>
         <li><i class="fa-solid fa-ruler"></i> ${property.size}m² </li>
      </div>
    </div>
    `;
  });
}
showListings(properties);

function getSelectedValue(e) {
  const category = e.target.value;
  if (category === "all") {
    return showListings(properties);
  }
  const filtered = properties.filter(
    (property) => property.category === category
  );

  return showListings(filtered);
}

const sortedPrice = (e) => {
  const direction = e.target.value;
  const sorted = properties.sort((a, b) => a.price - b.price);
  if (direction === "ascending") {
    showListings(sorted);
  } else {
    showListings(sorted.reverse());
  }
};

const sortedName = (e) => {
  const direction = e.target.value;
  const sorted = properties.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  if (direction === "ascending") {
    showListings(sorted);
  } else {
    showListings(sorted.reverse());
  }
};

const textSearch = (e) => {
  const text = e.target.value;
  const filteredproperties = properties.filter((property) =>
    property.title.toLowerCase().includes(text.toLowerCase())
  );
  showListings(filteredproperties);
};
