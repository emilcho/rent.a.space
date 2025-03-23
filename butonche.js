document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("backToTopBtn");
    var scrollInterval; // Declare the interval globally to clear it later

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });

    button.addEventListener("click", function () {
        smoothScrollToTop();
    });

    // Custom smooth scrolling function
    function smoothScrollToTop() {
        const scrollDuration = 400; // Duration in milliseconds
        const scrollStep = -window.scrollY / (scrollDuration / 15); // Calculate step size

        // Clear any existing interval to prevent conflicts
        clearInterval(scrollInterval);

        scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval); // Stop scrolling when at the top
            }
        }, 15); // Interval in milliseconds
    }

    // Stop scrolling if the user interacts (scrolls down)
    window.addEventListener("wheel", function () {
        clearInterval(scrollInterval); // Stop the interval if the user scrolls
    });

    window.addEventListener("touchmove", function () {
        clearInterval(scrollInterval); // Stop the interval if the user scrolls on touch devices
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
});




