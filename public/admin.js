let properties = JSON.parse(localStorage.getItem("properties"))
  ? JSON.parse(localStorage.getItem("properties"))
  : [
      {
        id: 1,
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

function displayListing(properties) {
  document.querySelector("#listingContent").innerHTML = "";

  properties.forEach((property, i) => {
    document.querySelector("#listingContent").innerHTML += `
      <tr>
        <td>${property.id}</td>
        <td>${property.title}</td>
        <td>${property.area}</td>
        <td><img src=${properties[i].image} style="width: 100px;"></td>
        <td>${property.type}</td>
        <td>${property.bedrooms}</td>
        <td>${property.baths}</td>
        <td>${property.garage}</td>
        <td>${property.size}</td>
        <td>${property.price}m²</td>
        <td><button type='button' 
                 onclick='propertyDelete(${property.id});'>
                 <i class="fa-solid fa-trash-can"></i></button>
            <button type='button' onclick='propertyEdit(${property.id});'>
              <i class="fa-solid fa-pencil"></i></button></td>
      <tr>
    `;
  });
}

displayListing(properties);

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
  localStorage.setItem("properties", JSON.stringify(properties));
  displayListing(properties);
  console.log(properties);
}

// EDIT
function propertyEdit(id) {
  let property = properties.find((property) => property.id === id);
  property.title = "new";
  localStorage.setItem("properties", JSON.stringify(properties));
  displayListing(properties);
}

//DELETE
// function propertyDelete(id) {
//   const propertyIndex = properties.indexOf((property) => property.id === id);
//   properties.splice(propertyIndex, 1);
//   localStorage.setItem("properties", JSON.stringify(properties));
//   displayListing(properties);
// }

function propertyDelete(id) {
  properties = properties.filter((property) => {
    return property.id != id;
  });
  localStorage.setItem("properties", JSON.stringify(properties));

  displayListing(properties);
}
