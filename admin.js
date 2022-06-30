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
      price: "16500",
    },
    {
      id: 2,
      title: "Modern Apartment",
      area: "Cape Town",
      image: "https://vanguardsandton.com/wp-content/uploads/2021/06/Type-01-B-50.7L-View-01.jpg",
      type: "Apartment",
      bedrooms: "2",
      baths: "2",
      garage: "3",
      status: "Rent",
      size: "476",
      price: "8700",
    },
    {
      id: 3,
      area: "Atlantic Seaboard",
      baths: "4",
      bedrooms: "3",
      garage: "2",
      image:
        "https://i.postimg.cc/JhShgbrg/pexels-max-vakhtbovych-6585598.jpg",
      price: "13000000",
      size: "360",
      status: "Sale",
      title: "Modern Home",
      type: "Apartment",
    },
    {
      id: 4,
      area: "Cape Town",
      baths: "2",
      bedrooms: "2",
      garage: "2",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/72282092.jpg?k=5eeba7eb191652ce0c0988b4c7c042f1165b7064d865b096bb48b8c48bf191b9&o=&hp=1",
      price: "85000",
      size: "150",
      status: "Rent",
      title: "Stunning apartment",
      type: "Apartment",
    },
    {
      id: 5,
      area: "Southern Suburbs",
      baths: "3",
      bedrooms: "4",
      garage: "2",
      image: "https://i.postimg.cc/TLdxV2V8/pexels-pixabay-164558.jpg",
      price: "12600",
      size: "400",
      status: "Rent",
      title: "Cosy Family Home",
      type: "Family Home",
    },
    {
      id: 6,
      area: "Northen Suburbs",
      baths: "3",
      bedrooms: "3",
      garage: "2",
      image: "https://i.postimg.cc/wywp0K21/pexels-pixabay-221540.jpg",
      price: "2800000",
      size: "460",
      status: "Sale",
      title: "Homestead",
      type: "Family Home",
    },
    {
      id: 7,
      area: "Northen Suburbs",
      baths: "1",
      bedrooms: "1",
      garage: "1",
      image:
        "https://i.postimg.cc/SncbHYVF/pexels-vecislavas-popa-813692.jpg",
      price: "7000",
      size: "100",
      status: "Rent",
      title: "Bachelor Pad ",
      type: "Studio",
    },
    {
      id: 8,
      area: "Atlantic Seaboard",
      baths: "1",
      bedrooms: "1",
      garage: "1",
      image:
        "https://i.postimg.cc/Rq09qFCK/pexels-max-vakhtbovych-7166555.jpg",
      price: "6900",
      size: "100",
      status: "Rent",
      title: "Snazzy Studio",
      type: "Studio",
    },
    {
      id:9,
      title:"Lavish Furnished Home",
      area:"Southern Suburbs",
      image:"https://media.architecturaldigest.com/photos/571e97ce818277135ff91620/master/w_2626,h_1821,c_limit/modernist-decor-inspiration-07.jpg",
      type:"Family Home",
      bedrooms:"4",
      baths:"3",
      garage:"2",
      size:"450",
      price:"3200000",
      status:"Sale"},
      {
        id:10,
        title:"Spacious Studio",
        area:"Northen Suburbs",
        image:"http://cdn.home-designing.com/wp-content/uploads/2014/06/white-modern-studio-design.jpeg",
        type:"Studio",
        bedrooms:"1",
        baths:"1",
        garage:"1",
        size:"100",
        price:"6000",
        status:"Rent"},
  ];
console.log(properties);

function displayListing(properties) {
  let listContent = document.querySelector("#listingContent");

  listContent.innerHTML = "";
  properties.forEach((property, i) => {
    listContent.innerHTML += `
      <tr role="row">
        <td class="tableData" role="cell">${property.id}</td>
        <td class="tableData" role="cell"><input id="title${property.id}" value="${property.title}" disabled /></td>
        <td class="tableData" role="cell"><input id="area${property.id}" value="${property.area}" disabled /></td>
        <td class="tableData" role="cell"><input id="image${property.id}" value="${property.image}" disabled /><img src="${properties[i].image}" style= "width:100px;"></td>
        <td class="tableData" role="cell"><input id="type${property.id}" value= "${property.type}" disabled /></td>
        <td class="tableData" role="cell"><input id="bedrooms${property.id}" value="${property.bedrooms}" disabled /></td>
        <td class="tableData" role="cell"><input id="baths${property.id}" value="${property.baths}" disabled /></td>
        <td class="tableData" role="cell"><input id="garage${property.id}" value="${property.garage}" disabled /></td>
        <td class="tableData" role="cell"><input id="status${property.id}" value="${property.status}" disabled /></td>
        <td class="tableData" role="cell"><input id="size${property.id}" value="${property.size}"m² disabled /></td>
        <td class="tableData" role="cell"><input id="price${property.id}" value="${property.price}" disabled /></td>
        <td class="tableData" role="cell" ><i class="fa-solid fa-trash-can" onclick='propertyDelete(${property.id});'></i></td>
        <td class="tableData" role="cell" ><i class="fa-solid fa-pencil" id="edit${property.id}" onclick="propertyEdit(${property.id})"></i></td>
        <td class="tableData" role="cell" ><button type='button' class="btn" id="save${property.id}" onclick="propertySave(${property.id})" style="display: none">Save</button><td>
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

// UPDATE
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

function propertySave(id) {
  const property = properties.find((property) => {
    return property.id === id;
  });

  const titleBox = document.querySelector(`#title${id}`);
  const areaBox = document.querySelector(`#area${id}`);
  const imageBox = document.querySelector(`#image${id}`);
  const typeBox = document.querySelector(`#type${id}`);
  const bedroomsBox = document.querySelector(`#bedrooms${id}`);
  const bathsBox = document.querySelector(`#baths${id}`);
  const garageBox = document.querySelector(`#garage${id}`);
  const statusBox = document.querySelector(`#status${id}`);
  const sizeBox = document.querySelector(`#size${id}`);
  const priceBox = document.querySelector(`#price${id}`);

  titleBox.disabled = true;
  areaBox.disabled = true;
  imageBox.disabled = true;
  typeBox.disabled = true;
  bedroomsBox.disabled = true;
  bathsBox.disabled = true;
  garageBox.disabled = true;
  statusBox.disabled = true;
  sizeBox.disabled = true;
  priceBox.disabled = true;

  property.title = titleBox.value;
  property.area = areaBox.value;
  property.image = imageBox.value;
  property.type = typeBox.value;
  property.bedrooms = bedroomsBox.value;
  property.baths = bathsBox.value;
  property.garage = garageBox.value;
  property.status = statusBox.value;
  property.size = sizeBox.value;
  property.price = priceBox.value;

  localStorage.setItem("properties", JSON.stringify(properties));
  displayListing(properties);
}

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
