// take two inputs from the user
// add the values
// show the result

const {createInterface } = require('readline')
let x,y;
let rl = createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('het noumrou lowel : ',(v)=>  {
    x= Number(v);    
    rl.question('het noumrou theni : ',(v)=>  {
        y=Number(v)
        rl.close();
        let resultat = x + y;
        console.log(`somme de ${x} + ${y} = ${resultat}`)
    })
})






