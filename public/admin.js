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
        status: "Rent",
        size: "476",
        price: "23 950 000",
      },
    ];
console.log(properties);

function displayListing(properties) {
  document.querySelector("#listingContent").innerHTML = "";

  properties.forEach((property, i) => {
    document.querySelector("#listingContent").innerHTML += `
      <tr>
        <td>${property.id}</td>
        <td><input id="title${property.id}" value=${property.title} disabled /></td>
        <td><input id="area${property.id}" value=${property.area} disabled /></td>
        <td><input id="image${property.id}" value=${property.image} disabled /></td>
        <td><input id="type${property.id}" value= ${property.type} disabled /></td>
        <td><input id="bedrooms${property.id}" value=${property.bedrooms} disabled /></td>
        <td><input id="baths${property.id}" value=${property.baths} disabled /></td>
        <td><input id="garage${property.id}" value=${property.garage} disabled /></td>
        <td><input id="status${property.id}" value=${property.status} disabled /></td>
        <td><input id="size${property.id}" value=${property.size}m² disabled /></td>
        <td><input id="price${property.id}" value=${property.price} disabled /></td>
        <td><button type='button' onclick='propertyDelete(${property.id});'><i class="fa-solid fa-trash-can"></i></button></td>
            <td><i class="fa-solid fa-pencil" id="edit${property.id}" onclick="propertyEdit(${property.id})"></i></td>
            <button type='button' class="btn" id="save${property.id}" onclick="saveItem(${property.id})" style="display: none">Save</button>
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
    status: document.querySelector("#Status").value,
  };
  properties.push(property);
  localStorage.setItem("properties", JSON.stringify(properties));
  displayListing(properties);
  console.log(properties);
}

// EDIT
// function propertyEdit(id) {
//   let property = properties.find((property) => property.id === id);
//   property.title = "new";
//   localStorage.setItem("properties", JSON.stringify(properties));
//   displayListing(properties);
// }

function propertyEdit(id) {
  document.querySelector(`#title${id}`).disabled = false;
  document.querySelector(`#area${id}`).disabled = false;
  document.querySelector(`#image${id}`).disabled = false;
  document.querySelector(`#type${id}`).disabled = false;
  document.querySelector(`#bedrooms${id}`).disabled = false;
  document.querySelector(`#baths${id}`).disabled = false;
  document.querySelector(`#garage${id}`).disabled = false;
  document.querySelector(`#status${id}`).disabled = false;
  document.querySelector(`#size${id}`).disabled = false;
  document.querySelector(`#price${id}`).disabled = false;

  document.querySelector(`#save${id}`).style.display = "inline-block";
  document.querySelector(`#edit${id}`).style.display = "none";
}

//  <button type='button' class="btn" id="edit${property.id}  onclick='propertyEdit(${property.id});' >
//               </button>

//DELETE's the last option
// function propertyDelete(id) {
//   const propertyIndex = properties.indexOf((property) => property.id === id);
//   properties.splice(propertyIndex, 1);
//   localStorage.setItem("properties", JSON.stringify(properties));
//   displayListing(properties);
// }

//DELETE's the slected option
function propertyDelete(id) {
  properties = properties.filter((property) => {
    return property.id != id;
  });
  localStorage.setItem("properties", JSON.stringify(properties));

  displayListing(properties);
}
