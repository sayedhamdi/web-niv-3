export function generateCode(){
    let code = ''
    for(let i=0;i<5;i++){
       code+= Math.trunc(Math.random()*10) 
    }
    return code
}

