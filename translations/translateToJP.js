window.translate = async function translate(){
    let translation;
    const targetLanguage = document.getElementById("translateButton").innerHTML;
    
    if(targetLanguage == "日本語"){
        translation = "jpTranslation.json";
        document.getElementById("translateButton").innerHTML = "ENG";
    }
    else if(targetLanguage == "ENG"){
        translation = "enTranslation.json";
        document.getElementById("translateButton").innerHTML = "日本語";
    }
    
    const response = await fetch("/index/translations/"+ translation);
    const jpTranslation = await response.json();
    const jpObject = jpTranslation["0"][0];
    for(const [element, innerObject] of Object.entries(jpObject)) {
        for (const [id, text] of Object.entries(innerObject)) {
            console.log(id)
            document.getElementById(id).innerHTML = text;
        }
    }      
}