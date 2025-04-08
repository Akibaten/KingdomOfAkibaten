document.getElementById("microblogPreview").addEventListener("load",
    function getMicroblog(){
      var microblogObject = document.getElementById("microblogPreview").contentWindow;
      var style = microblogObject.document.createElement("style");
      var firstPost = microblogObject.document.getElementById("posts").querySelector("p").outerHTML;
      microblogObject.document.getElementById("posts").innerHTML = firstPost;
      microblogObject.document.getElementById("left").remove();
      microblogObject.document.getElementById("right").remove();
      style.textContent = ".center{background-image: url('index/starryBackgroundTile^-^.gif'); background-repeat: repeat; height:100vh; width:100%; margin: 0; padding: 0; scrollbar-width:thin; overflow-y: scroll} .titleContainer{margin:0; font-size: 1em} p{font-size: 0.7em}";
      microblogObject.document.body.appendChild(style);
})