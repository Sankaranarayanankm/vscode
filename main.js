// console.log(1);
let form = document.getElementById("addForm");
let itemList=document.getElementById("items");
// console.log(itemList);

// adding event to delete when delete button is clicked
itemList.addEventListener('click',removeItem);

// adding event to form for delete and adding text 
form.addEventListener('submit',addItem);

// function addItem
function addItem(e){
    e.preventDefault();
    // getting input value
    let newItem=document.getElementById("item").value;
    // create a new li element

    let li=document.createElement("li");
    // adding class name
    li.className="list-group-item";
    // console.log(li);

    // adding text to created li element 
    li.appendChild(document.createTextNode(newItem));
    
    //creating the delete button     
    let deletebtn=document.createElement("button");

    // adding class to button 

    deletebtn.className="btn btn-danger btn-sm float-right delete";
    // console.log(deletebtn);

    // adding text node to button 
    deletebtn.appendChild(document.createTextNode("X"));

    // adding delete button to li 
    li.appendChild(deletebtn);

    // adding li to itemList 
    itemList.appendChild(li);
    console.log(itemList)
}
// adding remove item function 
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure?")){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}