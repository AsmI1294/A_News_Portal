const url = `https://openapi.programming-hero.com/api/news/categories`;
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data.data.news_category))
  .catch((error) => console.log(error));

let currentCategory = 1;

const categoryBar = (jsonCategory) => {
  let categories = document.getElementById("categories");
  let categoryNames = jsonCategory.map((x) => {});
};
