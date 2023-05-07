// console.log(document)
// console.log(document.title)
// console.log(document.head);
// console.log(document.URL);
// console.log(document.title);
// document.title=34;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[3]);
// console.log(document.forms);
// console.log(document.forms[0])

// console.log(document.links);
// console.log(document.images);

// SELECTORS

// GETELEMENTBYID

// console.log(document.getElementById("main"))

// let headerTitle=document.getElementById("header-title");
// let header=document.getElementById("main-header");

// console.log(headerTitle);
// headerTitle.textContent="How";
// // headerTitle.innerText="how long ";
// console.log(headerTitle)
// // console.log(headerTitle)

// headerTitle.innerHTML='<h1>how good</h1>';


// styles 

// console.log(header)
// header.style.borderBottom='solid 3px black'

// getElementsByClassName

// let items=document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent="Hello world";
// items[2].style.backgroundColor="yellow";
// items[0].style.backgroundColor="#f4f4f4";

// for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor="blue"
// }

// getElementsbyTagName

// let li =document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent="hellow world"
// li[0].innerHTML="<h4> whats up</h4>"
// li[2].style.backgroundColor="red";



// for(let i=0;i<li.length;i++){
//     li[i].style.color="blue";
//     li[i].style.backgroundColor="green";
// }

// // querySelector 

// let head =document.querySelector("#main-header");
// head.style.borderBottom = "solid 4px black"

// let input =document.querySelector("input");
// input.value="Add some items here";

// let submit=document.querySelector("input[type=submit]");
// submit.value="save";
// submit.style.color="red";


// let item=document.querySelector('.list-group-item');
// item.style.color='red';
// item.textContent="Hello";

// // to get the last element

// let last=document.querySelector(".list-group-item:last-child");
// last.style.color="coral";

// // to get  the nth child 

// let second=document.querySelector('.list-group-item:nth-child(2)');
// second.style.color="grey";
// second.style.backgroundColor="black";


// // querySelectorAll

// let title =document.querySelectorAll(".title");
// console.log(title);

// let odd=document.querySelectorAll("li:nth-child(odd)");
// let even=document.querySelectorAll("li:nth-child(even)");
// for(let i=0;i<odd.length;i++){
// odd[i].style.backgroundColor="#f4f4";
// even[i].style.backgroundColor="red";

// parrent node

let item=document.querySelector("#items");
// console.log(item.parentNode);
// console.log(item.parentNode.parentNode.parentNode);

// console.log(item.parentElement);
// console.log(item.parentElement.parentElement);

// children 

// console.log(item.childNodes);
// console.log(item.childNodes.childNodes);
// console.log(item.children);
// item.children[1].style.color="white";
// item.children[1].style.backgroundColor="coral";

// // firstchild

// // console.log(item.firstChild);
// // console.log(item.firstElementChild);
// item.firstElementChild.style.color="#f4f";

// console.log(item.lastElementChild);
// item.lastElementChild.style.backgroundColor="green";
// item.lastElementChild.style.color="blue";


// sibillings 

// next siblings

// console.log(item.nextSibling);
// console.log(item.nextElementSibling);

// previous siblings

// console.log(item.previousElementSibling);
// creating element 

let newDiv=document.querySelector("div");
console.log(newDiv);
//adding class to the new div
newDiv.className="hello";
// adding id to the new div
newDiv.id="newdiv";

// adding a new attribute to the new div

newDiv.setAttribute("title","mytitle");
// console.log(newDiv);

// to add values to new div we need to create a text node 

let newdivtext=document.createTextNode("textnode");
// adding the new text node to div

newDiv.appendChild(newdivtext);
// how we created a div with text text node in th js and now we need to addt this to dom
// for that we need to find the place for adding our node

let container =document.querySelector("header .container");
let h1=document.querySelector("header h1")
container.insertBefore(newDiv,h1);



newDiv.style.fontSize="30px";;





