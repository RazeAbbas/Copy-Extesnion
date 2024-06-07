// console.log('Text saved');
function saveText(text) {
    chrome.storage.local.set({ 'savedText': text }, function() {
        console.log('Text saved:', text);
    });
}
function getSavedText(callback) {
    chrome.storage.local.get(['savedText'], function(result) {
        callback(result.savedText || '');
    });
}
function displaySavedText() {
    getSavedText(function(text) {
        const savedTextElement = document.getElementById('savedText');
        savedTextElement.innerText = text;
    });
}
function createButtons() {
    const contents = document.querySelectorAll('.selector'); // Change '.selector' to your desired selector

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
function initializePopup() {
    displaySavedText();
    createButtons();
}
document.addEventListener('DOMContentLoaded', initializePopup);
