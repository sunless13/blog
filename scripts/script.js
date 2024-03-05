// assigning the topics to a constant variable
const topic = document.querySelectorAll("h2");
const subTopic = document.querySelectorAll("ol");

// adding event listener to every topic clicked
topic[0].addEventListener("click", () => {
  subTopic[0].classList.toggle("active");
  subTopic[1].classList.toggle("active");
  subTopic[2].classList.toggle("active");
});
topic[1].addEventListener("click", () => {
  subTopic[0].classList.toggle("active");
});
topic[2].addEventListener("click", () => {
  subTopic[1].classList.toggle("active");
});
topic[3].addEventListener("click", () => {
  subTopic[2].classList.toggle("active");
});
