
// defining a FatArrow => function
const fun = (a, b) => {
    return a + b;
}

// this gets executed
// and save the data inside this variable
// vanilla JS just dynamically determines the type without static-typing
const dataOutput = add(2, 5);

// IDE reserved keyword
console.log(dataOutput)

// ALWAYS need to use static-typing to inform larger codebase engineers that the TS function EXPECTS specific data-type