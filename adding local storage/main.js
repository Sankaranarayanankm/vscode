
// getting input value

function getValue(event){
    event.preventDefault();
   let nameInput=document.getElementById('name').value;
   let emailInput=document.getElementById('email').value;
   
   let myObj= {
    name:nameInput,
    email:emailInput,
   };
  // to serialize the input object
   let myObj_serialized = JSON.stringify(myObj);
//    console.log(myObj);
   // storing the serialize value in local storage
   localStorage.setItem('myObj',myObj_serialized);

   // decerializing the serialized value so that we will get an object

   let myObj_deserialized =JSON.parse(localStorage.getItem("myObj"));
   console.log(myObj_deserialized);
   
}