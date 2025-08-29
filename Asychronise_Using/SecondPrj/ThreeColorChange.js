console.log("I check its a Work or not");


const randomColor = function()
{

    let hexValue ="0123456789ABCDEF";
    let color = '#';
    // console.log(hexValue);
    for(let i =0;i<6;i++)
    {

        // console.log(Math.floor(Math.random()*hexValue));

        color+= hexValue[Math.floor(Math.random()*16)];
        
    }
    return color;

}

console.log(randomColor());
let offtheColorChanges;

const startColorChanges = function(){

if(!offtheColorChanges){

    // console.log("Mangesh Wagh");
    offtheColorChanges = setInterval(ChangeBackColor,1000);
}

    function ChangeBackColor(){

        document.body.style.backgroundColor = randomColor();
    }

}


const stopColorChanges = function(){

    // clearInterval(offtheColorChanges);
     clearInterval(offtheColorChanges); 
        offtheColorChanges = null; 
   

};
document.querySelector('#Start').addEventListener('click',startColorChanges);
document.querySelector('#Stop').addEventListener('click',stopColorChanges);


 