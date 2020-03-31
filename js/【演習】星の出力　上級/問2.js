for (var i = 1; i <= 5; i++){
    if(i > 1){
        document.write("<br>");
    }
    for(var j = 1; j <= 5; j++){
        if(i == j){
            document.write("☆");
        } else{
            document.write("★");
        }
    }
}