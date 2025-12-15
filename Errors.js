function div(a, b){
    if(typeof a !== "number" || typeof b !== "number") return;

    if(b === 0){
        throw new RangeError("Can't divide by 0");
    }

    return a / b;
}

let numbers = [10, 40, 0, 20, 50];

for(let i = 0; i < numbers.length; i++){
    try{
        console.log(div(1000, numbers[i]));
    } catch (error){
        console.log(error.message);
    }
}