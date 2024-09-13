document.addEventListener("DOMContentLoaded", function () {
    const confettiElements = document.querySelectorAll(".confetti");
    confettiElements.forEach(confetti => {
        confetti.style.setProperty("--random-x", Math.random());
        confetti.style.setProperty("--random-y", Math.random());
        confetti.style.animation = "confettiAnimation 5s ease-out";
    });
});
