var index=0;

function changeColor(){
    //array of colors
    var color=["red", "green", "violet", "purple", "blue", "yellow"];
    
//selects body and changes color while clicking
    document.getElementsByTagName("body")[0].style.background = color[index++];

    
//resets to 0 index
    if(index > color.length - 1){
        index = 0;
    }
}
