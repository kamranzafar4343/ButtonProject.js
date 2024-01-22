var index=0;

function changeColor(){
    var color=[red, green, violet, purple, blue, yellow];
    
    document.getElementsByTagName("body")[0].style.background = color[index++];

    if(index > color.length - 1){
        index = 0;
    }
}
