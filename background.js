chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'save_text') {
      const { text, index } = request;
      chrome.storage.local.get(['savedText'], (result) => {
          const savedText = result.savedText || [];
          savedText[index] = text;
          chrome.storage.local.set({ savedText: savedText });
      });
  } else if (request.action === 'get_saved_text') {
      chrome.storage.local.get(['savedText'], (result) => {
          sendResponse(result.savedText || []);
      });
      return true; // Keeps the message channel open for sendResponse
  }
});
