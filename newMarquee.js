// Credit where credit is Due! I didn't write this i got it from https://www.geeksforgeeks.org/create-the-marquee-text-effect-using-javascript/
// and modified it slightly to use in my code instead of marquee :3 I was using css before but this is a super not fun way to do it and is confusing
// sometimes js is just better ¯\_(ツ)_/¯

// a few notes on what I had to change:
// so HTML is supperrrr weird about rendereing that offsetWidth property in fact it can only do it after the element is created so the script has to be
// placed after the element. but whatever okay idc. I struggled to get it to read the actual length of the images as the element width. in my fixes I
// realize a few things MUST be present in order for this property to Worker: width has to be max-content, display has to be block, and even after that
// if the js script runns TOOOO fast which it is liable to do it will set it incorrectly so I fixed this by just resentting it everysingle frame of the Animation
// its not ideal but probably not terrible. Also in html new lines are read as spaces so I added font size 0 to make those spaces 0px. 


const horiztonalBar = document.getElementById("horizontalBar");
// const para2 = document.getElementById("para2"); 
// const para3 = document.getElementById("para3"); 

function animate(element){
    let elementWidth;
    let parentWidth = element.parentElement.offsetWidth; 
    let flag = parentWidth; 
  
    setInterval(() => {
        elementWidth = element.offsetWidth; 
        console.log(flag);
        console.log(elementWidth);
        flag = flag - 1;
        element.style.marginLeft = flag + "px"
        
        if (flag == -elementWidth) {
            parentWidth = element.parentElement.offsetWidth; 
            flag = parentWidth;
            element.style.marginLeft = parentWidth;
        } 
    }, 1); 
}


animate(horiztonalBar); 
// animate(para2); 
// animate(para3); 