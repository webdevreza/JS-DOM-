// console.log(document);
// console.log(document.body);

//========= 01. getElementByTagName ============

const allHeading1 = document.getElementsByTagName("h1");
console.log(allHeading1);// This result is not an Array but it is called Array Like Object. We can do many types of Array operations with it but not all types operations we can do with array.

for (const heading of allHeading1) {
    console.log(heading.innerText);
}

const fruits = document.getElementsByTagName("li");
for (const fruit of fruits) {
    console.log(fruit.innerText);
}

//========= 02. getElementById ===========

document.getElementById("favorite").style.color="red";


//========= 03. getElementsByClassName ===========

// document.getElementsByClassName("good").style.color="green"; // NOT WORKING because: The method getElementsByClassName returns a collection (specifically a NodeList) of all elements with the specified class name, not just a single element. Therefore, you can't directly set a style on the entire collection. Instead, you need to loop over each individual element in the collection and set the style on it.


const goodFruits=  document.getElementsByClassName("good");
// console.log(goodFruits);
// goodFruits[0].style.color="green"

for (const goodFruit of goodFruits) {
    goodFruit.style.backgroundColor="lime";
    goodFruit.style.marginBottom="5px";
}

//========= 04. querySelector===========

const heading1=document.querySelector(".heading");// only first element
heading1.style.color="blue";

//========= 05. querySelectorAll===========

const allHeadings = document.querySelectorAll(".heading");
for (const heading of allHeadings) {
    heading.style.backgroundColor="skyBlue";
}
