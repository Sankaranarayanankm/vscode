// console.log(1);
let form = document.getElementById("addForm");
let itemList=document.getElementById("items");
let filter=document.getElementById('filter');

// adding event to filter
filter.addEventListener("keyup",filterItem);

// adding event to delete when delete button is clicked
itemList.addEventListener('click',removeItem);

// adding event to form for delete and adding text 
form.addEventListener('submit',addItem);

// function addItem
function addItem(e){
    e.preventDefault();
    // getting input value
    let newItem=document.getElementById("item").value;
    let dis=document.getElementById('item1').value;
    
    // create a new li element
    let li=document.createElement("li");
    let li1=document.createElement('li');
    // adding class name
    li.className="list-group-item";
    li1.className='list-group-item';
  

    // adding text to created li element 
   
    li.append(document.createTextNode(newItem),' ',document.createTextNode(dis));
   
 

    
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
    itemList.append(li); 
   
   
  
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

// filter items function 
function filterItem(e){
    // converting the typed text to lower case
    let text=e.target.value.toLowerCase();

    // getting the list elemetns
    let items=document.getElementsByTagName('li');

    // console.log(items);
    // converting html collection to array
    let arr=Array.from(items);
    arr.forEach(function(item) {
    let fount=false;
    let childNodes=item.childNodes
    for(let i=0;i<childNodes.length;i++){
        node=childNodes[i].textContent;
        if(node.toLowerCase().indexOf(text)!== -1){
            fount=true;
            break;
        }

    }
    if(fount){
        item.style.display="block";
    }
    else {
        item.style.display="none";
    }
});
}
  
