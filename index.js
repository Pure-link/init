let contact = document.getElementById("contact")
let drop = document.getElementById("drop")
let count = 0
drop.addEventListener("click", function(){
    if (count % 2 == 0){
        contact.style.top = 1500 + "px"
        contact.style.top = -50 + "px"
        contact.style.top = 50 + "px"
        count 
    }else{
        contact.style.top = -1500 + "px"
        count += 1
    }
    return count
})

tap = document.getElementById("tap");
menu = document.getElementById("menu_bar")
let amount = 0;
tap.addEventListener("click", function(){
    if (amount % 2 == 0){
        tap.src = "pics/o.png"
        menu.style.top =  "2%" 
        amount += 1
    }else if (amount % 2 == 1){
        tap.src = "pics/x.png"
        menu.style.top = "-1000px"
        amount += 1
    }
    return amount
})
