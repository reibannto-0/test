function totalPrice(group,otona,kodomo){
    return group+"グループの合計金額は、"+(500*otona+200*kodomo)+"円です。";
}

document.write(totalPrice("A",2,4));
document.write("<br>");
document.write(totalPrice("B",1,5));
document.write("<br>");
document.write(totalPrice("C",3,7));