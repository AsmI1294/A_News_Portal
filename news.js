let loadNews = () => {
  let urlNews = `https://openapi.programming-hero.com/api/news/category/${currentCategory}`;
  fetch(urlNews)
    .then((res) => res.json())
    .then((data) => {
      newsCards(data.data);
    })
    .catch((error) => console.log(error));
};
const newsCards = (data) => {
  let newsSection = document.getElementById("news");
  newsSection.innerHTML = "";
  console.log(data);
  data.forEach((element) => {
    let newsDiv = document.createElement("div");
    let date = new Date(element.author.published_date);
    newsDiv.innerHTML = `
        
        <div
        class="card text-bg-dark my-3 mx-auto shadow-lg p-2"
        style="width: 95%"
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="${element.image_url}"
              class="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div class="col-md-8 my-auto">
            <div class="card-body">
              <h3 class="card-title">${element.title}</h3>
              <p
                class="card-text"
                style="
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  text-align: justify;
                "
              >
              ${element.details}
              </p>
              <div class="row g-0">
                <div class="col-md-3 d-flex">
                  <img
                    src="${element.author.img}"
                    class="img-fluid rounded-circle my-auto me-2"
                    style="width: 40px; height: 40px; object-fit: cover"
                    alt="..."
                  />
                  <div>
                    <p class="m-0">${element.author.name}</p>
                    <p class="m-0 text-muted">${date.toDateString()}</p>
                  </div>
                </div>
                <div class="col-md-3 my-auto d-flex justify-content-center">
                  <i class="fa-regular fa-eye my-auto pe-2"></i> <small>1.5M</small>
                </div>
                <div class="col-md-3 my-auto d-flex justify-content-center">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div
                  class="col-md-3 my-auto d-flex justify-content-end fs-3 pe-3"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        
        
        `;
    newsSection.appendChild(newsDiv);
  });
};
