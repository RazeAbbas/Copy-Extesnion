// Function to save text to extension storage
function saveText(text) {
    chrome.storage.local.set({ 'savedText': text });
}
// content.js

function createButton() {
    const contents = document.querySelectorAll('.your-selector'); // Change '.your-selector' to your desired selector

    contents.forEach(content => {
        const button = document.createElement('button');
        button.innerText = 'Save';
        button.onclick = () => {
            const text = content.innerText;
            saveText(text);
            button.innerText = 'Saved!';
            setTimeout(() => {
                button.innerText = 'Save';
            }, 2000);
        };

        content.appendChild(button);
    });
}

setInterval(createButton, 5000); // Run createButton function every 5 seconds to dynamically add buttons
