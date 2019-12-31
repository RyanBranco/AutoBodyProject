const about = document.getElementById("navAbout");
const ourWork = document.getElementById("navOurWork");
const faq = document.getElementById("navFaq");
const rental = document.getElementById("navRental");
const mapLocation = document.getElementById("navLocation");

const questions = document.getElementsByClassName("question");

function questionClick(questionNumber) {
    let show = 0;
    for (i = 0; i < questions.length; i++) {
        if (i === questionNumber && show === 0) {
            questions[i].classList.add("show");
            show = 1;
        } else {
            questions[i].classList.remove("show");
            show = 0;
        }
    };
};