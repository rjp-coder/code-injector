function listenForClicks() {
    console.log("listening for clicks");
    document.addEventListener("click", (e) => {
    console.log("Click detected");
  
      /**
       * Get the active tab,
       * then call "beastify()" or "reset()" as appropriate.
       */
      console.log(e.target);
      let website = document.querySelector("#website")?.value;
      let code = document.querySelector("#code")?.value;

      console.table([{website,code}]);

      if (!website || !code) return;
  
      if (e.target.id == "save") {
        console.log(`Saving code for ${website}`);
        browser.storage.local.set({[website]:code});
    } else if (e.target.id =="delete") {
        console.log(`Deleting code for ${website}`);
        browser.storage.local.remove(website);
      } else {
        console.log("clicked on not a button")
      }
    });

    setTimeout(()=>{      
      let website = document.querySelector("#website")
      if (website) {
        website.value=window.location.origin.split("www.")[1];
        browser.tabs.query({currentWindow: true, active: true}).then((tabs)=>{
          let url = tabs[0].url
          console.log(url)
          url  = url.replace("www.","").replace("https://","").replace("http://","").replace("#","").replace(/\/.*/,"");
          console.log(url);
          website.value = url;
        },console.error)        
      } else {
        console.log("no website elem... :(")
      }
    },200)
  }

  document.onload=()=>{
    console.log("document loaded");
  }
  
  listenForClicks();
  console.log("injector.js finished");

  function waitForElem(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

  