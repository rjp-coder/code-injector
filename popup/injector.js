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
        browser.storage.local.clear(website);
      } else {
        console.log("clicked on not a button")
      }
    });
  }

  listenForClicks();
  