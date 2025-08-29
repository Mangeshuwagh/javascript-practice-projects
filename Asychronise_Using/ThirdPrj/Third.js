
window.onload = function(){

    console.log("Mangesh Wagh");
    const insert = document.getElementById('insert');
    window.addEventListener('keydown',(e)=>{
        
        insert.innerHTML = `<div class='color'> 
        
     <table border="1" cellpadding = "5" style = "color:white; border-color:white;">
     <tr>
     <th>key</th>
            <th>keycode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key===' '? 'space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
            </tr>
            </table>
            
    </div>`

});
}