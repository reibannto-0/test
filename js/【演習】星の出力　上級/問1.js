for(var i = 1; i <= 25; i++){
    if(i % 2 == 0){
        document.write("☆");
    } else{
        document.write("★");
    }
    if(i % 5 == 0){
        document.write("<br>");
    }
}