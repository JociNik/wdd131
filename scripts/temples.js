const title = document.querySelector("p");
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    title.classList.toggle("open");
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});