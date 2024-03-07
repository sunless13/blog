// assigning the elements to variables
const tocTitle = document.querySelectorAll("a")[1];
const toc = document.querySelectorAll("ul")[0];

// adding click event listener to name "Table of Contents"
tocTitle.addEventListener("click", () => {
  // makes the content of the toc visible
  toc.classList.toggle("show");
});

// Keyboard shortcuts
// i'm not naming that variable "event" .... i'll come up with another name later
document.addEventListener("keypress", (varName) => {
  switch (varName.key) {
    // table of contents toggle
    case "t":
      toc.classList.toggle("show");
      break;

    default:
      //console.log("Key not assigned");
      alert("Pussy!");
      break;
  }
});
