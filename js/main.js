var link = document.querySelector(".writetous");
var popup = document.querySelector(".pop-up");
var close = document.querySelector(".close");
var namex = document.querySelector(".name");
link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("pop-up-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("pop-up-show");
});
