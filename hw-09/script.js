const tree = document.getElementById("tree");
tree.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    const childUl = event.target.querySelector("ul");
    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }
  }
});
