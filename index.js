const button = document.querySelector("#back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if ((window.pageYOffset/window.innerHeight) > 0.5 ) { //Show BackToTopButton
      if (!button.classList.contains("btnEntrance")) {
            button.classList.add("btnEntrance");
            button.style.display = "block";
        }
    }
    else { //Hide BacktoTopButton
        if (button.classList.contains("btnEntrance")) {
            button.classList.remove("btnEntrance");
            setTimeout(function () {
                button.style.display = "none";

            }, 50);
        }

    }
}

button.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0)
};
