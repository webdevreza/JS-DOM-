const student={
    name:"Rezaul Karim",
    age:function(birthYear){
        return 2023 - birthYear;
    },
    maritalStatus: true,
    lang:["Bangla","English","Arabic"],
    friends:{
        bestFriend: "Sagor",
        goodFriends:["Mohsin","Nazmul","Tanbir","Miraj"]
    },

}
student.age(1996)
console.log(student);

const product = [
    {name:"Phone",price:16500},
    {name:"laptop",price:32000}
]
