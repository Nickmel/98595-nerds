<script>
        var link = document.querySelector(".writetous");
        var popup = document.querySelector(".pop-up");
        var close = document.querySelector(".close");
        link.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.add("pop-up-show");
            name.focus();
        });

        close.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.remove("pop-up-show");
            name.focus();
        });
</script>