// const items=document.getElementsByClassName("item");
// // parentNode
// for (const item of items) {
//     item.addEventListener("click",function(event){
//         // event.target.style.display="none";
//          event.target.parentNode.removeChild(event.target); 
//     })
// }

// delegate event from child to its parent
const itemsContainer =document.getElementById("items-container");
itemsContainer.addEventListener("click",function(event){
    event.target.parentNode.removeChild(event.target);
})
// Add new items
const addBtn=document.getElementById("add-btn");
addBtn.addEventListener("click",function(){
    const li = document.createElement("li");
    li.classList.add("item");
    li.innerText="New Fruit";
    itemsContainer.appendChild(li);
})