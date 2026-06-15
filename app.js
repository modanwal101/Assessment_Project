


window.addEventListener("load", () => {
    const welcomeScreen = document.getElementById("welcome");

    setTimeout(() => {

    }, 3000);
});

const courseCards = document.querySelectorAll(".course-card");

courseCards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});


document.querySelectorAll(".counter").forEach(counter => {
    let count = 0;
    const target = counter.dataset.target;

    const interval = setInterval(() => {
        count++;
        counter.innerText = count;

        if (count >= target) {
            clearInterval(interval);
        }
    }, 5);
});




const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        document.body.classList.add("cyber");
        localStorage.setItem("theme","cyber");

    }else if(document.body.classList.contains("cyber")){
        document.body.classList.remove("cyber");
        localStorage.setItem("theme","light");

    }else{
        document.body.classList.add("dark");
        localStorage.setItem("theme","dark");
    }
});

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark");
}
else if(savedTheme === "cyber"){
    document.body.classList.add("cyber");
}

//  Admission Form Validation

const form = document.getElementById("admissionForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;

    const mobile = document.getElementById("mobile").value;

    const email = document.getElementById("email").value;

    const course = document.getElementById("course").value;

    const city = document.getElementById("city").value;

    const successMessage =  document.getElementById("success-message");

    if (  name === "" ||  mobile === "" ||  email === "" ||  city === "" || course === "Select Course"
    ) {
        alert("Please fill all fields");
        return;
    }

    if (mobile.length !== 10) {
        alert("Enter valid mobile number");
        return;
    }

    successMessage.innerHTML =
        "Admission Form Submitted Successfully!";

    form.reset();
});


const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});



const images = [
    "assets/image/campus3.jpg",
    "assets/image/campus4.jpg",
    "assets/image/campus5.jpg"
];

let currentIndex = 0;

const image = document.getElementById("campus-image");

function showImage() {
    image.src = images[currentIndex];
}

document.getElementById("next")
.addEventListener("click", () => {
    currentIndex =
    (currentIndex + 1) % images.length;
    showImage();
});

document.getElementById("prev")
.addEventListener("click", () => {
    currentIndex =
    (currentIndex - 1 + images.length) % images.length;
    showImage();
});


document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {
        currentIndex =
        (currentIndex + 1) % images.length;
        showImage();
    }

    if (e.key === "ArrowLeft") {
        currentIndex =
        (currentIndex - 1 + images.length) % images.length;
        showImage();
    }

});

document.getElementById("tour-btn")
.addEventListener("click", () => {

    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;
        image.src = images[index];
    }, 2000);

});


