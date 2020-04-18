// array declaration 
var server1 = ["A", "B", 34, null, true]; // array literal
var server2 = Array("C", "D", 13); // object constructor  
var server3 = new Array("E", "F", false, undefined); // new operator

console.log('server1 : ', server1);
console.log('server2 : ', server2);
console.log('server3 : ', server3);

// pushing element
server1.push(123); // method
server2[server2.length] = "hey";
server3[99] = "sophia";

console.log('server1 : ', server1);
console.log('server2 : ', server2);
console.log('server3 : ', server3);

// for Loop

// for - of : get their values
let str1 = 'there are "';
for(var item of server1){
    str1 += item + ', ';
}
str1 += '" in server1';
console.log(str1);

// for - in : get their indexes;
let str2 = 'there are "';
for(var item in server2){
    str2 += server2[item] + ', ';
}
str2 += '" in server1';
console.log(str2);

// forEach : get their values ( -> function )
let str3 = 'there are "';
server3.forEach( item => str3 += item + ', ');
str3 += '" in server 3';
console.log(str3);