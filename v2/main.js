const questions = document.getElementsByClassName("question");
const sections = document.querySelectorAll("section")
const currentScreen = document.getElementsByClassName("currentScreen")

const options = {
    threshold: 0.53
}

let observer = new IntersectionObserver(function(entries,observer) {
    entries.forEach(entry => {
        const id = entry.target.id;
        const navId = document.getElementById("nav" + id)
        if (entry.isIntersecting) {
            navId.className = "currentScreen";
        } else {
            navId.className = "";
        }
    })
}, options);

sections.forEach(section => {
    observer.observe(section);
})

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