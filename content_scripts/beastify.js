(() => {
    /**
     * Check and set a global guard variable.
     * If this content script is injected into the same page again,
     * it will do nothing next time.
     */
    if (window.hasRun) {
      console.log("returning early: code has run before")
      return;
    }
    window.hasRun = true;
  
    // /**
    //  * Given a URL to a beast image, remove all existing beasts, then
    //  * create and style an IMG node pointing to
    //  * that image, then insert the node into the document.
    //  */
    // function insertBeast(beastURL) {
    //   console.log("inserting beast");
    //   removeExistingBeasts();
    //   const beastImage = document.createElement("img");
    //   beastImage.setAttribute("src", beastURL);
    //   beastImage.style.height = "100vh";
    //   beastImage.className = "beastify-image";
    //   document.body.appendChild(beastImage);
    // }
  
    // /**
    //  * Remove every beast from the page.
    //  */
    // function removeExistingBeasts() {
    //   console.log("removing beast");
    //   const existingBeasts = document.querySelectorAll(".beastify-image");
    //   for (const beast of existingBeasts) {
    //     beast.remove();
    //   }
    // }
  
    // /**
    //  * Listen for messages from the background script.
    //  * Call "insertBeast()" or "removeExistingBeasts()".
    //  */
    // browser.runtime.onMessage.addListener((message) => {
    //   console.log("adding listener");
    //   console.log(message)
    //   if (message.command === "beastify") {
    //     console.log("command is beastfy")
    //     insertBeast(message.beastURL);
    //   } else if (message.command === "reset") {
    //     console.log("command is reset")
    //     removeExistingBeasts();
    //   }
    // });



    console.log("finished running code injector (at least the synchronous bits");
  })();
  
  /* LEARNING POINT 
  
  Beastify.js is debuggable in regular dev tools
  choose_beast.js (and presumably any non-content script) is debuggable only through the add-on debugger. 
  Reloading the extension, or loading temporarily, can be done on about:debugging (on Firefox);
  console.log will log to the browser for beastify.js, but logging is lost on choose_beast. For this you again need the add-on debugger.
  On the add-on debugger there is a button in the top-right to persist any popups. 
  This is incredibly useful. Without it, the logging disappears on the add-on debugger 
  
  */