console.log("Hello Its a Working or not Check this");

// let MangeshWaghDevloper = function(){
//     console.log("Hello friend How are You Guys");
// }

const H1Changers = function(){
    document.querySelector('h1').innerHTML = "Hello Guys After the change min a 2 sec";

}



const StopMe = setTimeout(H1Changers,3000);// using the Reference with setTimeout- function.



document.querySelector('#Stop').addEventListener('click',function(){
    clearTimeout(StopMe);
    console.log("Its a Stoping the Changes");
})
