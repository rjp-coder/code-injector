function listenForClicks() {
    document.addEventListener("click", (e) => {

      let website = document.querySelector("#website")?.value;
      let code = document.querySelector("#code")?.value;
      if (!website) return;
  
      if (e.target.id == "save" && code) {
        let banner = showBanner(`Saving code for ${website}`);
        browser.storage.local.set({[website]:code}).then(()=>{
          banner.textContent = "Successfully saved code";
        });
    } else if (e.target.id =="delete") {
        let banner = showBanner(`Deleting code for ${website}`);
        browser.storage.local.remove(website).then(()=>{
          banner.textContent = "Successfully deleted code";
        });
      } 
    });

    setTimeout(()=>{      
      let website = document.querySelector("#website")
      if (website) {
        website.value=window.location.origin.split("www.")[1];
        browser.tabs.query({currentWindow: true, active: true}).then((tabs)=>{
          let url = tabs[0].url
          url  = url.replace("www.","").replace("https://","").replace("http://","").replace("#","").replace(/\/.*/,"");
          website.value = url;
        },console.error)        
      } else {
        console.error("Code injector: no website element found ");
      }
    },200)
  }
 
  function showBanner(msg){
    const div = document.createElement("div");
    div.className="banner";
    div.textContent=msg;
    let section = document.querySelector("section");
    if (section){
      section.before(div);
      setTimeout(()=>{
        if (div) div.remove();
      },2500)
    }
    return div;
  }

  listenForClicks();
  console.log("injector.js finished");  