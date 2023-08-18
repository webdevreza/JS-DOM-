//Accessing element
const deleteText=document.getElementById("delete-text");
const deleteInput=document.getElementById("delete-input");
const deleteBtn=document.getElementById("delete-btn");

deleteInput.addEventListener("keyup",function(event){
    if (event.target.value.toLowerCase()==="delete") {
        deleteBtn.removeAttribute("disabled")
    } else {
        deleteBtn.setAttribute("disabled",true)
    }
})

deleteBtn.addEventListener("click",function(){
    if (deleteInput.value.toLowerCase()==="delete") {
        deleteText.style.display="none";
        deleteInput.value=""
    }
})



























