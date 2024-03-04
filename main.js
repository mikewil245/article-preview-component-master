shareButton = document.getElementById("share-Button");
console.log(shareButton);
const shareLinks = document.querySelector(".active");

shareButton.addEventListener("click", () => {
  shareLinks.classList.toggle("hide");
});
