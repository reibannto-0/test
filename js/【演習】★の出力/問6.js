for (var i = 1; i <= 3; i++){
    if(i > 1){
document.write("<br>");
    }
    
    for(var j = 1; j <= 3; j++){
        if(j % 2 == 0){
            document.write("☆");
        } else {
            document.write("★");
        }
    }
}