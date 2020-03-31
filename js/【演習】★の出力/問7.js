for (var i = 1; i <= 4; i++){
    if(i > 1){
document.write("<br>");
    }
    
    for(var j = 1; j <= 5; j++){
        if(j % 2 == 0){
            document.write("☆");
        } else {
            document.write("★");
        }
    }
}