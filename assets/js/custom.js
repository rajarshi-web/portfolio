// navigation  menu js


function openNav() {
    document.getElementById("myNav").classList.add("menu_width");
    document.querySelector(".menu_btn-style").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").classList.remove("menu_width");
    document.querySelector(".menu_btn-style").style.display = "none";
}
// get current year

// function displayYear() {
//     var d = new Date();
//     var currentYear = d.getFullYear();
//     document.querySelector("#displayYear").innerHTML = currentYear;
// }
// displayYear();



//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


// slider carousel control







