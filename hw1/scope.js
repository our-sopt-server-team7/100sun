// function scope (var) VS block scope (let, const)
function funcScope() {
    var v1 = 123; // in this function
    if (true) {
        var v2 = 123; 
        let ll = 'abc'; // in this if-block
        console.log('let은 Block Scope, ll : ', ll);
    }
    // at the end of this if-block scope : console.log('let은 Block Scope, ll : ', ll);
    console.log('var은 function Scope, v2 : ', v2);
}
funcScope();
// at the end of this function scope : console.log('var은 function Scope, v1 : ', v2);