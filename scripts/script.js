// assigning the elements to variables
const tocTitle = document.querySelectorAll("a")[1];
const toc = document.querySelectorAll("ul")[0];

// adding click event listener to show the topics
tocTitle.addEventListener("click", () => {
  toc.classList.toggle("show");
});
