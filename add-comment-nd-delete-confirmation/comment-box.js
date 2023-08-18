// accessing elements
const postBtn=document.getElementById("post-btn");
const commentBox=document.getElementById("comment-box");
const paragraph=document.getElementsByClassName("comment");
const commentContainer=document.getElementById("comment-container");

// add event listener
postBtn.addEventListener("click",function(){
    const p = document.createElement("p");
    p.innerText=commentBox.value;
    commentContainer.appendChild(p);
    commentBox.value = "";
});
