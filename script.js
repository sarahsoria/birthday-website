// Function to progress the questionnaire
function nextQuestion(current) {
    if (current === 1) {
        document.getElementById("q2").classList.remove("hidden");
        document.getElementById("q2-yes").classList.remove("hidden");
        document.getElementById("q2-no").classList.remove("hidden");
    } else if (current === 2) {
        document.getElementById("q3").classList.remove("hidden");
        document.getElementById("q3-yes").classList.remove("hidden");
        document.getElementById("q3-no").classList.remove("hidden");
    }
}

// Function to show the final message with typing effect
function showFinalMessage() {
    document.getElementById("questionnaire").classList.add("hidden");
    document.getElementById("finalMessage").classList.remove("hidden");

    let message = "Thank you for always being by my side since day one. You are truly an inspiration to me and to so many other people. I hope that especially today, you see how loved and cared about you are, and I want you to know that I will always love you no matter what. Happy 19th birthday :) I love you so much!";
    
    let finalTextElement = document.getElementById("finalText");
    let i = 0;

    function typeWriter() {
        if (i < message.length) {
            finalTextElement.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
}

// Generate floating hearts animation
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.querySelector(".heart-container").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 500);
