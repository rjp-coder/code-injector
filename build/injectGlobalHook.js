//TODO add a menu for configuring website and code

 (async ()=>{
    try {

        if (window.__codeInjectorInitialised__){
            return;
        }
        window.__codeInjectorInitialised__=true;
        console.debug("code injector extension is running...");
        let easyUrl = window.location.origin.split("//")[1];
        let codeToInject;
        try {
            codeToInject = await browser.storage.local.get(easyUrl); //Really!? the browser storage api has no way to access the value directly
            codeToInject = Object.values(codeToInject)[0];
            console.log("Code: " + codeToInject.slice(0,80));
        } catch (err){
            console.log(err.toString());
            console.log("ERROR GETTING BROWSER STORAGE ITEM")
            console.trace();
        }

        if (!codeToInject){
            console.debug("No code to inject for this website")
        } else {
            console.debug("Injecting " + codeToInject.length + " characters of code ...")
            eval(codeToInject);
        }
        
        // let code = prompt("Enter code here")
        // if (code){
        //     browser.storage.local.set({[easyUrl]:code});
        //     alert("code saved");
        // }

    } catch (err){
        console.log(err.toString());
        console.trace();
    }



})()
