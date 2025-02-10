{/**
Arrow functions are a more concise way 
to write functions compared to traditional function expressions. 
*/}
const subtract = (a: number, b: number) =>{
    return a - b;
};
export default function ArrowFunctions(){
    const threeMinusOne = subtract(2,1); {/*calling the subtract function */}
    console.log(threeMinusOne);
    return(
        <div id="wd-arrow-functions">
            <h4>New ES6 arrow functions</h4>
            threeMinusOne = {threeMinusOne} <br /> {/*filled in the result */}
            subtract(3,1) = {subtract(3,1)} <hr />
        </div>
    );

}

{/** Non arrow
// Regular function declaration
function subtract(a: number, b: number) {
    return a - b;
}

export default function ArrowFunctions() {
    const threeMinusOne = subtract(3, 1); // Calling the subtract function
    console.log(threeMinusOne);

    return (
        <div id="wd-arrow-functions">
            <h4>New ES6 functions</h4>
            threeMinusOne = {threeMinusOne} <br /> 
            subtract(3,1) = {subtract(3,1)} <hr />
        </div>
    );
}
*/}