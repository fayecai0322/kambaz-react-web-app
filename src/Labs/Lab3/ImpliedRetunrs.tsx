
export default function ImpliedReturn() {
 const multiply = (a:number, b:number) => a * b; // Arrow function with implied return
    const fourTimesFive = multiply(4,5);// Calls the function
    console.log(fourTimesFive);
    return(
        <div id="wd-implied-return">
            <h4>Implied return</h4>
            fourTimesFive = {fourTimesFive} <br />
            multiply(4,5) = {multiply(4,5)} <hr />
        </div>
    );
}