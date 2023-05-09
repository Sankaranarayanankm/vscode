
// getting input value

function getValue(event){
    event.preventDefault();
   let nameInput=document.getElementById('name').value;
   let emailInput=document.getElementById('email').value;
   localStorage.setItem(nameInput,emailInput);
   
}