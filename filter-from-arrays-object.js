// =============== for VS for-of===================

const fruits2=["Apple","Mango","Bananna"];

console.log("======== for ========");

for (let i = 0; i < fruits2.length; i++) {
    console.log(fruits2[i]);
}

console.log("======== for of ========");
for (const fruit of fruits2) {
    console.log(fruit);
}



// Filter from an Array's Object without using filter()
const products=[
    {id:1,name:"Iphone 12",price:100000},
    {id:2,name:"Samsung Note 7",price:80000},
    {id:3,name:"xiomi Redmi Note 11 Pro",price:50000},
    {id:4,name:"Realme note 10",price:40000},
    {id:5,name:"Walton",price:30000},
    {id:6,name:"Vivo",price:20000}
];

function matchFinder(allProducts, search) {
    const matched = [];
    for (const product of allProducts) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product.name)
        }
    }
    return matched;
}
console.log(matchFinder(products,"note"));
