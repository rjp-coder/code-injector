function listenForClicks() {
    document.addEventListener("click", (e) => {

      let website = document.querySelector("#website")?.value;
      let code = document.querySelector("#code")?.value;
      if (!website) return;
  
      if (e.target.id == "save" && code) {
        console.log(`Saving code for ${website}`);
        browser.storage.local.set({[website]:code}).then(()=>{
          console.log("Successfully saved code")
        });
    } else if (e.target.id =="delete") {
        console.log(`Deleting code for ${website}`);
        browser.storage.local.remove(website).then(()=>{
          console.log("Successfully deleted code")
        });
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
 
  listenForClicks();
  console.log("injector.js finished");  