let scpText = "";
let isLoaded = false;

// FETCH DATA
fetch("data/SCP.json")
    .then(res => {
        if (!res.ok) throw new Error("Failed to load JSON: " + res.status);
        return res.json();
    })
    .then(data => {
        let container = document.getElementById("scp-container");

        if (!container) {
            console.error(" Container not found (scp-container)");
            return;
        }

        container.innerHTML = ""; // remove "Loading..."

        data.forEach(scp => {
            let div = document.createElement("div");

            div.innerHTML = `
                <h2>${scp.title}</h2>
                <p>${scp.description}</p>
            `;

            container.appendChild(div);

            scpText += scp.title + ". " + scp.description + ". ";
        });

        isLoaded = true;
    })
    .catch(err => {
        console.error(err);
        let container = document.getElementById("scp-container");
        if (container) {
            container.innerHTML = "❌ Failed to load SCP data.";
        }
    });


// READ SCP CONTENT
function readSCP() {
    window.speechSynthesis.cancel(); // ✅ stop previous speech

    let content = document.querySelector(".details");
    let text = content ? content.innerText : document.body.innerText;

    let speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}


// READ WELCOME
function readWelcome() {
    window.speechSynthesis.cancel(); // ✅ prevent overlap

    let welcomeText = "Welcome to the SCP Foundation. We contain and study anomalous objects and entities to protect humanity.";

    let speech = new SpeechSynthesisUtterance(welcomeText);
    window.speechSynthesis.speak(speech);
}


// STOP FUNCTIONS
function stopWelcome() {
    window.speechSynthesis.cancel();
}

function stopSCP() {
    window.speechSynthesis.cancel();
}

