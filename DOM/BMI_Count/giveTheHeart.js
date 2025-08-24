console.log("its Working or not");

const form = document.querySelector('form');
const results = document.querySelector("#result");
console.log(`its a Form${form}`);

form.addEventListener('submit', (event)=>{
    event.preventDefault();
   const hieght= parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);


   if(hieght<0||isNaN(hieght)){

    results.innerHTML= `Please give a valid height ${hieght}`;
    return;

   }
    if(weight<0||isNaN(weight)){

    results.innerHTML= `Please give a valid weight ${weight}`;
    return;

   }
   else{
       const bmi = (weight / ((hieght / 100) ** 2)).toFixed(2);
    results.innerHTML = `<span>Your BMI: ${bmi}</span>`;
   }
});