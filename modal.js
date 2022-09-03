//Dynamic Star
let addStar = (rating, id) => {
  let starDiv = document.getElementById(id);
  starDiv.innerHTML = "";
  let fullStar = Math.floor(rating);
  let halfStar = Math.round(rating % 1);
  let emptyStar = 5 - (fullStar + halfStar);

  for (let i = 1; i <= fullStar; i++) {
    var createStar = document.createElement("i");
    createStar.classList.add("fa-solid", "fa-star");
    starDiv.appendChild(createStar);
  }
  for (let i = 1; i <= halfStar; i++) {
    var createStar = document.createElement("i");
    createStar.classList.add("fa-solid", "fa-star-half-stroke");
    starDiv.appendChild(createStar);
  }
  for (let i = 1; i <= emptyStar; i++) {
    var createStar = document.createElement("i");
    createStar.classList.add("fa-regular", "fa-star");
    starDiv.appendChild(createStar);
  }
};
let loadDetails = (news_id) => {
  document.getElementById("mBody").innerHTML = "";
  let urlDetails = `https://openapi.programming-hero.com/api/news/${news_id}`;
  fetch(urlDetails)
    .then((res) => res.json())
    .then((data) => {
      modal(data.data[0]);
    })
    .catch((error) => console.log(error));
};
//update modals from api
let modal = (data) => {
  let containerDiv = document.getElementById("mBody");
  let aName = data.author.name;
  let view = data.total_view;
  if (aName == null) {
    aName = "No name found";
  }
  if (view == null) {
    view = "Found no";
  }
  let date = new Date(data.author.published_date);
  let newModal = document.createElement("div");
  console.log(data);
  newModal.innerHTML = `
  <div class="card text-bg-dark w-100">
  <img src="${data.image_url}" class="card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text" style="text-align: justify;">
    ${data.details}
    </p>
    <div class="d-flex justify-content-between align-items-center">
    
    <div class="d-flex align-items-center w-50">
        <img
        src="${data.author.img}"
        class="img-fluid rounded-circle  me-2"
        style="width: 40px; height: 40px; object-fit: cover"
        alt="..."
        />
        <div>
        <p class="m-0">${aName}</p>
        <p class="m-0 text-muted">${date.toDateString()}</p>
        </div>
    </div>
    <div class="w-50 d-flex flex-column align-items-end">
    <div class="col-md-3 my-auto d-flex justify-content-end w-100">
                  <i class="fa-regular fa-eye my-auto pe-2"></i> 
                  <span>
                  ${view} views
                  </span>
                </div>
    <div  id="star">
                  
    </div>
    </div>
    
    </div>
    </div>
    
    
    `;
  containerDiv.appendChild(newModal);
  addStar(data.rating.number, "star");
};
