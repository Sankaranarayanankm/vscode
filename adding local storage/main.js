let form =document.getElementById('form');
let itemList=document.getElementById('items');
// adding event to form 
form.addEventListener("submit" ,getValue);

// adding remove event
itemList.addEventListener("click",removeItem);

// get value function
 function getValue(event) {
    event.preventDefault();
    // getting users value of name email and phone
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;

    // creating new li
    let li=document.createElement("li");

    // creating a textNode 
    let nameNode=document.createTextNode(name);
    let emailNode=document.createTextNode(email);
    let phoneNode=document.createTextNode(phone);

    // creating delete button
    let button= document.createElement('button');
    button.className="delete";
    button.appendChild(document.createTextNode("delete"));
    
    
    // appeding the text node to the li
    li.append(nameNode,emailNode,phoneNode,button);
    li.appendChild(document.createElement("br"));

    // appending li to itemlist
    itemList.appendChild(li)
    
    // storing in local storage
    let obj={
        "name":name,
        "email":email,
        "phoneNumber":phone
    };
    obj_serialize=JSON.stringify(obj);
    // console.log(obj_serialize);
    localStorage.setItem(name,obj_serialize);

    // let obj_deserialize=JSON.parse(localStorage.getItem("name"));
   
 }

 // function remove item

function removeItem(e){
    if(e.target.classList.contains("delete")){
        let li=e.target.parentElement;
        itemList.removeChild(li);
        localStorage.clear();
    }
}
   
