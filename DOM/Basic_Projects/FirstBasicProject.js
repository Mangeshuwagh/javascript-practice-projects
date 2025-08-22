
console.log("Hello guys i am Mangesh Wagh basic 1st project");

const button = document.querySelectorAll('.button');
 
// console.log(button);
const body = document.querySelector("body");
console.log(body);
button.forEach((items)=>{
    // items.button
    // console.log(items);
items.addEventListener('click',(e)=>{
    // console.log(e);
    console.log(e.target.id);
    if(e.target.id==='red'){
    body.style.backgroundColor = e.target.id;
    }
   if (e.target.id ==='blue') {
    body.style.backgroundColor = e.target.id;
    
   }
     if (e.target.id ==='yellow') {
    body.style.backgroundColor = e.target.id;
    
   }
     if (e.target.id ==='green') {
    body.style.backgroundColor = e.target.id;
    
   }
     if (e.target.id ==='navyblue') {
    body.style.backgroundColor = 'rgb(3, 3, 138)';
    
   }
     if (e.target.id ==='purple') {
    body.style.backgroundColor = e.target.id;
    
   }
     
})
    


});

