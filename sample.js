function loadCoupon(){
    
    document.getElementById('main').style.opacity = '0.7';
    document.getElementById('coupon').style.visibility = 'visible';
}

function closeCoupon(){
    document.getElementById('main').style.opacity = '1';
    document.getElementById('coupon').style.visibility = 'hidden';
}

var icon= document.getElementById("icon")
        icon.onclick = function(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                icon.src = "lighton.png";
            }
            else{
                icon.src = "lightoff.png";
            }
        }