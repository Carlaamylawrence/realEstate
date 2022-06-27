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
        size: "476 m²",
        price: "23 950 000",
      },
    ];

// READ
function showListings(properties) {
  document.querySelector("#displayListings").innerHTML = "";
  properties.forEach((property, i) => {
    document.querySelector("#displayListings").innerHTML += `
    <img src=${properties[i].image} style="width: 300px; height 400px;" >
    <p> ${property.title} </p>
    `;
  });
}
showListings(properties);

// CREATE
function addListing() {
  let property = {
    id: properties.length + 1,
    title: document.querySelector("#Title").value,
    area: document.querySelector("#Location").value,
    image: document.querySelector("#Image").value,
    type: document.querySelector("#Type").value,
    bedrooms: document.querySelector("#Bedrooms").value,
    baths: document.querySelector("#Bathrooms").value,
    garage: document.querySelector("#Garage").value,
    size: document.querySelector("#Size").value,
    price: document.querySelector("#Price").value,
  };
  properties.push(property);
  localStorage.setItem("properties", JSON.stringify("properties"));
  showListings(properties);
  console.log(properties);
}

//DELETE
function deleteTask() {
  const propertyIndex = properies.indexOf((property) => property.id === id);
  properties.splice(propertyIndex, 1);
  localStorage.setItem("properties", JSON.stringify(properties));
  showListings(properties);
}
