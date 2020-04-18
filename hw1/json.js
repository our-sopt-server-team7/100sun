// JavaScript Object Notation
var sopt = {
    // name : value <property>
    name : 'OUR SOPT',
    slogan : 'WE LEAD OUR SOPT',
    part : ['plan', 'design', 'android', 'iOS', 'server'],
    number : 180,
    printName : function () { // method <property>
        console.log('name : ', this.name )
    },
    printNum : function () {
        console.log('number : ', this.number )
    }
};

console.log('typeof sopt : ' + typeof sopt); // typeof : return type

// + VS ,
console.log('sopt : ' + sopt); // +
console.log('sopt : ', sopt); // ,
console.log('sopt :' + JSON.stringify(sopt)); // +

sopt.printName();
sopt.number = 190;
sopt.printNum();

// JSON array
var dogs = [
    { name: '식빵', family: '웰시코기', age: 1, weight: 2.14},
    { name: '콩콩', family: '포메라니안', age: 3, weight: 2.5},
    { name: '두팔', family: '푸들', age: 7, weight: 3.1}
];

console.log('dogs : ' + dogs);
console.log('dogs : ', dogs);
console.log('dogs :' + JSON.stringify(dogs));

dogs.forEach( 
    dog => console.log(dog.name+'이는 종이 '+dog.family+'이고, 나이가 '+dog.age+'세입니다 ~')
    );