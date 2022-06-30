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
        price: "",
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

function showListings(properties) {
  document.querySelector("#displayListings").innerHTML = "";
  properties.forEach((property, i) => {
    document.querySelector("#displayListings").innerHTML += `
    <div class="property-card">
      <img src=${properties[i].image} style="width: 100%; height:200px;" class="property-img" >
      <div class="price-details">
        <p>R ${property.price}</p>
        <p> For ${property.status}
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

function filteredType(e) {
  const type = e.target.value;
  if (type === "all") {
    return showListings(properties);
  }
  const filtered = properties.filter((property) => property.type === type);

  return showListings(filtered);
}

function filteredLocation(e) {
  const location = e.target.value;
  if (location === "all") {
    return showListings(properties);
  }
  const filtered = properties.filter((property) => property.area === location);

  return showListings(filtered);
}

function filteredBedrooms(e) {
  const bedrooms = e.target.value;
  if (bedrooms === "all") {
    return showListings(properties);
  }
  const filtered = properties.filter(
    (property) => property.bedrooms === bedrooms
  );

  return showListings(filtered);
}

// const sortedPrice = (e) => {
//   const price = e.target.value;
//   const sorted = properties.sort((a, b) => a.price - b.price);
//   if (price === "all") {
//     return showListings(properties);
//   }
//   if (price === "ascending") {
//     return showListings(sorted);
//   } else {
//     return showListings(sorted.reverse());
//   }
// };

// const sortedName = (e) => {
//   const direction = e.target.value;
//   const sorted = properties.sort((a, b) => {
//     if (a.title < b.title) {
//       return -1;
//     }
//     if (a.title > b.title) {
//       return 1;
//     }
//     return 0;
//   });
//   if (direction === "ascending") {
//     showListings(sorted);
//   } else {
//     showListings(sorted.reverse());
//   }
// };

const textSearch = (e) => {
  const text = e.target.value;
  const filteredproperties = properties.filter((property) =>
    property.title.toLowerCase().includes(text.toLowerCase())
  );
  showListings(filteredproperties);
};
