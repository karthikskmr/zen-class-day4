const details= {
    "name":"zzz",
    "email": "zzz@gmai.com",
    "age":25,
    "city":"trichy",
    "isInidan":true
};


//for in
for( i in details){
    console.log(i);//index print using for in
    console.log(details[i]); // value print for in
}

//for of
for( value of Object.keys(details)){
    console.log(value); // print all keys
    console.log(details[value]);
}

for( value of Object.values(details)){
    console.log(value);  //print value using for of
}

//FOR
let key = Object.keys(details);
for(let i=0;i<key.length;i++){

    console.log(key[i]);//print key values
    console.log(details[key[i]]); // print values
}

