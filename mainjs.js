const url = `https://openapi.programming-hero.com/api/news/categories`;
fetch(url)
  .then((res) => res.json())
  .then((data) => categoryBar(data.data.news_category))
  .catch((error) => console.log(error));

let currentCategory = "01";

const categoryBar = (jsonCategory) => {
  let categories = document.getElementById("categories");

  jsonCategory.forEach((x) => {
    let activeClass = "";
    if (x.category_id === currentCategory) {
      activeClass = "active";
    }
    let liElement = document.createElement("li");
    liElement.classList.add("nav-item", "me-2");
    liElement.innerHTML = `
    <a class="nav-link ${activeClass}" aria-current="page" href="#"">${x.category_name}</a>
    `;
    categories.appendChild(liElement);
  });
};
