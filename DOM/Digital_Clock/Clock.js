console.log("Checking the its programming running or not");

const clock = document.getElementById('Clock');


console.log(clock);


setInterval(function(){
    const date = new Date();
// console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000);
