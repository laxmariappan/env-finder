
    chrome.runtime.onMessage.addListener(function (
      message,
      sender,
      sendResponse
    ) {
      sendResponse({
          message: message.prod
      });
      if(message.prod){
        chrome.action.setIcon({ path: "images/red-32.png" });
      }else{
        chrome.action.setIcon({ path: "images/black-32.png" });
      }
    });
  