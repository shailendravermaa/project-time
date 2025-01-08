
function timing(){
    const timer=document.getElementById("root");
    
    const now =new Date();
    
    const IndiaTime=now.toLocaleTimeString();
    timer.innerHTML=IndiaTime;

}

setInterval(timing,1000);


const timer=document.getElementById("root");
timer.style.fontSize="80px"

timer.style.display="flex";
timer.style.justifyContent="center";
timer.style.height="100vh"
timer.style.alignItems="center"
