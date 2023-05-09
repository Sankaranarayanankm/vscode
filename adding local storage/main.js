let form =document.getElementById('form');
let itemList=document.getElementById('items');

let li =document.createElement('li');
li.className="list-group-item"

form.addEventListener("submit" ,getValue);
 function getValue(e) {
    e.preventDefault();
    // adding li tag



    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;

    let nameNode=document.createTextNode(name);
    let emailNode=document.createTextNode(email);
    let phoneNode=document.createTextNode(phone);
    
    li.append(nameNode,emailNode,phoneNode,);
    li.appendChild(document.createElement("br"));
    
    let obj={
        "name":name,
        "email":email,
        "phoneNumber":phone
    };
    obj_serialize=JSON.stringify(obj);
    // console.log(obj_serialize);
    localStorage.setItem("obj",obj_serialize);

    let obj_deserialize=JSON.parse(localStorage.getItem("obj"));
    console.log(obj_deserialize);
 }
   
