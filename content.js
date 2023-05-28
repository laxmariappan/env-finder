const prodSites = ["https://laxmariappan.com", "//icons8.com"];

setTimeout(() => {
  
  if (typeof window !== "undefined") {
    let domain = `${window.location.protocol}//${window.location.hostname}`;
    console.log(domain);
    if (prodSites.includes(domain)) {
      setThemeColor();
      chrome.runtime.sendMessage({ prod: true }, function (response) {
        console.log("Response: ", response);
      });
    }else{
       chrome.runtime.sendMessage({ prod: false }, function (response) {
         console.log("Response: ", response);
       });
    }
  }

},2000);

const setThemeColor = () => {
  let themeColor = document.querySelector("meta[name=theme-color]");
  if (themeColor) {
    themeColor.setAttribute("content", "#FF0000");
  } else {
    themeColor = document.createElement("meta");
    themeColor.setAttribute("name", "theme-color");
    themeColor.setAttribute("content", "#FF0000");
    document.head.appendChild(themeColor);
  }
  document.title = `PROD: ${document.title}`;
}







