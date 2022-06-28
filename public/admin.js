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
        <td>${property.price}</td>
        <td><i class="fa-solid fa-trash-can"><i class="fa-solid fa-pencil"></i></i></td>
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
// UPDATE
// function editContent(event) {
//   let properties = Array.from(JSON.parse(localStorage.getItem("properties")));
//   if (event.value === "") {
//     alert("Content is empty!");
//     event.value = currentContent;
//     return;
//   }
//   properties.forEach((property) => {
//     if (property.property === event.value) {
//       alert("Content already exist!");
//       event.value = currentContent;
//       return;
//     }
//   });
//   properties.forEach((property) => {
//     if (property.property === currentContent) {
//       property.property = event.value;
//     }
//   });
//   localStorage.setItem("properties", JSON.stringify(property));
// }

//DELETE
function deleteTask() {
  const propertyIndex = properies.indexOf((property) => property.id === id);
  properties.splice(propertyIndex, 1);
  localStorage.setItem("properties", JSON.stringify(properties));
  showListings(properties);
}
