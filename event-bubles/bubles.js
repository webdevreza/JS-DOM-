document.getElementById("item-2").addEventListener("click",function(event){
console.log("Item 2 is clicked - 1");
event.stopImmediatePropagation();// to stop all event bubles also events on same item.

})
// this is stoped by event.stopImmediatePropagation();
document.getElementById("item-2").addEventListener("click",function(){
console.log("Item 2 is clicked - 2 ");
})
// STOP event bubles
// document.getElementById("item-2").addEventListener("click",function(event){
// console.log("Item 2 is clicked");
// event.stopPropagation();
// })

document.getElementById("ul").addEventListener("click",function(){
console.log("ul is clicked");
})

document.getElementById("section-container").addEventListener("click",function(){
console.log("Section is clicked");
})