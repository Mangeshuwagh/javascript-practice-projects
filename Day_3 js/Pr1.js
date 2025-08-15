
console.log("hello i am Working just Check ");

function CalculateBill(){
     let Quantity =document.getElementById("Quantity").value;
     let Rate = document.getElementById("Rate").value;

     let CountBill = parseInt(Quantity)*parseInt(Rate);
     console.log(CountBill);
     document.getElementById("Show_The_Bill").value=CountBill;
}