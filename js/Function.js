let scpText = "";
let isLoaded = false; // check

fetch("data/data.json")
    .then(res => res.json())
    .then(data => {
        let container = document.getElementById("scp-container");

        data.forEach(scp => {
            let div = document.createElement("div");

            div.innerHTML = `
                <h2>${scp.title}</h2>
                <p>${scp.description}</p>
            `;

            container.appendChild(div);

            scpText += scp.title + ". " + scp.description + ". ";
        });

        isLoaded = true; // ✅ data ready
    });

// READ
function readSCP() {
    let content = document.querySelector(".details");

    let text = content ? content.innerText : document.body.innerText;

    let speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}

function readWelcome() {
    let welcomeText = "Welcome to the SCP Foundation. We contain and study anomalous objects and entities to protect humanity. Explore our database to learn more about our work.";

    let speech = new SpeechSynthesisUtterance(welcomeText);
    window.speechSynthesis.speak(speech);
}

// STOP
function stopWelcome() {
    window.speechSynthesis.cancel();
}
function stopSCP() {
    window.speechSynthesis.cancel();
}
