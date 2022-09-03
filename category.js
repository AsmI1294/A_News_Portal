const url = `https://openapi.programming-hero.com/api/news/categories`;
let jsonCategoryData = "";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    categoryBar(data.data.news_category);
    jsonCategoryData = data.data.news_category;
  })
  .catch((error) => console.log(error));
//initial Catagory and load
let currentCategory = "01";
loadNews();

//catagory from API
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
    <a class="nav-link ${activeClass}" aria-current="page" href="#" onclick='setCurrentCatagory("${x.category_id}")'">${x.category_name}</a>
    `;
    categories.appendChild(liElement);
  });
};
//onclick on each catagory following changes happen
const setCurrentCatagory = (id) => {
  document.getElementById("spinner").classList.remove("d-none");
  currentCategory = id;
  document.getElementById("categories").innerHTML = "";
  console.log(currentCategory);
  categoryBar(jsonCategoryData);
  loadNews();
};
