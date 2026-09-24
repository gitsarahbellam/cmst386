/* =========================================
   Reach San Pedro - Project 4
   JavaScript
   ========================================= */


/* ---------- Back to Top Button ---------- */

document.addEventListener("DOMContentLoaded", function () {

    const backToTop = document.getElementById("back-to-top");

    if (!backToTop) {
        return;
    }

    window.addEventListener("scroll", function () {

        if (window.scrollY > 100) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

});