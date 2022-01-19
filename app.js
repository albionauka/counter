const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');
let count = 0;
btns.forEach(function(btn) {
    btn.addEventListenner('click', (event) =>{
        console.log(event.target);

        if(event.target.classList.contains('decrease')){
            count--;
        }else if(event.target.classList.contains('increase')){
            count += 1;

        }else{
            count += 0;
        }
        if (count > 0)value.style.color = "green";

        if(count < 0)value.style.color = "red";

        if (count == 0 )value.style.color = "black"; 
        value.textContent = count;
    });

});