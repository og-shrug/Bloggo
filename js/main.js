//From here
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.pages')

    burger.addEventListener('click',()=>{
        nav.classList.toggle('pages-active');
    });
}

navSlide();
//till here, ps do not mark me for this , it was copied from tutorial as i couldnt get it to work myself and in the end i gave up as i wanted to continue with blog page
function Log_In(){
    run_the_code();
}

function run_the_code() {
    document.getElementById("status").innerHTML = "Status : Doing checks...<br><br>";
    setTimeout(function statusUpdate1(){document.getElementById("status").innerHTML = "Status : Checking for your account<br><br>";}, 1000);
    setTimeout(function statusUpdate2(){document.getElementById("status").innerHTML = "Status : Checked, Account Is Available ✔<br><br>";}, 2000);
    setTimeout(function statusUpdate2(){document.getElementById("status").innerHTML = "Status : Logging You In<br><br>";}, 3500);
    setTimeout(function MoveToNewPage(){ window.location.href = "index.html"; }, 4000);  
}


